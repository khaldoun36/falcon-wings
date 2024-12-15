<template>
  <NuxtLink
    v-for="item in passedItems"
    :key="`${item?.program_title}-${Math.random()}`"
    class="block hover:shadow-lg transition-all cursor-pointer"
  >
    <article
      v-if="item.is_program_active"
      class="rounded-lg border border-black/10 relative isolate"
    >
      <PrismicImage
        :field="item.background_image"
        :alt="item.background_image.alt"
        :width="item.background_image.dimensions?.width"
        :height="item.background_image.dimensions?.height"
        class="rounded-t-lg"
      />
      <PrismicImage
        :field="item.badge"
        :alt="item.badge.alt"
        :width="item.badge.dimensions?.width"
        :height="item.badge.dimensions?.height"
        class="absolute -left-10 aspect-square h-auto w-[180px] -rotate-[25deg] md:w-[200px] top-1/2 -translate-y-[100%] lg:w-[280px] md:-translate-y-[20%] lg:-translate-y-[50%]"
      />
      <div class="p-8">
        <h3 class="text-xl md:text-xl lg:text-3xl text-center capitalize">
          {{ item.program_title }}
        </h3>
        <p class="text-base md:text-lg text-center mt-6">
          {{ item.program_subtitle }}
        </p>
        <button
          :field="item.redirect_to_program_page"
          class="button mt-8 min-w-full"
        >
          {{ item.redirect_to_program_page.text }}
        </button>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{ passedItems: any[] }>();
</script>

<style scoped></style>
