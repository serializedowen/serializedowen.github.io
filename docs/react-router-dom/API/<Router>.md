---
date: '2019-03-24'
title: '<Router>'
category: 'docs'
---

### `<Router>`

所有路由器组件的通用底层接口。通常，应用将使用高级路由器之一代替：

- `<BrowserRouter>`
- `<HashRouter>`
- `<MemoryRouter>`
- `<NativeRouter>`
- `<StaticRouter>`

使用底层路由器的最常见用例是将自定义历史记录与状态管理库（例如 Redux 或 Mobx）进行同步。请注意，这不是使用状态管理库与 React Router 的必须步骤，而仅用于深度集成。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  node
)
```

#### history: object

导航使用的 history 对象

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

const customHistory = createBrowserHistory()

ReactDOM.render(<Router history={customHistory} />, node)
```

#### children: node

渲染的子组件

```js
<Router>
  <App />
</Router>
```
