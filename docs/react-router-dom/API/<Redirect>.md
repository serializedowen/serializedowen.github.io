---
date: '2019-03-26'
title: '<Redirect>'
category: 'docs'
---

### `<Redirect>`

渲染`<Redirect>`会导航到新位置。新位置将覆盖历史记录堆栈中的当前位置，就像服务器端重定向（HTTP 3xx）一样。

#### to: string

重定向到的 url，所以可以被[path-to-regexp@^1.7.0 ](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)识别的 url 都能使用。所有在 from 中匹配到的 url 参数必须都被使用。

```js
<Redirect to="/somewhere/else" />
```

#### to: object

重定向到的 url，所以可以被[path-to-regexp@^1.7.0 ](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)识别的 url 都能使用。所有在 from 中匹配到的 url 参数必须都被使用。

state 可以通过 this.props.location.state 重定向到组件中的对象进行访问。referrer 值可以通过 this.props.location.state.referrer 在 Login 指向的组件中访问'

```js
<Redirect
  to={{
    pathname: '/login',
    search: '?utm=your+face',
    state: { referrer: currentLocation }
  }}
/>
```

#### push: bool

值为 true 时，重定向会将新条目推入 history 栈，而不是替换当前条目。

#### from: string

从 from 指向的 url 开始重定向，所以可以被[path-to-regexp@^1.7.0 ](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)识别的 url 都能使用。会将所有匹配的 URL 参数提供给属性 to。必须包含中使用的所有参数 to。未使用的其他参数将 to 被忽略。

> 仅当渲染的`<Redirect>`内部时，才可以使用它来匹配位置`<Switch>`。请参阅`<Switch children>`以获取更多详细信息。

```js
<Switch>
  <Redirect from='/old-path' to='/new-path' />
  <Route path='/new-path'>
    <Place />
  </Route>
</Switch>

// Redirect with matched parameters
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id'>
    <Profile />
  </Route>
</Switch>
```

#### exact: bool

#### strict: bool

#### sensitive: bool

匹配时是否区分大小写，true 时为区分
