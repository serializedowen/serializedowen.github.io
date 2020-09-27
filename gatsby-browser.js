require('./src/utils/prismjs-theme.css')
require('./src/utils/requestAnimationFrame')

exports.onClientEntry = () => {
  window.addEventListener('hashchange', e => {
    e.preventDefault()
  })
}
