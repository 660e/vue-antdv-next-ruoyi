<script setup>
import { AppstoreOutlined } from '@antdv-next/icons';

const items = [
  {
    key: '1',
    label: '系统管理',
    icon: AppstoreOutlined,
    children: [
      { key: '1-1', label: '用户管理', icon: AppstoreOutlined },
      { key: '1-2', label: '角色管理', icon: AppstoreOutlined },
      { key: '1-3', label: '菜单管理', icon: AppstoreOutlined },
    ],
  },
  { key: '2', label: '系统监控', icon: AppstoreOutlined },
  { key: '3', label: '系统工具', icon: AppstoreOutlined },
];
</script>

<template>
  <aside class="a-b-border-sec overflow-y-auto border-r">
    <a-menu :items="items" :style="{ borderInlineEndWidth: 0 }" class="w-50" />
  </aside>
</template>
