<script setup>
import AppNav from '@/components/layout/AppNav.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollProgress from '@/components/ui/ScrollProgress.vue'
</script>

<template>
  <ScrollProgress />
  <AppNav />
  <RouterView />
  <AppFooter />
</template>
