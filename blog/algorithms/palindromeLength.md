---
date: '2020-09-16'
title: 'Palindrome with length limit'
category: 'Algorithms'
---

### Question

print all digit formed palindrome within length limit

```js
palindrome(2)
-> [ '11', '22', '33', '44', '55', '66', '77', '88', '99']
```

### Solution

```js
const palindrome = length => {
  const res = []
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  const add = (current, length) => {
    if (length <= 1) return
    digits.forEach(digit => {
      res.push(digit + current + digit)
      add(digit + current + digit, length - 2)
    })
  }
  digits.forEach(num => {
    add(num, length - 1)
    res.push(num + num)
    add(num + num, length - 2)
  })
  return res.filter(num => !num.startsWith('0'))
}
```
