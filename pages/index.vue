<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("index", () =>
  prismic.client.getByUID("page", "home", {
    fetchLinks: [
      "program_details.program_badge",
      "program_details.program_title",
      "program_details.program_description",
    ],
  }),
);

useHead({
  title: prismic.asText(page.value?.data.title),
});
</script>

<template>
  <SliceZone
    class="full-width content-grid"
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
