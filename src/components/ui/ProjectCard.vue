<script setup>
import TerminalBadge from './TerminalBadge.vue'
import { PhArrowUpRight, PhCodeBlock } from '@phosphor-icons/vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: Array, default: () => [] },
  image: { type: String, default: null },
  href: { type: String, default: null },
  links: { type: Array, default: () => [] },
  featured: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="[
      'group rounded-xl border border-border-subtle bg-surface-card overflow-hidden transition-all duration-300 hover:border-accent-dim/40 hover:bg-surface-hover',
      featured ? 'md:col-span-2' : '',
    ]"
  >
    <a
      v-if="href && !links.length"
      :href="href"
      target="_blank"
      rel="noopener"
      class="block"
    >
      <div v-if="image" class="overflow-hidden aspect-video bg-surface-elevated">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div
        v-else-if="$slots.visual"
        class="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden"
      >
        <slot name="visual" />
      </div>

      <div
        v-else
        class="aspect-video bg-surface-elevated flex items-center justify-center"
      >
        <PhCodeBlock :size="48" weight="duotone" class="text-text-muted/40" />
      </div>
    </a>

    <div v-else>
      <div v-if="image" class="overflow-hidden aspect-video bg-surface-elevated">
        <img
          :src="image"
          :alt="title"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div
        v-else-if="$slots.visual"
        class="aspect-video bg-surface-elevated flex items-center justify-center overflow-hidden"
      >
        <slot name="visual" />
      </div>

      <div
        v-else
        class="aspect-video bg-surface-elevated flex items-center justify-center"
      >
        <PhCodeBlock :size="48" weight="duotone" class="text-text-muted/40" />
      </div>
    </div>

    <div class="p-5 md:p-6 flex flex-col gap-3">
      <div class="flex items-start justify-between gap-3">
        <h3 class="text-lg font-semibold text-text-primary leading-snug">
          {{ title }}
        </h3>
        <PhArrowUpRight
          v-if="href && !links.length"
          :size="18"
          weight="bold"
          class="text-text-muted shrink-0 transition-all duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <p class="text-sm text-text-secondary leading-relaxed line-clamp-2">
        {{ description }}
      </p>

      <div class="flex flex-wrap gap-1.5 mt-1">
        <TerminalBadge v-for="tag in tags" :key="tag">{{ tag }}</TerminalBadge>
      </div>

      <div v-if="links.length" class="flex flex-wrap gap-2 mt-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors duration-200"
        >
          <PhArrowUpRight :size="14" weight="bold" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>
