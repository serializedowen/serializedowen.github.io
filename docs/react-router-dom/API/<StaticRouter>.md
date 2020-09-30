---
date: '2019-03-24'
title: '<StaticRouter>'
category: 'docs'
---

### `<StaticRouter>`

一种永远不会改变 location 的路由。

这个路由会在服务端渲染场景中有用（用户完全没有点击任何链接，因此也没有任何路由改变发生）。同样，他在单元测试场景中也很有用。
下列是一个示例 node 服务器，他会在有上下文 url 时发送 302 状态码，并在其他情况下发送 html

```js
import http from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

http
  .createServer((req, res) => {
    // This context object contains the results of the render
    const context = {}

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    )

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      })
      res.end()
    } else {
      res.write(html)
      res.end()
    }
  })
  .listen(3000)
```

#### basename: string

所有导航的路径前缀。basename 属性应该有带有`/`前缀，但不包括`/`后缀

```js
<StaticRouter basename="/calendar">
  <Link to="/today"/> // renders <a href="/calendar/today">
</StaticRouter>
```

#### location: string

服务端接受到的 url

```js
<StaticRouter location={req.url}>
  <App />
</StaticRouter>
```

#### location: object

一个格式类似于 `{ pathname, search, hash, state }`的对象

```js
<StaticRouter location={{ pathname: '/bubblegum' }}>
  <App />
</StaticRouter>
```

#### context: object

一个普通的 JavaScript 对象。在渲染期间，组件可以向对象添加属性以存储有关渲染的信息。

当`<Route>`匹配时，它将把上下文对象传递作为 staticContext 属性传给下游组件。查看[服务器渲染](../向导/服务端渲染)指南，以获取有关如何自行执行此操作的更多信息。渲染之后，这些属性可用于配置服务器的响应

```js
const context = {}
<StaticRouter context={context}>
  <App />
</StaticRouter>
if (context.status === "404") {
  // ...
}
```

#### children: node

要渲染的组件

> 注：react<16 中你只能包括一个子节点，因为 render 方法不能返回超过一个的根节点。如果你需要多个根节点，你只需要把他们包裹在一个`<div>`中
