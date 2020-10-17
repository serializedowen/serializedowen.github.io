---
date: '2020-10-15'
title: 'Location 配置详解'
category: 'Nginx'
---

这篇文章来源于自己网站的需求

### location 模块的语法

```
location optional_modifier location_match {

    . . .

}
```

其中 optional_modifier 代表可选的 location 修饰符, 修饰符的存在或不存在会影响 Nginx 尝试匹配位置块的方式。解释如下：

- （无）：如果不存在修饰符，则该位置将解释为前缀匹配。这意味着给定的位置将与请求 URI 的开头进行匹配以确定是否匹配。
- =：如果使用等号，则只有在请求 URI 完全匹配给定的位置才会被被视为匹配。
- ~：如果存在波浪号修饰符，则此位置将被解释为区分大小写的正则表达式匹配。
- ~\*：如果使用了波浪号和星号修饰符，则位置块将被解释为不区分大小写的正则表达式匹配。
- ^~：如果存在克拉和波浪号修饰符，则表示如果当此项被选为最佳的非正则匹配时，其他正则匹配将不在有效。

#### 语法示例

下列是一个前缀匹配示例，他会匹配/site, /site/page1/index.html, /site/index.html 等等

```
location /site {
    . . .
}
```

下面则是一个绝对 URI 匹配，仅当请求地址和 location_match 完全相同时才会响应。他会匹配/page1，而不会匹配/page1/index.html：

```
location = /page1 {
    . . .
}
```

下列配置会匹配`/tortoise.jpg` 但不会匹配`/FLOWER.PNG`:

```
location ~ \.(jpe?g|png|gif|ico)$ {
    . . .
}
```

下列配置会匹配`/tortoise.jpg`和`/FLOWER.PNG`:

```
location ~* \.(jpe?g|png|gif|ico)$ {
    . . .
}
```

#### Nginx 如何选择用哪个 location 模块 去响应请求

Nginx 会使用一个固定的流程为您的请求选择最佳 location 模块，而这个流程和选择 server 模块的流程非常相似。理解它对正确配置和使用 Nginx 至关重要：

- 首先 Nginx 会遍历所有的前缀匹配（所有不包含正则表达式的 location 模块）并尝试匹配请求 URI。
- 第一步，Nginx 会寻找完全匹配项（包含 = 修饰符的 location 模块），如果找到，Nginx 将停止遍历并用当前匹配来响应请求。
- 如果没有找到完全匹配项，Nginx 接下来会去尝试寻找最长的非完全匹配项。
  - 如果最长匹配项中有 ^~ 修饰符，那么 Nginx 会立即终止接下来的查询并用当前 location 模块来响应请求
  - 如果不含^~ 修饰符，Nginx 会暂存当前 location 模块并继续搜索(使用栈来储存)
- 搜索完毕后，Nginx 按顺序依次匹配 location 模块中的正则表达式部分。如果正则表达式匹配，Nginx 会终止搜索并用当前 location 模块来响应请求。
- 如果最长非完全匹配项中没有匹配的正则表达式，则此匹配项会出栈，开始匹配第二长的非完全匹配项
- 搜索直到栈空，并返回 404 页面

> 需要注意的是，尽管通常情况下 Nginx 会匹配最长，最详细的匹配，但正则表达式是按顺序匹配的，并且在匹配时会立即返回并使用，所以配置中正则表达式的定义顺序相当重要！

### location 模块中的内部重定向

一般来说，当一个 location 模块已被选择来响应请求时，该请求的响应内容肯定会定义在这个 location 模块的上下文中。而不会受到其他 location 模块的干扰。

但有些情况下这并不满足我们的需求，所有 Nginx 为我们提供了一些内部重定向指令来触发新一轮的 location 模块匹配流程，这些指令是：

- index
- try_files
- rewrite
- error_page

#### index 指令

如果你的配置中包含 index 指令，则匹配不到时总是会触发内部重定向。在下列例子中，我们用= 修饰符精确匹配来加快搜索过程，但当我们 location 模块中是个文件夹，并且找不到匹配项时，index 指令会内部重定向到第二个 location 模块来处理请求：

```
index index.html;
location = /exact {
    . . .
}
location / {

    . . .
}
```

如果你要在这个例子中让匹配锁定在/exact 模块中，你可以进行下面的操作：

```
location = /exact {
    index nothing_will_match;  //一个肯定不会匹配的index项
    autoindex on;
}
location  / {
    . . .
}
```

#### try_files 指令

try_files 指令同样会导致内部重定向，

```
root /var/www/main;
location / {
    try_files $uri $uri.html $uri/ /fallback/index.html;
}

location /fallback {
    root /var/www/another;
}
```

上述例子中，如果你请求/blahblah，第一个 location 模块会首先匹配并处理请求。它会尝试寻找在`/var/www/main`目录下寻找 `blahblah`文件，然后寻找`blahblah.html`文件，最后寻找`blahblah/`目录。如果这些匹配全部失败，会内部重定向到`/fallback/index.html`。这会触发第二次 location 搜索流程并匹配到第二个 location 模块中。

#### rewrite 指令

```
root /var/www/main;
location / {
    rewrite ^/rewriteme/(.*)$ /$1 last;
    try_files $uri $uri.html $uri/ /fallback/index.html;
}

location /fallback {
    root /var/www/another;
}
```

这个例子中，`/rewriteme/hello`会先被第一个 location 模块处理，他会被重写成`/hello` 并重新开始 location 搜索流程，`/hello`依然会匹配第一个 location 模块，并开始 try_files，如果 try_files 找不到匹配项，则会跳转到 `/fallback`location 模块中。

### 引用

1. [Understanding Nginx Server and Location Block Selection Algorithms](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms#matching-location-blocks)
