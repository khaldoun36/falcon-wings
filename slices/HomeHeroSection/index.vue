<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HomeHeroSectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <main
    class="full-width content-grid relative h-[calc(100dvh-32px)] place-content-center overflow-clip"
  >
    <NuxtImg
      :src="String(slice.primary.hero_image.url)"
      class="full-width absolute inset-0 min-h-full min-w-full object-cover brightness-[50%]"
      :alt="String(slice.primary.hero_image.alt)"
      :width="slice.primary.hero_image.dimensions?.width"
      :height="slice.primary.hero_image.dimensions?.height"
      fetchpriority="high"
      loading="eager"
      preload
    />
    <div
      class="relative z-10 mx-auto flex max-w-[100ch] flex-col items-center justify-center gap-8"
    >
      <div class="flex flex-col items-center justify-center gap-4 text-center">
        <h1
          class="text-balance text-3xl !text-neutral-100 md:text-4xl lg:text-6xl"
        >
          {{ slice.primary.hero_title }}
        </h1>
        <p
          class="max-w-[55ch] text-balance text-base !text-neutral-300 md:text-lg lg:text-xl"
        >
          {{ slice.primary.hero_subtitle }}
        </p>
      </div>

      <ul class="flex items-center justify-center gap-8">
        <li
          v-for="(item, index) in slice.primary.hero_cal_to_action"
          :key="index"
        >
          <PrismicLink
            :field="item.link"
            class="button"
            :data-variant="index === 0 ? '' : 'secondary'"
          >
            {{ item.link.text }}
          </PrismicLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped></style>
