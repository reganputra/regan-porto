<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { PhDatabase, PhCloudArrowUp, PhAndroidLogo, PhArchive } from '@phosphor-icons/vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const highlights = [
  { icon: PhDatabase, label: 'Backend Systems', detail: 'Scalable APIs with layered architectures' },
  { icon: PhCloudArrowUp, label: 'DevOps', detail: 'CI/CD pipelines, containers, cloud infra' },
  { icon: PhAndroidLogo, label: 'Android', detail: 'Native mobile apps with Kotlin' },
  { icon: PhArchive, label: 'Clean Architecture', detail: 'Separation of concerns, testable code' },
]
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 md:py-32">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
        <div class="lg:col-span-3 flex flex-col gap-6">
          <h2
            class="reveal text-3xl md:text-4xl font-bold tracking-tight leading-snug text-text-primary"
          >
            Systems-first mindset,<br />
            backend at the core
          </h2>

          <div class="reveal flex flex-col gap-4 max-w-[60ch]" data-delay="0.1">
            <p class="text-base text-text-secondary leading-relaxed">
              I'm a final-year Informatics student who specializes in backend engineering. I build
              scalable systems using layered architectures, with a strong focus on clean separation
              of concerns and maintainable codebases.
            </p>
            <p class="text-base text-text-secondary leading-relaxed">
              Currently expanding into DevOps and cloud automation while applying hands-on Android
              development experience to round out a versatile engineering skill set.
            </p>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            <div
              v-for="(item, i) in highlights"
              :key="item.label"
              class="reveal group flex items-start gap-3 p-4 rounded-lg border border-border-subtle bg-surface-card hover:border-accent-dim/30 hover:bg-surface-hover transition-all duration-200"
              :data-delay="0.05 * (i + 1)"
            >
              <component
                :is="item.icon"
                :size="20"
                weight="duotone"
                class="text-accent shrink-0 mt-0.5"
              />
              <div>
                <p class="text-sm font-medium text-text-primary">{{ item.label }}</p>
                <p class="text-xs text-text-muted mt-0.5">{{ item.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
