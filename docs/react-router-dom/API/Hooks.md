---
date: '2019-03-31'
title: 'Hooks'
category: 'docs'
---

### Hooks

React router 为您提供了一些 hook，方便你在组件中随时取用 react-router 的状态和进行导航操作

> 注意：你必须使用 react@16.8+ 才能使用这些 hooks！

- useHistory
- useLocation
- useParams
- useRouteMatch

#### useHistory

useHistory 钩子返回 history 对象，你可以在上面进行导航等操作

```js
import { useHistory } from 'react-router-dom'

function HomeButton() {
  let history = useHistory()

  function handleClick() {
    history.push('/home')
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  )
}
```

#### useLocation

useLocation 钩子返回一个代表当前 url 的 location 对象。你可以把它想象为一个 useState 钩子，并且在每次 url 变化后会替换为一个新对象。

在您希望每次加载新页面时都使用 Web 分析工具触发新的“pageView”事件的情况下，这可能非常有用，如以下示例所示：

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom'

function usePageViews() {
  let location = useLocation()
  React.useEffect(() => {
    ga.send(['pageview', location.pathname])
  }, [location])
}

function App() {
  usePageViews()
  return <Switch>...</Switch>
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
)
```

#### useParams

useParams 返回 URL 参数的键/值对的对象。使用它来访问 当前`<Route>`对应的 match.params。

```js
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

function BlogPost() {
  let { slug } = useParams()
  return <div>Now showing post {slug}</div>
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
)
```

#### useRouteMatch

useRouteMatch 钩子会尝试以与<Route>组件相同的方式去匹配当前 url。在你希望获得路径匹配数据但不希望使用`<Route>`的时候他可能会很有用。

以前你可能需要：

```js
import { Route } from 'react-router-dom'

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // Do whatever you want with the match...
        return <div />
      }}
    />
  )
}
```

而现在：

```js
import { useRouteMatch } from 'react-router-dom'

function BlogPost() {
  let match = useRouteMatch('/blog/:slug')

  // Do whatever you want with the match...
  return <div />
}
```

useRouteMatch 钩子接受一个可选参数，该参数与 matchPath 的 props 参数相同。它可以是字符串的路径名（如上面的示例），也可以是带有 Route 接受的匹配道具的对象，如下所示：

```js
const match = useRouteMatch({
  path: '/BLOG/:slug/',
  strict: true,
  sensitive: true
})
```
