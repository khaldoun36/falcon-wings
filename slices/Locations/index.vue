<template>
  <div class="bg-primary-700/20">
    <Container tag="section" class="py-20 md:py-28 xl:py-32">
      <div class="grid place-content-center gap-8 md:grid-cols-[1fr_1.25fr]">
        <div class="flex flex-col justify-between">
          <h2 class="text-balance text-2xl md:text-3xl lg:text-5xl">
            {{ slice.primary.section_title }}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptatibus!
          </p>
        </div>
        <div class="group p-8">
          <Map
            class="min-h-full min-w-full transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    </Container>
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
