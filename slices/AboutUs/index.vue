<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AboutUsCard from "@/components/base/AboutUsCard.vue";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AboutUsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section
    class="full-width content-grid bg-primary-950 py-20 md:py-24 lg:py-32"
  >
    <h2
      class="mx-auto max-w-[30ch] text-balance text-center text-2xl text-neutral-100 md:text-3xl lg:text-5xl"
    >
      {{ slice.primary.primary_section_title }}
    </h2>
    <div class="mt-10 grid gap-8 md:mt-12 lg:mt-16">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
        <AboutUsCard
          v-for="item in slice.primary.adventure_learning"
          :key="String(item.title)"
          :item="item"
          class="border border-white/10 bg-neutral-900 md:col-span-2"
        />
        <NuxtImg
          :src="String(slice.primary.primary_image.url)"
          :alt="String(slice.primary.primary_image.alt)"
          :width="slice.primary.primary_image.dimensions?.width"
          :height="slice.primary.primary_image.dimensions?.height"
          class="block h-72 w-full overflow-clip rounded-lg border border-white/10 object-cover lg:min-h-full"
        />

        <AboutUsCard
          v-for="item in slice.primary.vision"
          :key="String(item.title)"
          :item="item"
          class="border border-white/10 bg-yellow-700/80"
        />
        <NuxtImg
          :src="String(slice.primary.secondary_image.url)"
          :alt="String(slice.primary.secondary_image.alt)"
          :width="slice.primary.secondary_image.dimensions?.width"
          :height="slice.primary.secondary_image.dimensions?.height"
          class="block h-72 w-full overflow-clip rounded-lg border border-white/10 object-cover lg:min-h-full"
        />
        <AboutUsCard
          v-for="item in slice.primary.mission"
          :key="String(item.title)"
          :item="item"
          class="border border-white/10 bg-amber-800/80"
        />
      </div>
    </div>
  </section>
</template>
