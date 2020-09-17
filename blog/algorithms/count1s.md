---
date: '2020-09-17'
title: 'Count number of 1s'
category: 'Algorithms'
---

Count occurence of number 1s from 1 to an upperbound number

### Question

```js
sum1s(400)
// -> return 180
```

### Solution

```js
const sum1s = num => {
  let numstr
  if (!num) return 0
  if (typeof num === 'string') numstr = num
  else numstr = String(num)

  if (Number(numstr) === 0) return 0

  const curr =
    numstr[0] > 1
      ? 10 ** (numstr.length - 1) +
        numstr[0] * (numstr.length - 1) * 10 ** (numstr.length - 2)
      : sum1s(10 ** (numstr.length - 1) - 1)

  return curr + sum1s(numstr.substr(1))
}
```
