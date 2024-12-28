<template>
  <div class="mt-10 max-w-[calc(100vw-32px)] overflow-x-hidden md:hidden">
    <div
      class="flex snap-x snap-mandatory gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <article
        class="h-fit min-w-[calc(100vw-64px)] flex-1 snap-center overflow-clip rounded-lg border border-black/10 shadow-sm"
        v-for="location in locations"
        :key="String(location.school_name)"
      >
        <NuxtImg
          :src="location.school_image.url"
          :alt="location.school_image.alt"
          :width="location.school_image.dimensions?.width"
          :height="location.school_image.dimensions?.height"
          class="aspect-square h-auto w-full overflow-hidden object-cover shadow-sm"
        />

        <div class="p-4">
          <h3 class="text-3xl">{{ location.school_name }}</h3>
          <p class="mt-3 text-lg font-medium text-neutral-600/80">
            {{ location.school_location }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  locations: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
