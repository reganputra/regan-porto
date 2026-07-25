<script setup>
import { PhGithubLogo, PhLinkedinLogo, PhEnvelope } from '@phosphor-icons/vue'
</script>

<template>
  <footer class="border-t border-border-subtle bg-surface">
    <div
      class="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <p class="text-sm text-text-muted font-mono">
        &copy; {{ new Date().getFullYear() }} Regan Putra Ramadhan
      </p>

      <div class="flex items-center gap-5">
        <a
          href="https://github.com/reganputra"
          target="_blank"
          rel="noopener"
          class="text-text-muted hover:text-accent transition-colors duration-200"
          aria-label="GitHub"
        >
          <PhGithubLogo :size="20" weight="regular" />
        </a>
        <a
          href="https://www.linkedin.com/in/regan-putra-ramadhan-82165a253/"
          target="_blank"
          rel="noopener"
          class="text-text-muted hover:text-accent transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <PhLinkedinLogo :size="20" weight="regular" />
        </a>
        <a
          href="mailto:ramadhanregan334@gmail.com"
          class="text-text-muted hover:text-accent transition-colors duration-200"
          aria-label="Email"
        >
          <PhEnvelope :size="20" weight="regular" />
        </a>
      </div>
    </div>
  </footer>
</template>
