<script setup>
defineProps({
  href: { type: String, default: null },
  tag: { type: String, default: 'a' },
  variant: { type: String, default: 'primary' },
})
</script>

<template>
  <component
    :is="href ? 'a' : tag"
    :href="href"
    :class="[
      'group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 active:scale-[0.98] active:-translate-y-px cursor-pointer',
      variant === 'primary'
        ? 'bg-accent text-surface hover:bg-accent/90 shadow-[0_0_20px_var(--color-accent-glow)]'
        : 'bg-surface-card text-text-primary border border-border hover:border-text-muted hover:bg-surface-hover',
    ]"
  >
    <slot />
  </component>
</template>
