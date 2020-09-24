---
date: '2019-03-20'
title: 'match'
category: 'docs'
---

### `match`

一个 match 对象如何匹配`<Route path>`到 URL 的相关信息。match 对象包含以下属性：

- params: (object): 从路径动态段的 URL 解析的键/值对。
- isExact: (boolean): 如果整个 URL 匹配是会是 true （没有不被匹配的后缀）
- path: (string): 用于匹配的路径模式，在构建嵌套`<Route>`时会有用。
- url: (string): 匹配部分的 URL。在构建嵌套`<Link>`时有用。

你也可以在以下场景中获得自动注入的 match 对象：

- Route 组件中：`this.props.match`
- Route 组件的 render 方法中：`({ match }) => ()`
- Route 组件的子组件中：`({ match }) => ()`
- withRoutor 高阶组件中： `this.props.match`
- matchPath 中：返回值
- useRouteMatch 中：返回值

如果一条`<Route>`没有 path 属性，那他将一直被匹配，那种情况下你会获得最近的匹配中的 match 对象。（withRouter 高阶组件中亦是如此）

#### 空匹配

一个使用 children 属性来匹配路由的`<Route>`在不匹配的情况下仍然会调用 children 方法，这种情况下，match 的值会是 null。在不匹配路由时仍然渲染其包含的组件可能会很有用，但在这种情况下你会面对一些挑战。

“解析” URL 的默认方法是将 match.url 字符串连接到“相对”路径。:

```js
let path = `${match.url}/relative-path`
```

如果你在 match 值为 null 是进行上述操作，你会得到一个 TypeError。

一个相似的，但是更加微妙的情况会在以下场景出现：

```js
// location.pathname = '/matches'
<Route path="/does-not-match"
  children={({ match }) => (
    // match === null
    <Route
      render={({ match: pathlessMatch }) => (
        // pathlessMatch === ???
      )}
    />
  )}
/>

```

无路径`<Route>`从它的父对象继承 match 属性。如果他们的父母 match 是 null，他们的 natcg 也将是 null。这意味着：

- a）任何子路径/链接都必须是绝对的，因为没有父级可以解析，并且
- b）无路径路由的父级 match 可以 null 使用 childrenprop 进行渲染。
