<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const techGroups = [
  {
    label: 'Languages',
    items: ['Go', 'Kotlin', 'JavaScript'],
  },
  {
    label: 'Backend',
    items: ['Fiber', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'Gin', 'GORM'],
  },
  {
    label: 'DevOps & Cloud',
    items: ['Docker', 'Linux', 'CI/CD', 'AWS'],
  },
  {
    label: 'Mobile & Frontend',
    items: ['Android', 'Jetpack Compose', 'Vue', 'Tailwind CSS', 'Git'],
  },
]

const marqueeItems = ref([])

onMounted(() => {
  const all = techGroups.flatMap((g) => g.items)
  marqueeItems.value = [...all, ...all]
})
</script>

<template>
  <section ref="sectionRef" class="py-24 md:py-32 border-t border-border-subtle">
    <div class="max-w-[1400px] mx-auto px-6">
      <h2
        class="reveal text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-12 md:mb-16"
      >
        Tech I work with
      </h2>

      <div class="reveal overflow-hidden -mx-6 mb-12 md:mb-16" data-delay="0.1">
        <div class="marquee-track flex gap-4 py-3">
          <span
            v-for="(item, i) in marqueeItems"
            :key="i"
            class="shrink-0 px-4 py-2 rounded-lg border border-border-subtle bg-surface-card font-mono text-sm text-text-secondary whitespace-nowrap"
          >
            {{ item }}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(group, gi) in techGroups"
          :key="group.label"
          class="reveal flex flex-col gap-3"
          :data-delay="0.05 * (gi + 2)"
        >
          <h3 class="font-mono text-xs text-text-muted tracking-wide">{{ group.label }}</h3>
          <ul class="flex flex-col gap-1.5">
            <li
              v-for="tech in group.items"
              :key="tech"
              class="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              {{ tech }}
            </li>
          </ul>
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

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.marquee-track {
  animation: marquee-scroll 30s linear infinite;
  width: max-content;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    flex-wrap: wrap;
  }
}
</style>
