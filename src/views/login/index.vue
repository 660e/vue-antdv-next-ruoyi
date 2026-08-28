<script setup>
import { UserOutlined, LockOutlined, ExpandOutlined } from '@antdv-next/icons';

import { captchaImage } from '@/api';
import bgImage from '@/assets/images/login/bg.jpg';
import { globalConfig } from '@/config/global.js';

const router = useRouter();
const model = reactive({ username: '', password: '', code: '', uuid: '' });
const code = reactive({ src: '', status: '' });
const disabled = computed(() => !model.username || !model.password || !model.code);
const submitting = ref(false);

onMounted(() => {
  getCaptcha();
});

async function getCaptcha() {
  if (code.status === 'loading' || submitting.value) return;

  code.status = 'loading';
  try {
    const { img, uuid } = await captchaImage();
    model.uuid = uuid;
    code.src = `data:image/png;base64,${img}`;
    code.status = 'success';
  } catch {
    code.status = '';
  }
}

async function submit() {
  if (disabled.value) return;

  submitting.value = true;
  try {
    console.log(model);
    router.push('/');
  } finally {
    submitting.value = false;
  }
}
</script>

<template>
  <div :style="{ backgroundImage: `url(${bgImage})` }" class="flex h-screen items-center justify-center bg-cover bg-center">
    <div class="a-bg-base a-rounded-lg w-100 space-y-6 p-6">
      <div class="a-c-sec text-center text-xl leading-none">{{ globalConfig.app.name }}</div>
      <a-form :disabled="submitting" :model="model" @finish="submit" auto-complete="off" ref="formRef">
        <a-form-item name="username">
          <a-input v-model:value="model.username" placeholder="请输入账号" size="large" tabindex="1" allow-clear>
            <template #prefix>
              <UserOutlined class="mr-1" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="model.password" placeholder="请输入密码" size="large" tabindex="2" allow-clear>
            <template #prefix>
              <LockOutlined class="mr-1" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item name="code">
          <div class="flex items-center gap-6">
            <a-input v-model:value="model.code" placeholder="请输入验证码" size="large" tabindex="3" allow-clear>
              <template #prefix>
                <ExpandOutlined class="mr-1" />
              </template>
            </a-input>
            <div
              :class="[code.status === 'loading' ? 'cursor-not-allowed' : 'cursor-pointer']"
              @click="getCaptcha"
              class="flex h-10 w-30 shrink-0 items-center justify-center overflow-hidden bg-neutral-200"
            >
              <a-spin v-if="code.status === 'loading'" />
              <img v-else-if="code.status === 'success'" :src="code.src" class="h-full w-full" />
              <div v-else class="a-c-sec flex h-full w-full items-center justify-center duration-200 hover:bg-neutral-100">刷新验证码</div>
            </div>
          </div>
        </a-form-item>
        <a-button :disabled="disabled" :loading="submitting" html-type="submit" size="large" tabindex="4" type="primary" block>
          {{ submitting ? '登录中...' : '登录' }}
        </a-button>
      </a-form>
    </div>
  </div>
</template>
