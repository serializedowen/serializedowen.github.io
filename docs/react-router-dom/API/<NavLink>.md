---
date: '2019-03-28'
title: '<NavLink>'
category: 'docs'
---

### `<NavLink>`

特殊版本的`<Link>`，它将在与当前 URL 匹配时将 css 样式属性添加到渲染的元素。

```js
<NavLink to="/about">About</NavLink>
```

#### activeClassName: string

当路径匹配时 dom 元素获得的 class 名称，与元素原有的 className 组合

```js
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

#### activeStyle: object

当路径匹配时获得的 css 样式

```js
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
  }}
>
  FAQs
</NavLink>
```

#### exact: bool

如果为 true，则仅当位置完全匹配时，才会应用 active 的 css 类名/css 样式。

#### isActive: func

一种为确定链接是否处于活动状态添加额外逻辑的方法。如果您要执行更多操作，而不是仅仅验证链接的路径名是否与当前 URL 的匹配，则应使用此方法。

```js
<NavLink
  to="/events/123"
  isActive={(match, location) => {
    if (!match) {
      return false
    }

    // 只有在id为奇数时才会添加active属性
    const eventID = parseInt(match.params.eventID)
    return !isNaN(eventID) && eventID % 2 === 1
  }}
>
  Event 123
</NavLink>
```

#### aria-current: string

应用于 active 链接上的 aria-current dom 属性值：

- "page": 用于指示一组分页链接中的链接
- "step": 用于指示基于步骤的过程的步骤指示器中的链接
- "location": 用于指示在视觉上突出显示的图像作为流程图的当前组成部分
- "date": 用于指示日历中的当前日期
- "time": 用于指示时间表中的当前时间
- "true": 用于指示 NavLink 是否处于活动状态

基于 [WAI-ARIA 1.1 规范](https://www.w3.org/TR/wai-aria-1.1/#aria-current)
