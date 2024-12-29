<script setup lang="ts">
import { type Content } from "@prismicio/client";
import Container from "~/components/base/Container.vue";
import IdentityCard from "./IdentityCard.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.IdentitySectionSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const columnClasses = {
  1: "md:col-span-4 lg:col-span-2 lg:row-start-2",
  2: "lg:col-span-3",
  3: "lg:col-span-2",
  4: "lg:col-span-3 lg:col-start-1 lg:row-start-1",
  5: "lg:col-span-2",
};
</script>

<template>
  <div class="bg-[hsl(46_74%_92%_/_.4)]">
    <Container tag="section" class="py-20 md:py-24 lg:py-32">
      <h2
        class="mx-auto max-w-[30ch] text-balance text-center text-2xl md:text-3xl lg:text-5xl"
      >
        {{ slice.primary.main_section_title }}
      </h2>
      <div
        class="mt-10 grid gap-8 md:mt-12 md:grid-cols-4 lg:mt-16 lg:grid-cols-6"
      >
        <IdentityCard
          v-for="(item, index) in slice.primary.framework_points"
          :key="String(item.title)"
          :class="columnClasses[index + 1]"
          :item="item"
          class="md:col-span-2"
        />
      </div>
    </Container>
  </div>
</template>
