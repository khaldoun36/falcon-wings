<template>
  <component :is="tag" class="container mx-auto px-4 md:px-8">
    <slot />
  </component>
</template>

<script setup lang="ts">
const { tag = "div" } = defineProps<{
  tag: string;
}>();
</script>

<style scoped></style>
