<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { PhArrowUp } from '@phosphor-icons/vue'

const progress = ref(0)
const showButton = ref(false)
let ticking = false

function update() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  showButton.value = scrollTop > window.innerHeight * 0.5
  ticking = false
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(update)
    ticking = true
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none"
    aria-hidden="true"
  >
    <div
      class="h-full bg-accent origin-left transition-none"
      :style="{ transform: `scaleX(${progress / 100})` }"
    />
  </div>

  <Transition name="fade-up">
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-lg bg-surface-card border border-border hover:border-accent-dim/40 hover:bg-surface-hover flex items-center justify-center transition-all duration-200 active:scale-[0.92] shadow-lg shadow-black/30 cursor-pointer"
      aria-label="Back to top"
    >
      <PhArrowUp :size="16" weight="bold" class="text-text-secondary" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
