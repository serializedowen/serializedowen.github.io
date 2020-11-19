let useJS
const step = 50
let currentFrameId
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
        currentFrameId = requestAnimationFrame(scrollFunction)
      } else {
        scrollTarget.scrollTo({ top: current + step })
        currentFrameId = requestAnimationFrame(scrollFunction)
      }
    }
    currentFrameId = requestAnimationFrame(scrollFunction)

    window.addEventListener('scroll', () =>
      cancelAnimationFrame(currentFrameId)
    )
  } else scrollTarget.scrollTo({ top, behavior: 'smooth' })
}
