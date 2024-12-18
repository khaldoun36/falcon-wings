<template>
  <article class="flex flex-col items-start justify-end gap-5 rounded-lg p-8">
    <h3 class="text-xl text-neutral-100 md:text-2xl lg:text-3xl">
      {{ item.title }}
    </h3>
    <p class="text-pretty text-sm text-neutral-300/80 md:text-base lg:text-lg">
      {{ item.subtitle }}
    </p>
  </article>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
