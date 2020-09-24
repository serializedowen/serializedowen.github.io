---
date: '2019-03-23'
title: '<Switch>'
category: 'docs'
---

### `<Switch>`

渲染第一个和 location 匹配的子路由。

这与仅使用一堆`<Route>`有何不同？

`<Switch>`独特之处在于它仅渲染一条路由。相反，每个`<Route>`与位置匹配的内容都包含在内。考虑以下路由：

```js
import { Route } from 'react-router'

let routes = (
  <div>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </div>
)
```

如果 URL 是 /about， 那么`<About>`, `<User>`, 和`<NoMatch>`都会被同时渲染。这是符合设计目标的，因为这会允许我们把`<Route>`以多种方式结合在应用中，例如侧边栏，面包屑和引导标签等等。

但是，有时我们只想选择一个`<Route>`进行渲染。如果我们不在，/about 我们也不想匹配/:user（或显示“ 404”页面）。这是使用以下方法的方法 Switch：

```js
import { Route, Switch } from 'react-router'

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
)
```

现在，如果我们在/about，`<Switch>`将开始寻找匹配项`<Route>`。`<Route path="/about"/>`将匹配并`<Switch>`停止寻找匹配项和渲染`<About>`。
同样，如果我们在/michael 那时，`<User>`将进行渲染。这对于动画过渡也很有用，因为匹配`<Route>`的渲染位置与上一个相同。

````js
let routes = (
  <Fade>
    <Switch>
      {/* 只会渲染一条路由项 */}
      <Route />
      <Route />
    </Switch>
  </Fade>
);

let routes = (
  <Fade>
    {/* 这里会一直有2条路由项被渲染，尽管可能其中一条返回了null，这将给添加动画带来很大的困扰 */}
    <Route />
    <Route />
  </Fade>
);```
````

#### location: object

一个用于匹配子路由的 location 对象，替换掉当前 history.location 中的值（通常是浏览器的 URL 值）

#### children: node

所有`<Switch>`的子组件都应该是`<Route>`或者`<Redirect>`组件。只有第一个与 location 对象匹配的组件会被渲染、

`<Route>`组件使用 path 属性来匹配 location，`<Redirect>`组件使用 from 属性。 一个没有 path 属性的`<Route>`和一个没有 from 属性的`<Redirect>`会一直匹配当前 location。

如果将 location 属性提供给`<Switch>`，它将覆盖 location 匹配的子元素上的属性。

```js
import { Redirect, Route, Switch } from 'react-router'

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/users">
      <Users />
    </Route>
    <Redirect from="/accounts" to="/users" />

    <Route>
      <NoMatch />
    </Route>
  </Switch>
)
```
