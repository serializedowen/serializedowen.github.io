let useJS
const step = 50

let scrollTarget = false
export const setTarget = target => (scrollTarget = target)
export default function smoothScroll(top) {
  if (!scrollTarget) setTarget(window)

  if (useJS === undefined)
    useJS = window.getComputedStyle(document.body).scrollBehavior === undefined

  if (useJS) {
    const scrollFunction = () => {
      const current =
        scrollTarget === window ? scrollTarget.scrollY : scrollTarget.scrollTop

      if (Math.abs(current, top) < step) return scrollTarget.scrollTo({ top })

      if (current > top) {
        scrollTarget.scrollTo({ top: current - step })
        requestAnimationFrame(scrollFunction)
      } else {
        scrollTarget.scrollTo({ top: current + step })
        requestAnimationFrame(scrollFunction)
      }
    }
    requestAnimationFrame(scrollFunction)
  } else scrollTarget.scrollTo({ top, behavior: 'smooth' })
}
