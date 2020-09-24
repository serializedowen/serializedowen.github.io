---
date: '2019-03-30'
title: '<BrowserRouter>'
category: 'docs'
---

### <BrowserRouter>

一个使用 HTML5 history API 的`<Router>`（ pushState，replaceState 和 popstate 事件），让您的 UI 同步与 URL。

#### basename: string

所有导航的路径前缀。如果你的应用不是部署在根目录上，你需要把它设置为部署的相对地址。basename 属性应该有带有`/`前缀，但不包括`/`后缀

```jsx
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // 渲染 <a href="/calendar/today">
    <Link to="/tomorrow"/> // 渲染 <a href="/calendar/tomorrow">
</BrowserRouter>
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

#### forceRefresh: bool

如果值为 true，导航时会刷新整个页面。您可能希望使用它来模仿传统的服务器渲染应用程序在页面导航之间刷新整个页面的工作方式。

```js
<BrowserRouter forceRefresh={true} />
```

#### keyLength: number

location.key 的长度，默认为 6.

```js
<BrowserRouter keyLength={12} />
```

#### children: node

要渲染的组件

> 注：react<16 中你只能包括一个子节点，因为 render 方法不能返回超过一个的根节点。如果你需要多个根节点，你只需要把他们包裹在一个`<div>`中
