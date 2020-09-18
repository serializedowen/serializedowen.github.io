---
date: '2020-09-18'
title: 'breezing-effect'
category: 'CSS Tricks'
---

<style>
  @keyframes breeze {
    0% {
      transform: scale(1);
      opacity: 1
    
    }
    

    100% {
      opacity: 0.2;
      transform: scale(2);
    }
  }

  .main {
    position: absolute;
    left: 50%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
    border: 1px darkblue solid
  }

  .animated {
    animation: breeze 2s infinite

  }
</style>

<div style="position: relative; height: 200px">
<div class="main"></div>
<div class="main animated"></div>
<div class="main animated" style='animation-delay: 0.4s'></div>
<div class="main animated" style='animation-delay: 0.8s'></div>
<div class="main animated" style='animation-delay: 1.2s'></div>
<div class="main animated" style='animation-delay: 1.6s'></div>

</div>

```html
<style>
  @keyframes breeze {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    100% {
      opacity: 0.2;
      transform: scale(2);
    }
  }

  .main {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: blue;
    border: 1px darkblue solid;
  }

  .animated {
    animation: breeze 2s infinite;
  }
</style>

<div class="main"></div>
<div class="main animated"></div>
<div class="main animated" style="animation-delay: 0.4s"></div>
<div class="main animated" style="animation-delay: 0.8s"></div>
<div class="main animated" style="animation-delay: 1.2s"></div>
<div class="main animated" style="animation-delay: 1.6s"></div>
```
