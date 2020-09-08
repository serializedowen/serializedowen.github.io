---
date: '2019-08-21'
title: 'CSS Sticky Balls'
category: 'CSS Tricks'
---

```html
<div class="effect">
  <div class="blueball1"></div>
  <div class="blueball2"></div>
</div>

<style>
  .blueball1 {
    width: 80px;
    height: 80px;
    background: #00f;
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    top: 230px;
    left: 0;
    z-index: 2;
    filter: blur(8px);
    animation: bball1 6s infinite;
  }
  .blueball2 {
    width: 80px;
    height: 80px;
    background: #00f;
    padding: 10px;
    border-radius: 50%;
    position: absolute;
    top: 230px;
    left: 240px;
    z-index: 2;
    filter: blur(8px);
    animation: bball2 6s infinite;
  }
  @keyframes bball1 {
    0%,
    100% {
      left: 0;
      top: 230px;
      width: 80px;
      height: 80px;
    }
    20% {
      top: 230px;
      width: 80px;
      height: 80px;
    }
    85% {
      top: 230px;
      left: 75px;
      width: 90px;
      height: 70px;
    }
    90% {
      top: 228px;
      width: 75px;
      height: 85px;
    }
    50% {
      top: 215px;
      left: 110px;
      width: 110px;
      height: 110px;
    }
  }
  @keyframes bball2 {
    0%,
    100% {
      left: 240px;
      top: 230px;
      width: 80px;
      height: 80px;
    }
    20% {
      top: 230px;
      width: 80px;
      height: 80px;
    }
    85% {
      top: 230px;
      left: 165px;
      width: 90px;
      height: 70px;
    }
    90% {
      top: 228px;
      width: 75px;
      height: 85px;
    }
    50% {
      left: 110px;
      top: 215px;
      width: 110px;
      height: 110px;
    }
  }
  .effect {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    filter: contrast(10);
    background: #fff;
  }
</style>
```
