if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function(cb) {
    setTimeout(cb, 17)
  }
}
