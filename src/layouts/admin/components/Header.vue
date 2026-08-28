<script setup>
import headerBgImage from '@/assets/images/layout/header-bg.png';
import { globalConfig } from '@/config/global.js';
</script>

<template>
  <header :style="{ backgroundImage: `url(${headerBgImage})` }" class="flex h-14 shrink-0 items-center justify-between bg-cover bg-center px-3">
    <div class="a-c-base text-2xl leading-none">{{ globalConfig.app.name }}</div>
    <div>
      <div class="h-8 w-8 rounded-full bg-white"></div>
    </div>
  </header>
</template>
