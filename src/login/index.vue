<script setup>
import { UserOutlined, LockOutlined, ExpandOutlined } from '@antdv-next/icons';

import { globalConfig } from '@/config/global.js';

const model = reactive({
  username: '',
  password: '',
  code: '',
  uuid: '',
});
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="a-shadow-card w-100 space-y-6 rounded-lg p-6">
      <div class="a-color-text-secondary text-center text-xl leading-none">{{ globalConfig.app.name }}</div>
      <a-form :model="model" auto-complete="off" ref="formRef">
        <a-form-item name="username">
          <a-input v-model:value="model.username" placeholder="请输入账号" size="large" allow-clear>
            <template #prefix>
              <UserOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="model.password" placeholder="请输入密码" size="large" allow-clear>
            <template #prefix>
              <LockOutlined class="mr-1" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="code">
          <div class="flex items-center gap-3">
            <a-input v-model:value="model.code" placeholder="请输入验证码" size="large" allow-clear>
              <template #prefix>
                <ExpandOutlined class="mr-1" />
              </template>
            </a-input>
            <div class="w-30 shrink-0 self-stretch overflow-hidden bg-red-50">
              <img class="h-full w-full" src="" />
            </div>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button size="large" type="primary" block>登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
