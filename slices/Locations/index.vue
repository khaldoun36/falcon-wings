<template>
  <div
    class="grid overflow-clip bg-primary-700/20 py-20 md:py-28 lg:grid-cols-[1fr_1.5fr] xl:py-32"
  >
    <Container tag="section">
      <div class="flex flex-col justify-between">
        <h2 class="text-balance text-2xl md:text-3xl lg:text-5xl">
          {{ slice.primary.section_title }}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          voluptatibus!
        </p>
      </div>
    </Container>

    <Map class="-mt-20 md:-mt-32 xl:-mt-40" />
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
