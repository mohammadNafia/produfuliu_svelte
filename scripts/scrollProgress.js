export function bindScrollProgress(selector = '[data-progress]') {
  const el = document.querySelector(selector)
  if (!el) return
  const handler = () => {
    const max = document.body.scrollHeight - window.innerHeight
    const pct = Math.min(1, window.scrollY / max)
    el.style.setProperty('--progress', pct)
  }
  handler()
  window.addEventListener('scroll', handler)
}
