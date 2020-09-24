---
date: '2019-03-18'
title: 'withRouter'
category: 'docs'
---

### `withRouter`

你可以通过 withRouter 高阶组件 访问 history 对象的属性和最近`<Route>`匹配。withRouter 在每次重新渲染时都会更新最新的 match, location, 和 history 属性。

```js
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// 一个显示当前路径的简单组件
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props

    return <div>You are now at {location.pathname}</div>
  }
}

// 创建一个connect 路由器的组件(借用redux术语) .
const ShowTheLocationWithRouter = withRouter(ShowTheLocation)
```

> 重要提示：withRouter 不像 React Redux 那样订阅位置更改 connect 以进行状态更改。而是在位置更改后从<Router>组件传播出来，然后重新渲染。这意味着，withRouter 它不会对路线的转变重新渲染，除非它的父组件重新渲染。

#### Component.WrappedComponent

被包裹的组件可以用 withRouter 返回对象的静态属性来获得。这会在隔离环境中测试和一些其他用例中有帮助。

```js
// MyComponent.js
export default withRouter(MyComponent)

// MyComponent.test.js
import MyComponent from './MyComponent'
render(<MyComponent.WrappedComponent location={{...}} ... />)

```

#### wrapperComponentRef：func

一个方法，并将返回值传给包裹组件的 ref 属性（forwardRef）

```js
class Container extends React.Component {
  componentDidMount() {
    this.component.doSomething()
  }

  render() {
    return <MyComponent wrappedComponentRef={c => (this.component = c)} />
  }
}
```
