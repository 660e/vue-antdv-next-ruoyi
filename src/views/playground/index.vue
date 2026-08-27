<script setup>
import { is } from "@/utils";
</script>

<template>
  <div>
    <div>{{ is.array([1, 2, 3]) }} {{ is.array(undefined) }}</div>
  </div>
</template>
