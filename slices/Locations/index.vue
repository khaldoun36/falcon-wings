<script setup lang="ts">
import Map from "~/components/base/Map.vue";
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

const locations = ref(slice.primary.locations);

const activeCity = ref("Dubai");

const updateActiveCity = (city: string) => {
  activeCity.value = city;
  console.log(activeCity.value);
};

const filteredLocations = computed(() => {
  return locations.value?.filter(
    (location) => location.school_location === activeCity.value,
  );
});
</script>

<template>
  <section class="my-20 md:my-28 lg:my-32">
    <h2 class="text-balance text-center text-2xl md:text-3xl lg:text-5xl">
      {{ slice.primary.section_title }}
    </h2>
    <div class="mt-10 grid grid-cols-[1fr_2fr] gap-20 md:mt-12 lg:mt-16">
      <div class="mt-16 flex flex-col gap-8">
        <article
          v-if="filteredLocations.length > 0"
          v-for="location in filteredLocations"
          :key="String(location.school_name)"
          class="h-fit rounded-lg border border-black/10 p-4 shadow-sm"
        >
          <!-- <NuxtImg
            :src="location.school_image.url"
            :alt="location.school_image.alt"
            :width="location.school_image.dimensions?.width"
            :height="location.school_image.dimensions?.height"
            class="aspect-square w-[clamp(280px,50vw,400px)] overflow-hidden rounded-[5px] object-cover shadow-sm"
          /> -->
          <h3 class="text-xl">
            {{ location.school_name }}
          </h3>
          <p class="mt-4 text-base">
            {{ location.school_location }}
          </p>
        </article>
        <article
          v-else
          class="h-fit rounded-lg border border-black/10 p-4 shadow-sm"
        >
          <p class="text-base">
            Our services are not yet available in this emirate, however, we are
            actively working towards establishing a presence.
          </p>
        </article>
      </div>
      <div>
        <Map @updateActiveCity="updateActiveCity" />
      </div>
    </div>
  </section>
</template>
