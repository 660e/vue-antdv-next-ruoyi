<script setup>
import Aside from './components/Aside.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <Header />

    <div class="flex flex-1 overflow-auto">
      <Aside />
      <div class="flex-1">
        <RouterView />
      </div>
    </div>
  </div>
</template>
