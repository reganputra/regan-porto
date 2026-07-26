<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')
let sentinel = null
let sentinelObserver = null
let sectionObserver = null

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function handleNav(href) {
  mobileOpen.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  sentinel = document.createElement('div')
  sentinel.setAttribute('aria-hidden', 'true')
  sentinel.style.cssText =
    'position:absolute;top:0;left:0;width:1px;height:32px;pointer-events:none;'
  document.body.prepend(sentinel)

  sentinelObserver = new IntersectionObserver(
    ([entry]) => {
      scrolled.value = !entry.isIntersecting
    },
    { threshold: 0 },
  )
  sentinelObserver.observe(sentinel)

  const sectionIds = links.map((l) => l.href.slice(1))
  const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  )

  sections.forEach((el) => sectionObserver.observe(el))
})

onUnmounted(() => {
  sentinelObserver?.disconnect()
  sectionObserver?.disconnect()
  sentinel?.remove()
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border-subtle' : 'bg-transparent',
    ]"
  >
    <nav class="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
      <a href="#" class="font-mono text-sm font-medium text-text-primary tracking-tight">
        regan<span class="text-accent">.</span>dev
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="[
            'text-sm transition-colors duration-200',
            activeSection === link.href.slice(1)
              ? 'text-accent'
              : 'text-text-secondary hover:text-text-primary',
          ]"
          @click.prevent="handleNav(link.href)"
        >
          {{ link.label }}
        </a>
        <a
          href="https://github.com/reganputra"
          target="_blank"
          rel="noopener"
          class="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/reganputra"
          target="_blank"
          rel="noopener"
          class="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
        >
          LinkedIn
        </a>
      </div>

      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
      >
        <span
          :class="[
            'block w-5 h-px bg-text-primary transition-all duration-200',
            mobileOpen ? 'rotate-45 translate-y-[3.5px]' : '',
          ]"
        />
        <span
          :class="[
            'block w-5 h-px bg-text-primary transition-all duration-200',
            mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : '',
          ]"
        />
      </button>
    </nav>

    <div
      v-if="mobileOpen"
      class="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border-subtle"
    >
      <div class="flex flex-col px-6 py-4 gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="[
            'text-sm transition-colors',
            activeSection === link.href.slice(1)
              ? 'text-accent'
              : 'text-text-secondary hover:text-text-primary',
          ]"
          @click.prevent="handleNav(link.href)"
        >
          {{ link.label }}
        </a>
        <a
          href="https://github.com/reganputra"
          target="_blank"
          rel="noopener"
          class="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/reganputra"
          target="_blank"
          rel="noopener"
          class="text-sm text-text-muted hover:text-text-primary transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </div>
  </header>
</template>
