---
date: '2019-03-25'
title: '<Route>'
category: 'docs'
---

### `<Route>`

`<Route>`组件应该是 react-router-dom 包里最重要的，最值得去认真学习和使用的组件。它最基本的责任就是在 URL 和自己的路径对应时渲染 UI。

思考下列代码：

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <NewsFeed />
      </Route>
    </div>
  </Router>,
  node
)
```

如果应用程序的位置是/，则 UI 层次结构会类似于：

```js
<div>
  <Home />
  <!-- react-empty: 2 -->
</div>
```

如果应用程序的位置是/news，则 UI 层次结构会类似于：

```js
<div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div>
```

“ react-empty”注释只是 React null 渲染的实现细节。但这有助于我们说明 react-router 的实现细节。因为事实上在 react-router 的实现，不管`<Route>`匹配与否，他对应的组件是一直渲染的。（不匹配时渲染 null， 匹配时渲染`<Route>` 对应的组件）

如果相同的组件在组件树的同一个层级中被当做多个`<Route>`的子组件，那么 React 会把他们当做相同的组件，因此，在切换路由时候它的 state 值会被保留。如果这不是你的期望，你可以在`<Route>`加上唯一的 key 属性，来告诉 react 他们属于不同的组件。

#### `<Route>` render 方法

我们推荐使用子组件为`<Route>`提供渲染的组件，就像上述的案例中那样。但是，我们也为您提供了其他更多可选的方法（他们存在的主要意义是为了支持那些使用旧版本 react-router 编写的程序）

- `<Route component>`
- `<Route render>`
- `<Route children>` function

您只应该使用上述方法中的一种来为`<Route>`提供渲染的子组件。下面的案例会帮助您理解他们之间的区别：

#### 参数

下面几个参数会默认注入到`<Route>`包含的子组件渲染中

- [match](./match)
- [location](./location)
- [history](./history)

#### `<Route component>` 渲染

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// 所有路由属性 (match, location and history) 会被注入 User 组件
function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>
}

ReactDOM.render(
  <Router>
    <Route path="/user/:username" component={User} />
  </Router>,
  node
)
```

当您使用 component（而不是下面的 render 或 children）时，路由器将使用 React.createElement 从给定的组件创建一个新的 React 元素。这意味着，如果为 component 提供的 props 中包含内联函数，则在每次渲染时都会创建一个新组件。这将导致现有组件的卸载和新组件的挂载，而不仅仅是更新现有组件。使用内联函数进行内联渲染时，请使用 render 或 children 道具（如下）。

#### `<Route render>`

这样可以方便地进行内联渲染和包装，而不必进行上述不必要的重新挂载。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// convenient inline rendering
ReactDOM.render(
  <Router>
    <Route path="/home" render={() => <div>Home</div>} />
  </Router>,
  node
)

// wrapping/composing
// You can spread routeProps to make them available to your rendered Component
function FadingRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <FadeIn>
          <Component {...routeProps} />
        </FadeIn>
      )}
    />
  )
}

ReactDOM.render(
  <Router>
    <FadingRoute path="/cool" component={Something} />
  </Router>,
  node
)
```

> 警告： `<Route component>`优先级高于`<Route render>`，因此请不要在同一个`<Route>`中使用两者。

#### `<Route children>` function

有时您可能希望无论 url 匹配与否都渲染组件。在这种情况下，您可以使用 children prop 功能。它的工作原理与 render 完全相同，只是 render 只在存在匹配项而被调用和渲染。

children 属性接收 render 所有和 render 属性获得的一样的路由属性。唯一区别是，当路由不匹配的 URL 时，match 属性是 null。这使您可以根据路由是否匹配来动态调整 UI。active 如果路线匹配，我们在这里添加一个类

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function ListItemLink({ to, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  )
}

ReactDOM.render(
  <Router>
    <ul>
      <ListItemLink to="/somewhere" />
      <ListItemLink to="/somewhere-else" />
    </ul>
  </Router>,
  node
)
```

这对动画也很有用:

```js

<Route
  children={({ match, ...rest }) => (
    {/* 动画会始终渲染，因此你可以使用生命周期来动画控制组件的挂载和卸载 */}
    <Animate>
      {match && <Something {...rest}/>}
    </Animate>
  )}
/>

```

#### path: string | string []

所以可以被[path-to-regexp@^1.7.0 ](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)识别的 url 都能使用。

```js
<Route path="/users/:id">
  <User />
</Route>
<Route path={["/users/:id", "/profile/:id"]}>
  <User />
</Route>
```

#### exact: bool

当值为 true 时，仅当 location.pathname 和路由路径完全匹配时候渲染。

```js
<Route exact path="/one">
  <About />
</Route>
```

#### strict: bool

```js
<Route strict path="/one/">
  <About />
</Route>
```

| 路由路径 | location.pathname | 匹配与否 |
| -------- | ----------------- | -------- |
| /one/    | /one              | 否       |
| /one/    | /one/             | 是       |
| /one/    | /one/two          | 是       |

当值为 true 时，带有 path 斜杠的只会与 location.pathname 带有斜杠的匹配。当 location.pathname 中有其他网址段时，此选项无效。

```js
<Route exact strict path="/one">
  <About />
</Route>
```

| 路由路径 | location.pathname | 匹配与否 |
| -------- | ----------------- | -------- |
| /one/    | /one              | 是       |
| /one/    | /one/             | 否       |
| /one/    | /one/two          | 否       |

#### location: object

一个`<Route>`元素尝试其匹配 path 到当前的历史位置（通常是当前浏览器 URL）。但是，也可以传递与 location.pathname 不同的值进行匹配。如需要将`<Route>`与当前历史记录位置以外的其他位置进行匹配时，这很有用，如[Animated Transitions](https://reactrouter.com/web/example/animated-transitions)示例所示。如果`<Route>`元素包装在中，`<Switch>`并且与传递给的位`置<Switch>`（或当前历史记录位置）匹配，则 location 传递给`<Route>`的属性将被`<Switch>`上的属性 [代码](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Switch.js#L51)覆盖。

#### sensitive: bool

当值为 true 时，匹配时将区分大小写

| 路由路径 | location.pathname | sensitive 的值 | 匹配与否 |
| -------- | ----------------- | -------------- | -------- |
| /one/    | /one              | true           | 是       |
| /one/    | /one/             | true           | 否       |
| /one/    | /one/two          | false          | 否       |
