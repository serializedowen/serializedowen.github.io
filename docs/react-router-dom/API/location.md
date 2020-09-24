---
date: '2019-03-21'
title: 'location'
category: 'docs'
---

### `location`

location 对象表示应用程序现在所在的位置，您希望其运行的位置，甚至是以前的位置。看起来像这样：

```json
{
  "key": "ac3df4",
  "pathname": "/somewhere",
  "search": "?some=search-string",
  "hash": "#howdy",
  "state": {
    [userDefined]: true
  }
}
```

react router 会在以下几个场景中为您注入 location 对象：

- Route 组件中：`this.props.location`
- Route 组件的 render 方法中：`({ location }) => ()`
- Route 组件的子组件中：`({ location }) => ()`
- withRoutor 高阶组件中： `this.props.location`

你也可以在 history.location 中找到他，但你不应该使用他，因为他是可变对象。[扩展阅读](https://reactrouter.com/)

位置对象永远不会发生变化，因此您可以在生命周期挂钩中使用它来确定导航发生的时间，这对于数据获取和动画处理非常有用。

```js

componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // navigated!
  }
}
```

你可以在以下场景中提供 location 对象来进行导航：

- `<Link to={}`
- `<Redirect to={}`
- `history.push()`
- `history.replace()`

通常情况下你应该使用字符串，但如果你需要在 location 之前持久化一些数据，那你可以使用 location 对象。如果您要基于导航历史而不是仅基于路径（如模式）来分支 UI，这将非常有用。

```js
// 通常你仅需要
<Link to="/somewhere"/>

// 但你也可以：
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}

<Link to={location}/>
<Redirect to={location}/>
history.push(location)
history.replace(location)

```

最后，您可以将 location 传递给以下组件：

- `<Switch>`
- `<Route>`

这样可以防止他们在路由器状态下使用实际 location 对象。这对于动画和未完成的导航非常有用，或者在您想要诱使组件在与 location 对象不同的位置进行渲染时，这很有用。
