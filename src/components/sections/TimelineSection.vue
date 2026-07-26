<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { PhGraduationCap, PhBriefcase, PhDeviceMobile } from '@phosphor-icons/vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const timeline = [
  {
    type: 'education',
    icon: PhGraduationCap,
    title: 'Bachelor of Informatics',
    org: 'UPN "Veteran" Jawa Timur',
    period: '2022 - 2026',
    points: ['GPA: 3.8', 'Expected graduation 2026'],
  },
  {
    type: 'experience',
    icon: PhDeviceMobile,
    title: 'Mobile Development Cohort',
    org: 'Bangkit Academy 2024 H2 - Google, Tokopedia, Gojek & Traveloka',
    period: 'Sep 2024 - Jan 2025',
    points: [
      'Learned Kotlin and Android development from basic to intermediate level.',
      'Collaborated with a cross-functional team of 7 to complete a capstone project (SHARA).',
      'Translated 8 high-fidelity Figma designs into native Android layouts with responsive UI across multiple screen sizes.',
      'Integrated 5 RESTful API endpoints using Retrofit, including 4 custom cloud-hosted and 1 third-party API.',
      'Optimized mobile performance with async networking to a cloud-deployed ML model, achieving 360-450ms API latency.',
    ],
  },
  {
    type: 'experience',
    icon: PhBriefcase,
    title: 'Backend Developer Intern',
    org: 'PT Anugerah Prima Manunggal',
    period: 'Feb 2025 - May 2025',
    points: [
      'Collaborate on building a robust server-side application using JavaScript and Express.js',
      'Architecting 5 core operational modules (User/Admin, Item Management, History Tracking, Pre Order Processing, and Delivery Notes) to streamline warehouse workflows.',
      'Designed and managed a schema-flexible MongoDB database to efficiently catalog a high volume of culinary items, managing varied product codes, condiment ranges, and cooking seasoning variants.',
      'Containerized the backend infrastructure using Docker and successfully deployed app via Google Cloud Run, ensuring high service availability.',
      'Acted as the version control lead for a 3-member engineering team (2 Backend, 1 Frontend); managed organizational GitHub repositories by establishing branching strategies, reviewing Pull Requests (PRs), and maintaining deployment readiness.',
    ],
  },
]
</script>

<template>
  <section id="experience" ref="sectionRef" class="py-24 md:py-32 border-t border-border-subtle">
    <div class="max-w-[1400px] mx-auto px-6">
      <h2
        class="reveal text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-12 md:mb-16"
      >
        Experience & Education
      </h2>

      <div class="relative">
        <div
          class="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-border-subtle"
          aria-hidden="true"
        />

        <div class="flex flex-col gap-10">
          <div
            v-for="(item, i) in timeline"
            :key="item.title"
            class="reveal relative pl-10 md:pl-14"
            :data-delay="0.1 * i"
          >
            <div
              :class="[
                'absolute left-0 top-0 w-[31px] h-[31px] md:w-[39px] md:h-[39px] rounded-lg flex items-center justify-center border',
                item.type === 'experience'
                  ? 'bg-accent-glow border-accent-dim/40'
                  : 'bg-surface-card border-border-subtle',
              ]"
            >
              <component
                :is="item.icon"
                :size="18"
                weight="duotone"
                :class="item.type === 'experience' ? 'text-accent' : 'text-text-muted'"
              />
            </div>

            <div class="flex flex-col gap-2">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 class="text-base font-semibold text-text-primary">{{ item.title }}</h3>
                <span class="font-mono text-xs text-text-muted shrink-0">{{ item.period }}</span>
              </div>

              <p class="text-sm text-accent/80">{{ item.org }}</p>

              <ul class="flex flex-col gap-1.5 mt-1">
                <li
                  v-for="point in item.points"
                  :key="point"
                  class="text-sm text-text-secondary leading-relaxed pl-3 relative before:absolute before:left-0 before:top-[9px] before:w-1 before:h-1 before:rounded-full before:bg-border"
                >
                  {{ point }}
                </li>
              </ul>
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
