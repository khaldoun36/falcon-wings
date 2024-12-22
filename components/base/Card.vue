<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-lg bg-white/80 shadow-sm ring-1 ring-black/10"
  >
    <div class="relative h-72 shrink-0">
      <NuxtImg
        :src="String(item.background_image.url)"
        :alt="String(item.background_image.alt)"
        :width="item.background_image.dimensions?.width"
        :height="item.background_image.dimensions?.height"
        class="h-full w-full object-cover"
      />

      <div class="absolute inset-0 bg-gradient-to-t from-white to-40%"></div>
    </div>
    <div class="relative p-10">
      <h3
        class="relative flex items-center gap-2 text-xl md:text-2xl lg:text-3xl"
      >
        {{ item.title }}
      </h3>
      <p
        class="relative mt-4 text-pretty text-sm md:mt-5 md:text-base lg:text-lg"
      >
        {{ item.subtitle }}
      </p>
    </div>
  </div>
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
