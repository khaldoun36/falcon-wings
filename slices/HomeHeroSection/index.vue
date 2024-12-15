<script setup lang="ts">
  import { type Content } from "@prismicio/client";

  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  defineProps(
    getSliceComponentProps<Content.HomeHeroSectionSlice>([
      "slice",
      "index",
      "slices",
      "context",
    ])
  );
</script>

<template>
  <main
    class="full-width relative h-[calc(100dvh-15vh)] overflow-clip place-content-center"
  >
    <PrismicImage
      :field="slice.primary.hero_image"
      class="absolute inset-0 object-cover min-w-full min-h-full brightness-[60%]"
      :alt="slice.primary.hero_image.alt"
      :width="slice.primary.hero_image.dimensions?.width"
      :height="slice.primary.hero_image.dimensions?.height"
    />
    <div
      class="relative z-10 flex flex-col items-center justify-center gap-8 max-w-[100ch] mx-auto px-4"
    >
      <div class="flex flex-col items-center justify-center gap-4 text-center">
        <h1
          class="text-3xl md:text-4xl lg:text-6xl text-balance text-neutral-100"
        >
          {{ slice.primary.hero_title }}
        </h1>
        <p class="text-base md:text-lg text-balance text-neutral-400">
          {{ slice.primary.hero_subtitle }}
        </p>
      </div>

      <ul class="flex gap-8 justify-center items-center">
        <li
          v-for="(item, index) in slice.primary.hero_cal_to_action"
          :key="index"
        >
          <PrismicLink
            :field="item.link"
            class="button"
            :data-variant="index === 0 ? '' : 'secondary'"
          >
            {{ item.link.text }}
          </PrismicLink>
        </li>
      </ul>
    </div>
    <div class="custom-shape-divider-bottom-1734097442">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </main>
</template>

<style scoped>
  .custom-shape-divider-bottom-1734097442 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1734097442 svg {
    position: relative;
    display: block;
    width: calc(249% + 1.3px);
    height: 50px;
  }

  @media (width >= 768px) {
    .custom-shape-divider-bottom-1734097442 svg {
      height: 150px;
    }
  }

  .custom-shape-divider-bottom-1734097442 .shape-fill {
    --background-color: theme("colors.neutral.100");
    fill: var(--background-color);
  }
</style>
