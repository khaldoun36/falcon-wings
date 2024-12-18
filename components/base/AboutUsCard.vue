<template>
  <article
    class="relative isolate flex flex-col items-start justify-end gap-4 overflow-clip rounded-lg p-8 md:gap-5"
  >
    <Icon
      :name="icon"
      class="absolute -right-2 -top-2 mb-2 size-48 text-neutral-400/10 md:size-60"
    />

    <h3
      class="relative flex items-center gap-2 text-xl text-neutral-100 md:text-2xl lg:text-3xl"
    >
      {{ item.title }}
    </h3>
    <p
      class="relative text-pretty text-sm text-neutral-300/80 md:text-base lg:text-lg"
    >
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
  icon: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
