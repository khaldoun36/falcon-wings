<template>
  <div
    class="group relative flex h-[30rem] flex-col justify-end overflow-hidden rounded-lg border border-black/10 bg-white/95 shadow-sm"
  >
    <div class="absolute inset-0 h-full w-full shrink-0">
      <NuxtImg
        :src="String(item.background_image.url)"
        :alt="String(item.background_image.alt)"
        :width="item.background_image.dimensions?.width"
        :height="item.background_image.dimensions?.height"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <div
      class="card-gradient relative flex min-h-full flex-col justify-end self-end p-8"
    >
      <h3 class="relative text-xl text-neutral-100 md:text-2xl lg:text-3xl">
        {{ item.title }}
      </h3>
      <p
        class="relative mt-4 text-pretty text-sm text-neutral-300/80 md:mt-5 md:text-base lg:text-lg"
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

<style scoped>
.card-gradient {
  background: linear-gradient(
    to bottom,
    theme("colors.neutral.950/0%") 0%,
    theme("colors.neutral.950/10%") 25%,
    theme("colors.neutral.950/15%") 50%,
    theme("colors.neutral.950/25%") 60%,
    theme("colors.neutral.950/80%") 75%,
    theme("colors.neutral.950/95%") 90%,
    theme("colors.neutral.950/100%") 100%
  );
}
</style>
