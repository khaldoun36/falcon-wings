<script setup lang="ts">
import ProgramCard from "../../components/base/ProgramCard.vue";
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ProgramDetailsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <section class="my-20 md:my-28 lg:my-32">
    <h2 class="text-balance text-center text-2xl md:text-3xl lg:text-5xl">
      {{ slice.primary.section_title }}
    </h2>
    <div class="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 lg:mt-16">
      <ProgramCard
        v-for="programDetails in slice.primary.programs_details"
        :passedItems="programDetails.a_single_program_details"
        :key="String(programDetails.a_single_program_details.id)"
        :isProgramActive="programDetails.is_program_active"
      />
    </div>
  </section>
</template>
