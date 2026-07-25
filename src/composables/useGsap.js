import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsap(setupFn, containerRef) {
  let ctx

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!containerRef?.value) return
    ctx = gsap.context(() => setupFn(gsap, ScrollTrigger), containerRef.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })

  return { gsap, ScrollTrigger }
}
