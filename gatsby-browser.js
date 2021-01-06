require('./src/utils/prismjs-theme.css')
require('./src/utils/requestAnimationFrame')

exports.onClientEntry = () => {
  const counter = document.createElement('script')
  counter.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  counter.async = true

  document.head.appendChild(counter)
}
