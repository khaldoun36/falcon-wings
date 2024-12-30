<template>
  <div
    class="relative items-center overflow-hidden bg-primary-700/20 px-4 py-20 md:px-8 md:py-28 lg:grid lg:grid-cols-2 lg:px-0 xl:py-32"
  >
    <h2
      class="text-balance text-center text-2xl md:text-3xl lg:hidden lg:text-5xl"
    >
      {{ slice.primary.section_title }}
    </h2>
    <div
      class="mt-10 flex min-h-full items-center justify-center gap-8 md:mt-12 lg:mt-16 lg:hidden"
    >
      <div
        v-for="(item, index) in slice.primary.locations"
        :key="String(index)"
      >
        <div
          class="grid aspect-square size-40 place-items-center overflow-hidden p-8 lg:size-80"
        >
          <NuxtImg
            :src="item.school_image.url"
            :alt="item.school_image.alt"
            :width="item.school_image.dimensions.width"
            :height="item.school_image.dimensions.height"
            class="object-cover"
          />
        </div>
      </div>
    </div>
    <Container
      tag="div"
      class="absolute inset-0 hidden min-h-full py-20 md:py-28 lg:block xl:py-32"
    >
      <h2 class="max-w-[20ch] text-balance text-2xl md:text-3xl lg:text-5xl">
        {{ slice.primary.section_title }}
      </h2>

      <div class="mt-10 flex min-h-full gap-8 md:mt-12 lg:mt-16">
        <div
          v-for="(item, index) in slice.primary.locations"
          :key="String(index)"
          class="grid aspect-square size-40 place-items-center overflow-hidden p-5"
        >
          <NuxtImg
            :src="item.school_image.url"
            :alt="item.school_image.alt"
            :width="item.school_image.dimensions.width"
            :height="item.school_image.dimensions.height"
            class="scale-110 object-cover"
          />
        </div>
      </div>
      <div class="min-h-full" aria-label="Decorative" />
    </Container>
    <div class="min-h-full min-w-full bg-transparent" />
    <Map class="" />
  </div>
</template>

<script setup lang="ts">
import Container from "~/components/base/Container.vue";
import Map from "./Map.vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
  getSliceComponentProps<Content.LocationsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>
