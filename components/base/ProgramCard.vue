<template>
  <NuxtLink
    class="group block cursor-pointer rounded-lg border border-black/10 bg-white shadow-sm transition-all hover:shadow-lg"
    :to="`/programs/${passedItems.uid}`"
  >
    <article class="relative isolate p-8">
      <NuxtImg
        :src="String(passedItems.data?.program_badge.url)"
        :alt="String(passedItems.data?.program_badge.alt)"
        :width="passedItems.data?.program_badge.dimensions?.width"
        :height="passedItems.data?.program_badge.dimensions?.height"
        class="mx-auto w-[clamp(280px,50vw,400px)]"
        :class="{ 'blur-md': !isProgramActive }"
      />

      <h3 class="mt-16 text-center text-xl capitalize lg:text-3xl">
        {{ passedItems.data?.program_title }}
      </h3>
      <p class="mt-6 text-center text-base md:text-lg">
        {{ passedItems.data?.program_description }}
      </p>
      <button
        :field="passedItems.redirect_to_program_page"
        class="button mt-8 min-w-full"
      >
        Know more
      </button>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ passedItems: any; isProgramActive: boolean }>();
</script>

<style scoped></style>
