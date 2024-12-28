<template>
  <div class="background relative isolate h-[calc(100dvh-32px)]">
    <div
      class="absolute inset-0 -z-10 h-full w-full overflow-clip bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-900"
    >
      <NuxtImg
        :src="String(slice.primary.hero_image.url)"
        class="min-h-full min-w-full object-cover mix-blend-overlay"
        :alt="String(slice.primary.hero_image.alt)"
        :width="slice.primary.hero_image.dimensions?.width"
        :height="slice.primary.hero_image.dimensions?.height"
        fetchpriority="high"
        loading="eager"
      />
    </div>
    <Container tag="main" class="grid h-full w-full place-content-center">
      <h1
        class="text-balance text-center text-3xl !text-neutral-100 sm:text-4xl md:text-5xl lg:text-6xl"
        :class="{ 'tracking-wide': locale === 'en' }"
      >
        {{ slice.primary.hero_title }}
      </h1>
      <p
        class="mx-auto mt-6 max-w-prose text-pretty text-center text-base !text-neutral-300/80 md:text-lg"
      >
        {{ slice.primary.hero_subtitle }}
      </p>
      <ul class="mx-auto mt-10 flex gap-8">
        <li
          v-for="(item, index) in slice.primary.hero_cal_to_action"
          :key="index"
        >
          <Button
            :target="localePath(item.link.url)"
            :variant="index === 0 ? 'primary' : 'secondary'"
          >
            {{ item.link.text }}
          </Button>
        </li>
      </ul>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Container from "~/components/base/Container.vue";
import Button from "~/components/base/Button.vue";
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

const { locale } = useI18n();

const localePath = useLocalePath();
</script>

<style scoped></style>
