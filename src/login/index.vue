<script setup>
import { globalConfig } from '@/config/global.js';
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="a-shadow-card w-100 rounded-lg p-6">
      <div class="a-color-text-secondary text-center text-xl leading-none">{{ globalConfig.app.name }}</div>
    </div>
  </div>
</template>
