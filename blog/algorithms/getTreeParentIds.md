---
date: '2020-09-15'
title: 'Get tree ancestor ids'
category: 'Algorithms'
---

<script>
const data = [
  {
    id: 1,
    name: '222',
    children: [
      {
        id: 2,
        name: '34',
        children: [
          {
            id: 112,
            name: '334'
          },
          {
            id: 113,
            name: '354'
          }
        ]
      }
    ]
  }
]

const fn = (id, ancestors = [], current = data) => {
  for (let i = 0; i < current.length; i++) {
    if (current[i].id === id) return ancestors.concat(id)
    if (current[i].children && current[i].children.length) {
      const ret = fn(id, ancestors.concat(current[i].id), current[i].children)
      if (ret) return ret
    }
  }
}

console.log(fn(112))
</script>

```js
const data = [
  {
    id: 1,
    name: '222',
    children: [
      {
        id: 2,
        name: '34',
        children: [
          {
            id: 112,
            name: '334'
          },
          {
            id: 113,
            name: '354'
          }
        ]
      }
    ]
  }
]

function fn(id) {}

// 输出  [1, 2, 112]
console.log(fn(112))
```

### answer

```js
const fn = (id, ancestors = [], current = data) => {
  for (let i = 0; i < current.length; i++) {
    if (current[i].id === id) return ancestors.concat(id)
    if (current[i].children && current[i].children.length) {
      const ret = fn(id, ancestors.concat(current[i].id), current[i].children)
      if (ret) return ret
    }
  }
}
```
