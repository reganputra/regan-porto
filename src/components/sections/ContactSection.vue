<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import GlowButton from '@/components/ui/GlowButton.vue'
import { PhPaperPlaneTilt } from '@phosphor-icons/vue'

const sectionRef = ref(null)
useScrollReveal(sectionRef)

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const error = ref('')

function handleSubmit() {
  error.value = ''

  if (!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()) {
    error.value = 'All fields are required.'
    return
  }

  const mailtoHref = `mailto:hello@reganputra.dev?subject=Portfolio Contact from ${encodeURIComponent(form.value.name)}&body=${encodeURIComponent(form.value.message)}%0A%0AFrom: ${encodeURIComponent(form.value.email)}`
  window.open(mailtoHref, '_blank')
  submitted.value = true
}
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-24 md:py-32 border-t border-border-subtle">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div class="reveal flex flex-col gap-5">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
            Let's build something
          </h2>
          <p class="text-base text-text-secondary leading-relaxed max-w-[50ch]">
            Have a project in mind, a question, or just want to connect? Drop me a message and I'll
            get back to you.
          </p>

          <div
            class="mt-4 p-4 rounded-lg border border-border-subtle bg-surface-card font-mono text-sm"
          >
            <p class="text-text-muted">
              <span class="text-accent">~</span>
              <span class="text-text-secondary">$</span>
              <span class="text-text-primary ml-2">echo $STATUS</span>
            </p>
            <p class="text-emerald-400 mt-1">Open to opportunities</p>
          </div>
        </div>

        <div class="reveal" data-delay="0.1">
          <div v-if="submitted" class="flex flex-col items-center justify-center gap-4 py-12">
            <div class="w-12 h-12 rounded-full bg-accent-glow flex items-center justify-center">
              <PhPaperPlaneTilt :size="24" weight="duotone" class="text-accent" />
            </div>
            <p class="text-text-primary font-medium">Message sent</p>
            <p class="text-sm text-text-muted">Thanks for reaching out. I'll reply soon.</p>
          </div>

          <form v-else class="flex flex-col gap-5" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-1.5">
              <label for="name" class="text-sm font-medium text-text-secondary">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                class="w-full px-4 py-3 rounded-lg bg-surface-card border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-sm font-medium text-text-secondary">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                autocomplete="email"
                class="w-full px-4 py-3 rounded-lg bg-surface-card border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div class="flex flex-col gap-1.5">
              <label for="message" class="text-sm font-medium text-text-secondary">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 rounded-lg bg-surface-card border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <p v-if="error" class="text-sm text-red-400">{{ error }}</p>

            <GlowButton tag="button" type="submit">
              <PhPaperPlaneTilt :size="16" weight="bold" />
              Send message
            </GlowButton>
          </form>
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
