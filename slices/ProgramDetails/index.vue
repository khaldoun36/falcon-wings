<template>
  <div class="bg-[hsl(46_74%_92%_/_.4)]" id="programs">
    <Container tag="section" class="py-20 md:py-28 lg:py-32">
      <h2
        class="text-balance text-center text-2xl md:text-3xl lg:text-5xl"
        :class="{ 'tracking-wide': locale === 'en' }"
      >
        {{ slice.primary.section_title }}
      </h2>
      <div
        class="mt-10 grid place-content-center gap-8 md:mt-12 md:grid-cols-2 md:grid-rows-1 lg:mt-16 lg:flex lg:items-stretch lg:justify-center"
      >
        <ProgramCard
          v-for="programDetails in slice.primary.programs_details"
          :passedItems="programDetails.a_single_program_details"
          :key="String(programDetails.a_single_program_details.id)"
          :isProgramActive="programDetails.is_program_active"
        />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from "../../components/base/Container.vue";
import ProgramCard from "./ProgramCard.vue";
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

const { locale } = useI18n();
</script>

<style scoped></style>
