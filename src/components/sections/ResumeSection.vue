<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import GlowButton from '@/components/ui/GlowButton.vue'
import { PhFilePdf, PhDownloadSimple, PhEye } from '@phosphor-icons/vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const resumeUrl = '/CV_Regan Putra Ramadhan.pdf'
</script>

<template>
  <section id="resume" ref="sectionRef" class="py-24 md:py-32 border-t border-border-subtle">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="reveal flex flex-col gap-5">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">Resume</h2>
          <p class="text-base text-text-secondary leading-relaxed max-w-[50ch]">
            A detailed look at my education, experience, and technical skills. Download or view the
            full document below.
          </p>

          <div class="flex flex-wrap gap-3 mt-2">
            <GlowButton :href="resumeUrl" target="_blank">
              <PhEye :size="16" weight="bold" />
              View resume
            </GlowButton>
            <a
              :href="resumeUrl"
              download
              class="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 active:scale-[0.98] active:-translate-y-px cursor-pointer bg-surface-card text-text-primary border border-border hover:border-text-muted hover:bg-surface-hover"
            >
              <PhDownloadSimple :size="16" weight="bold" />
              Download PDF
            </a>
          </div>
        </div>

        <div class="reveal" data-delay="0.1">
          <a
            :href="resumeUrl"
            target="_blank"
            class="group block rounded-xl border border-border-subtle bg-surface-card overflow-hidden transition-all duration-300 hover:border-accent-dim/40 hover:bg-surface-hover"
          >
            <div class="p-6 md:p-8 flex flex-col items-center gap-5">
              <div
                class="w-16 h-16 rounded-xl bg-accent-glow flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              >
                <PhFilePdf :size="32" weight="duotone" class="text-accent" />
              </div>

              <div class="text-center">
                <p class="font-medium text-text-primary">CV_Regan Putra Ramadhan.pdf</p>
                <p class="text-sm text-text-muted mt-1">Click to open in a new tab</p>
              </div>

              <div
                class="w-full rounded-lg border border-border-subtle bg-surface-elevated p-4 font-mono text-sm"
              >
                <p class="text-text-muted">
                  <span class="text-accent">~</span>
                  <span class="text-text-secondary">$</span>
                  <span class="text-text-primary ml-2">cat resume.pdf | head</span>
                </p>
                <div class="mt-2 flex flex-col gap-1 text-text-secondary text-xs">
                  <p>Name ........... Regan Putra Ramadhan</p>
                  <p>Focus .......... Backend Engineering</p>
                  <p>Status ......... Final-year Informatics</p>
                  <p>Stack .......... Go, Kotlin, Docker, AWS</p>
                </div>
              </div>
            </div>
          </a>
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
