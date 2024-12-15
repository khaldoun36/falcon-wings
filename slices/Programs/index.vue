<script setup lang="ts">
  import { type Content } from "@prismicio/client";
  import CardVOne from "../../components/base/CardVOne.vue";
  import CardVTwo from "../../components/base/CardVTwo.vue";
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  defineProps(
    getSliceComponentProps<Content.ProgramsSlice>([
      "slice",
      "index",
      "slices",
      "context",
    ])
  );
</script>

<template>
  <section class="mt-20 md:mt-24 lg:mt-32 bg-transparent">
    <h2 class="text-2xl md:text-3xl lg:text-5xl text-balance text-center">
      {{ slice.primary.section_title }}
    </h2>
    <div class="mt-10 md:mt-12 lg:mt-16 grid gap-8 lg:grid-cols-2">
      <CardVOne :passedItems="slice.primary.programs" />
      <CardVTwo :passedItems="slice.primary.programs" />
    </div>
  </section>
</template>
