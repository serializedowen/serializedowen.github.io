let useJS
const step = 50
export default function smoothScroll(top) {
  if (useJS === undefined)
    useJS = window.getComputedStyle(document.body).scrollBehavior === undefined

  if (useJS) {
    const scrollFunction = () => {
      const current = window.scrollY

      console.log(current)
      if (Math.abs(current, top) < step) return window.scrollTo({ top })

      if (current > top) {
        window.scrollTo({ top: current - step })
        requestAnimationFrame(scrollFunction)
      } else {
        window.scrollTo({ top: current + step })
        requestAnimationFrame(scrollFunction)
      }
    }
    requestAnimationFrame(scrollFunction)
  } else window.scrollTo({ top, behavior: 'smooth' })
}
