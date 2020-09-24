---
date: '2019-03-22'
title: 'history'
category: 'docs'
---

### `history`

翻译 ing

本文档中的术语“history”和“history 对象”指的是[history](https://github.com/ReactTraining/history)软件包，它是 React Router 仅有的两个主要依赖项之一（除了 React 本身），它提供了几种不同的实现来管理各种环境中 JavaScript 的会话历史。

以及一下几个术语：

- "browser history": 特定于 DOM 的实现，在支持 HTML5 history API 的 Web 浏览器中很有用
- "hash history": 特定于 DOM 的实现，在不支持 HTML5 history API 的 Web 浏览器中很有用
- "memory history": 一个在内存中管理 history 的实现，在非浏览器环境和测试环境中很有用

history 对象通常包含以下属性：

- length - (number): history 中的记录数量
- action - (string): 当前的操作（PUSH, POP, REPLACE)
- location - (object): 当前的 location 对象
- push - (path, [state]): 向 history 栈推一条记录
- replace - (path, [state]): 将 history 栈顶部的记录替换
- go - (n): 在 history 栈中移动 n 步
- goBack - (): 与 go(-1)相同
- goFoward - (): 与 go(1)相同
- block - (prompt): 阻止导航

#### history 是可变对象

历史对象是可变的。因此，建议从`<Route>`的 history 属性访问，而不是从 history.location。这可以确保您对 React 的假设在生命周期挂钩中是正确的。例如：

```js
class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    // will be true
    const locationChanged = this.props.location !== prevProps.location

    // 错误, 会一直是false
    const locationChanged =
      this.props.history.location !== prevProps.history.location
  }
}
;<Route component={Comp} />
```
