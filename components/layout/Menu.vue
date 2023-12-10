<template>
  <div>
    <NuxtLink
      v-for="({ icon, name, url }, index) in MENU"
      :key="index"
      :to="url"
      class="flex w-full items-center rounded-lg px-3 py-2 transition-all hover:bg-gray-700 hover:shadow mb-3"
    >
      <Icon :name="icon" class="mr-3" />
      <span>{{ name }}</span>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { MENU } from "./menu.data";
</script>
