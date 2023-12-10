<template>
  <section class="grid" style="grid-template-columns: 1fr 6fr; min-height: 100vh">
    <div class="px-5 py-8 bg-[#1d252b] h-full">
      <LayoutSidebar />
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<script lang="ts" setup></script>
