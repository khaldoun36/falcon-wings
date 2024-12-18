<script setup lang="ts">
import { type Content } from "@prismicio/client";

import ProgramCard from "../../components/base/ProgramCard.vue";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProgramsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section class="my-20 bg-transparent md:my-24 lg:my-32">
    <h2 class="text-balance text-center text-2xl md:text-3xl lg:text-5xl">
      {{ slice.primary.section_title }}
    </h2>
    <div class="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 lg:mt-16">
      <ProgramCard
        v-for="programDetails in slice.primary.programs"
        :passedItems="programDetails"
        :key="String(programDetails.program_title)"
      />
    </div>
  </section>
</template>
