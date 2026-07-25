import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(containerRef, selector = '.reveal', options = {}) {
  let observer

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      containerRef.value?.querySelectorAll(selector).forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, delay * 1000)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      },
    )

    containerRef.value?.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
