<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <Header />

    <div class="flex-1">
      <div>admin</div>
      <RouterView />
    </div>
  </div>
</template>
