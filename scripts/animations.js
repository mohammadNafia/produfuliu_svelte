import { gsap } from 'gsap'

export function floatElements(selector, options = {}) {
  const defaults = {
    y: 12,
    duration: 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
    stagger: 0.18,
  }
  const config = { ...defaults, ...options }
  gsap.to(selector, config)
}

export function fadeUp(selector, options = {}) {
  gsap.from(selector, {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.12,
    ...options,
  })
}
