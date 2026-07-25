<script setup>
import { ref, onMounted } from 'vue'
import GlowButton from '@/components/ui/GlowButton.vue'
import { PhTerminal } from '@phosphor-icons/vue'

const displayText = ref('')
const showCursor = ref(true)
const fullText = 'Backend Engineer & Student'
const typingDone = ref(false)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    displayText.value = fullText
    typingDone.value = true
    return
  }

  let i = 0
  const interval = setInterval(() => {
    if (i < fullText.length) {
      displayText.value += fullText[i]
      i++
    } else {
      clearInterval(interval)
      typingDone.value = true
    }
  }, 65)
})
</script>

<template>
  <section class="min-h-[100dvh] flex items-center pt-16">
    <div class="max-w-[1400px] mx-auto px-6 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2 text-accent">
            <PhTerminal :size="16" weight="bold" />
            <span class="font-mono text-xs tracking-wide">~/regan</span>
          </div>

          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-text-primary"
          >
            Regan Putra Ramadhan
          </h1>

          <p class="font-mono text-lg md:text-xl text-accent leading-snug">
            <span>{{ displayText }}</span>
            <span
              :class="[
                'inline-block w-[2px] h-[1.1em] bg-accent ml-0.5 align-middle',
                typingDone ? 'animate-pulse' : '',
              ]"
            />
          </p>

          <p class="text-base text-text-secondary leading-relaxed max-w-[50ch]">
            Informatics student focused on scalable backend systems and layered architectures.
            Expanding into DevOps, cloud automation, and Android development.
          </p>

          <div class="flex flex-wrap gap-3 mt-2">
            <GlowButton href="#projects">View projects</GlowButton>
            <GlowButton href="#contact" variant="secondary">Get in touch</GlowButton>
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="rounded-xl border border-border-subtle bg-surface-card overflow-hidden">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-border-subtle">
              <span class="w-3 h-3 rounded-full bg-red-500/60" />
              <span class="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span class="w-3 h-3 rounded-full bg-green-500/60" />
              <span class="ml-3 font-mono text-xs text-text-muted">terminal</span>
            </div>
            <div class="p-5 font-mono text-sm leading-relaxed">
              <p class="text-text-muted">
                <span class="text-accent">~</span>
                <span class="text-text-secondary">$</span>
                <span class="text-text-primary ml-2">cat about.json</span>
              </p>
              <div class="mt-3 text-text-secondary">
                <p>&#123;</p>
                <p class="ml-4">
                  <span class="text-accent">"name"</span>:
                  <span class="text-emerald-400">"Regan Putra Ramadhan"</span>,
                </p>
                <p class="ml-4">
                  <span class="text-accent">"role"</span>:
                  <span class="text-emerald-400">"Backend Engineer, Student"</span>,
                </p>
                <p class="ml-4">
                  <span class="text-accent">"focus"</span>: [
                  <span class="text-emerald-400">"Backend"</span>,
                  <span class="text-emerald-400">"DevOps"</span>,
                  <span class="text-emerald-400">"Android"</span> ],
                </p>
                <p class="ml-4">
                  <span class="text-accent">"available"</span>:
                  <span class="text-cyan-400">true</span>
                </p>
                <p>&#125;</p>
              </div>
              <p class="mt-3 text-text-muted">
                <span class="text-accent">~</span>
                <span class="text-text-secondary">$</span>
                <span class="animate-pulse ml-2 inline-block w-2 h-4 bg-accent/60" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
