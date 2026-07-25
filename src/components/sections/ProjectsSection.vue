<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const projects = [
  {
    title: 'U-Connect',
    description:
      'Full-stack alumni and student community platform with a mentor recommendation engine using Content-Based Filtering, achieving 82.5% MAP. Three-tier architecture with real-time WebSocket features.',
    tags: ['Go', 'Vue.js', 'PostgreSQL', 'Docker', 'WebSocket'],
    image: null,
    href: 'https://github.com/reganputra/backend-skripsi',
    featured: true,
  },
  {
    title: 'SHARA',
    description:
      'Android app that scans your skin type and recommends personalized skincare products. Built with Kotlin, Android Jetpack, and Retrofit for API integration.',
    tags: ['Kotlin', 'Android Jetpack', 'Retrofit', 'Figma'],
    image: '/ic_logo_white.png',
    href: 'https://github.com/reganputra/SHARA-C242-PS321',
    featured: false,
  },
  {
    title: 'E-Wallet Microservice',
    description:
      'Microservice-based e-wallet platform with user, wallet, transaction, and notification services. Secured with gRPC token validation and deployed on Kubernetes.',
    tags: ['Go', 'gRPC', 'PostgreSQL', 'Docker', 'Kubernetes'],
    image: '/e-wallet.png',
    href: 'https://github.com/reganputra/e-wallet-microservice',
    featured: false,
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
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.title"
          v-bind="project"
          class="reveal"
          :data-delay="0.08 * i"
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
