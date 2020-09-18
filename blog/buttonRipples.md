---
date: '2020-09-10'
title: 'Button ripple effect w/ simple css'
category: 'CSS Tricks'
---

[Google Material Design](https://material.io) followed button ripple effect

<style>
  .wrapper {
    background: #fff;
    padding: 20px 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  .wrapper .text {
    font-size: 35px;
    font-weight: 600;
  }
  .wrapper p {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
  .wrapper .btns {
    display: flex;
    margin: 30px 0 20px 0;
  }
  .btns button {
    position: relative;
    margin: 0 20px;
    height: 60px;
    border: none;
    width: 200px;
    display: block;
    line-height: 60px;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .btns button:first-child {
    background: linear-gradient(-90deg, #f5ce62, #e85a19);
  }
  .btns button:last-child {
    background: linear-gradient(90deg, #0162c8, #55e7fc);
  }
  .btns button > span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    animation: ripples 0.6s linear infinite;
  }
  @keyframes ripples {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
</style>
<div class="wrapper">
  <div class="text">
    Button Ripple Effect
  </div>
  <p>
    using HTML CSS & JavaScript
  </p>
  <div class="btns">
    <button>Click me</button>
    <button>Click me</button>

  </div>
</div>

<script>


  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => {
    button.onclick = function(e) {

      console.log(e)
      let x = e.clientX - e.target.offsetLeft
      let y = e.clientY - e.target.offsetTop
      let ripple = document.createElement('span')
      ripple.style.left = x + 'px'
      ripple.style.top = y + 'px'
      this.appendChild(ripple)
      setTimeout(function() {
        ripple.remove()
      }, 600) // 1second = 1000ms
    }
  })

</script>

```html
<style>
  .wrapper {
    background: #fff;
    padding: 20px 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  .wrapper .text {
    font-size: 35px;
    font-weight: 600;
  }
  .wrapper p {
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
  }
  .wrapper .btns {
    display: flex;
    margin: 30px 0 20px 0;
  }
  .btns a {
    position: relative;
    margin: 0 20px;
    height: 60px;
    width: 200px;
    display: block;
    line-height: 60px;
    border-radius: 30px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .btns a:first-child {
    background: linear-gradient(-90deg, #f5ce62, #e85a19);
  }
  .btns a:last-child {
    background: linear-gradient(90deg, #0162c8, #55e7fc);
  }
  .btns a > span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    pointer-events: none;
    animation: ripples 0.6s linear infinite;
  }
  @keyframes ripples {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
</style>
```

```js
const buttons = document.querySelectorAll('a')
buttons.forEach(button => {
  button.onclick = function(e) {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop
    let ripple = document.createElement('span')
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    this.appendChild(ripple)
    setTimeout(function() {
      ripple.remove()
    }, 600) // 1second = 1000ms
  }
})
```
