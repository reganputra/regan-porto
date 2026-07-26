<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const uconnect = {
  title: 'U-Connect',
  description:
    'Full-stack alumni and student community platform with a mentor recommendation engine using Content-Based Filtering, achieving 82.5% MAP. Three-tier architecture with real-time WebSocket features.',
  tags: ['Go', 'Vue.js', 'PostgreSQL', 'Docker', 'WebSocket'],
  links: [
    { label: 'Frontend', href: 'https://github.com/reganputra/frontend-skripsi' },
    { label: 'Backend', href: 'https://github.com/reganputra/backend-skripsi' },
  ],
  featured: true,
}

const otherProjects = [
  {
    title: 'SHARA',
    description:
      'Android app that scans your skin type and recommends personalized skincare products. Built with Kotlin, Android Jetpack, and Retrofit for API integration.',
    tags: ['Kotlin', 'Android Jetpack', 'Retrofit', 'Figma'],
    image: '/ic_logo_white.png',
    href: 'https://github.com/reganputra/SHARA-C242-PS321',
  },
  {
    title: 'E-Wallet Microservice',
    description:
      'Microservice-based e-wallet platform with user, wallet, transaction, and notification services. Secured with gRPC token validation and deployed on Kubernetes.',
    tags: ['Go', 'gRPC', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image: '/e-wallet.png',
    href: 'https://github.com/reganputra/e-wallet-microservice',
  },
]
</script>

<template>
  <section id="projects" ref="sectionRef" class="py-24 md:py-32 border-t border-border-subtle">
    <div class="max-w-[1400px] mx-auto px-6">
      <h2
        class="reveal text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-12 md:mb-16"
      >
        Selected projects
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ProjectCard v-bind="uconnect" class="reveal">
          <template #visual>
            <div class="w-full h-full p-6 md:p-8 flex items-center justify-center">
              <div class="flex flex-col items-center gap-3 w-full max-w-md">
                <div
                  class="w-full py-2.5 px-4 rounded-lg border border-accent-dim/40 bg-accent-glow text-center"
                >
                  <span class="font-mono text-xs text-accent font-medium">Vue.js Frontend</span>
                </div>

                <svg
                  class="w-px h-5 text-border"
                  viewBox="0 0 1 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="20"
                    stroke="currentColor"
                    stroke-dasharray="3 3"
                  />
                </svg>

                <div class="w-full grid grid-cols-3 gap-2">
                  <div
                    class="py-2 px-2 rounded border border-border-subtle bg-surface-card text-center"
                  >
                    <span class="font-mono text-[10px] text-text-secondary">Controller</span>
                  </div>
                  <div
                    class="py-2 px-2 rounded border border-border-subtle bg-surface-card text-center"
                  >
                    <span class="font-mono text-[10px] text-text-secondary">Service</span>
                  </div>
                  <div
                    class="py-2 px-2 rounded border border-border-subtle bg-surface-card text-center"
                  >
                    <span class="font-mono text-[10px] text-text-secondary">Repository</span>
                  </div>
                </div>

                <svg
                  class="w-px h-5 text-border"
                  viewBox="0 0 1 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="0"
                    x2="0.5"
                    y2="20"
                    stroke="currentColor"
                    stroke-dasharray="3 3"
                  />
                </svg>

                <div class="w-full grid grid-cols-2 gap-2">
                  <div
                    class="py-2.5 px-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-center"
                  >
                    <span class="font-mono text-[10px] text-emerald-400">PostgreSQL</span>
                  </div>
                  <div
                    class="py-2.5 px-3 rounded-lg border border-amber-500/30 bg-amber-500/10 text-center"
                  >
                    <span class="font-mono text-[10px] text-amber-400">WebSocket</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ProjectCard>

        <ProjectCard
          v-for="(project, i) in otherProjects"
          :key="project.title"
          v-bind="project"
          class="reveal"
          :data-delay="0.08 * (i + 1)"
        />
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
