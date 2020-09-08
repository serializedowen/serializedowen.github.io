---
date: '2019-08-21'
title: 'CSS Sticky Balls'
category: 'CSS Tricks'
---

<div class="effect">
  <div class="ball1"></div>
  <div class="ball2"></div>
</div>

<style>
  .ball1 {
    width: 80px;
    height: 80px;
    background: linear-gradient( 45deg,#4c001f,#b20049 );
    padding: 10px;
    border-radius: 50%;
    position: absolute;

    left: 0;

    filter: blur(1px);
    animation: bball1 6s infinite;
  }
  .ball2 {
    width: 80px;
    height: 80px;
    background: linear-gradient( 45deg,#4c001f,#b20049 );
    padding: 10px;
    border-radius: 50%;
    position: absolute;

    left: 240px;

    filter: blur(1px);
    animation: bball2 6s infinite;
  }
  @keyframes bball1 {
    0%,
    100% {
      left: 0;

      width: 80px;
      height: 80px;
    }
    20% {

      width: 80px;
      height: 80px;
    }
    85% {

      left: 75px;
      width: 90px;
      height: 70px;
    }
    90% {

      width: 75px;
      height: 85px;
    }
    50% {

      left: 110px;
      width: 110px;
      height: 110px;
    }
  }
  @keyframes bball2 {
    0%,
    100% {
      left: 240px;

      width: 80px;
      height: 80px;
    }
    20% {

      width: 80px;
      height: 80px;
    }
    85% {

      left: 165px;
      width: 90px;
      height: 70px;
    }
    90% {

      width: 75px;
      height: 85px;
    }
    50% {
      left: 110px;

      width: 110px;
      height: 110px;
    }
  }
  .effect {
    position: relative;
    height: 200px;
    background: #fff;
  }
</style>

```html
<div class="effect">
  <div class="ball1"></div>
  <div class="ball2"></div>
</div>

<style>
  .ball1 {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #4c001f, #b20049);
    padding: 10px;
    border-radius: 50%;
    position: absolute;

    left: 0;

    filter: blur(1px);
    animation: bball1 6s infinite;
  }
  .ball2 {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #4c001f, #b20049);
    padding: 10px;
    border-radius: 50%;
    position: absolute;

    left: 240px;

    filter: blur(1px);
    animation: bball2 6s infinite;
  }
  @keyframes bball1 {
    0%,
    100% {
      left: 0;

      width: 80px;
      height: 80px;
    }
    20% {
      width: 80px;
      height: 80px;
    }
    85% {
      left: 75px;
      width: 90px;
      height: 70px;
    }
    90% {
      width: 75px;
      height: 85px;
    }
    50% {
      left: 110px;
      width: 110px;
      height: 110px;
    }
  }
  @keyframes bball2 {
    0%,
    100% {
      left: 240px;

      width: 80px;
      height: 80px;
    }
    20% {
      width: 80px;
      height: 80px;
    }
    85% {
      left: 165px;
      width: 90px;
      height: 70px;
    }
    90% {
      width: 75px;
      height: 85px;
    }
    50% {
      left: 110px;

      width: 110px;
      height: 110px;
    }
  }
  .effect {
    position: relative;
    height: 200px;
    background: #fff;
  }
</style>
```
