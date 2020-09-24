---
date: '2019-03-26'
title: '<MemoryRouter>'
category: 'docs'
---

### `<MemoryRouter>`

一个使用内存读写“URL”和历史记录的路由器（不读或写到地址栏）。在测试和非浏览器环境（例如 React Native）中很有用。

```js
<MemoryRouter
  initialEntries={optionalArray}
  initialIndex={optionalNumber}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</MemoryRouter>
```

#### initialEntries: array

一个初始化 history 栈的数组，他们可以是带有 { pathname, search, hash, state } 属性的对象或者 url 字符串。

```js
<MemoryRouter
  initialEntries={['/one', '/two', { pathname: '/three' }]}
  initialIndex={1}
>
  <App />
</MemoryRouter>
```

#### initialIndex: number

用于表示初始记录在 initialEntries 中的位置。

#### getUserConfirmation: func

用于确认导航的方法。默认使用 window.prompt

```js
<MemoryRouter
  getUserConfirmation={(message, callback) => {
    // 默认效果
    const allowTransition = window.confirm(message)
    callback(allowTransition)
  }}
/>
```

#### keyLength: number

location.key 的长度，默认为 6.

```js
<MemoryRouter keyLength={12} />
```

#### children: node

要渲染的组件

> 注：react<16 中你只能包括一个子节点，因为 render 方法不能返回超过一个的根节点。如果你需要多个根节点，你只需要把他们包裹在一个`<div>`中
