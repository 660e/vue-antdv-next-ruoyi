<script setup>
import { globalConfig } from '@/config/global.js';

const model = reactive({
  username: '',
  password: '',
});
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="a-shadow-card w-100 space-y-6 rounded-lg p-6">
      <div class="a-color-text-secondary text-center text-xl leading-none">{{ globalConfig.app.name }}</div>
      <a-form :model="model" auto-complete="off" ref="formRef">
        <a-form-item name="username">
          <a-input v-model:value="model.username" size="large" />
        </a-form-item>
        <a-form-item name="password">
          <a-input v-model:value="model.password" size="large" type="password" />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
