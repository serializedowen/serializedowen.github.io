---
date: '2019-03-29'
title: '<HashRouter>'
category: 'docs'
---

### `<HashRouter>`

一个使用 url 中的 hash 部分来导航的路由器。（window.location.hash)。

> 注意事项：hash history 不支持 location.key 或 location.state。在以前的版本中，我们尝试对行为进行匀称处理，但存在一些无法解决的极端情况。任何需要此行为的代码或插件都将无法工作。由于此技术仅旨在支持旧版浏览器，因此我们建议您正确配置您的服务器并使用`<BrowserRouter>`

#### basename: string

所有导航的路径前缀。如果你的应用不是部署在根目录上，你需要把它设置为部署的相对地址。basename 属性应该有带有`/`前缀，但不包括`/`后缀

```js
<HashRouter basename="/calendar"/>
<Link to="/today"/> // 渲染 <a href="#/calendar/today">

```

#### getUserConfirmation: func

用于确认导航的方法。默认使用 window.prompt

```js
<BrowserRouter
  getUserConfirmation={(message, callback) => {
    // 默认效果
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }}
/>
```

#### hashType: string

window.location.hash 的编码格式。有以下几种选择：

- `slash`：`#/` 和 `#/sunshine/lollipops`
- `noslash`：`#` 和 `#sunshine/lollipops`
- `hashbang`：`#!/` 和 `#!/sunshine/lollipops`

默认值是`slash`

#### children: node

要渲染的组件
