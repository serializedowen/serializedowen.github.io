---
date: '2019-03-29'
title: '<Link>'
category: 'docs'
---

### `<Link>`

为你的 web 应用提供声明式，高可用性的路由导航。

#### to: string

链接位置的字符串表示形式，是通过将位置的路径名，搜索 query 和 hash 属性连接在一起而创建的。

```js
<Link to="/courses?sort=name" />
```

或

#### to: object

一个包含以下属性的对象：

- pathname: 链接地址的路径表示
- search: 查询属性的字符串表示
- hash: url 中的 hash 部分
- state: location 要在地址上持久化的属性

```js
<Link
  to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
  }}
/>
```

或

#### to: function

一个传入当前 location 属性，并返回上述 string 或 object 类型的方法

```js
<Link to={location => ({ ...location, pathname: "/courses" })} />
<Link to={location => `${location.pathname}?sort=name`} />

```

#### replace: bool

当 replace 属性为 true 时，点击 Link 会替换当前 history 栈中的值，而不是添加一项

```js
<Link to="/courses" replace />
```

#### innerRef: function

从 React Router 5.1 开始，如果您使用的是 React 16，则不需要此属性，因为我们会将 ref 转发到底层<a>。您仅需使用默认的 ref 属性

```js
<Link
  to="/"
  innerRef={node => {
    // `node` 会指向<a>元素
  }}
/>
```

#### innerRef: RefObject

从 React Router 5.1 开始，如果您使用的是 React 16，则不需要此属性，因为我们会将 ref 转发到底层<a>。您仅需使用默认的 ref 属性

```js
let anchorRef = React.createRef()

<Link to="/" innerRef={anchorRef} />
```

#### component: React.Component

如果您想利用自己的导航组件，只需将其传给 component 属性即可。

```js
const FancyLink = React.forwardRef((props, ref) => (
  <a ref={ref}>💅 {props.children}</a>
))

<Link to="/" component={FancyLink} />
```

#### 其他

你可以将其他属性直接传给底层的`<a>`元素，例如 title,id,className 等
