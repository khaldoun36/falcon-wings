<template>
  <NuxtLink
    class="group block cursor-pointer rounded-lg border border-black/10 hover:shadow-lg"
  >
    <article class="relative isolate p-8">
      <NuxtImg
        :src="String(passedItems.badge.url)"
        :alt="String(passedItems.badge.alt)"
        :width="passedItems.badge.dimensions?.width"
        :height="passedItems.badge.dimensions?.height"
        class="mx-auto w-[clamp(280px,50vw,400px)]"
        :class="{ 'blur-md': !passedItems.is_program_active }"
      />

      <h3 class="mt-16 text-center text-xl capitalize md:text-xl lg:text-3xl">
        {{ passedItems.program_title }}
      </h3>
      <p class="mt-6 text-center text-base md:text-lg">
        {{ passedItems.program_subtitle }}
      </p>
      <button
        :field="passedItems.redirect_to_program_page"
        class="button mt-8 min-w-full"
      >
        {{ passedItems.redirect_to_program_page.text }}
      </button>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{ passedItems: any }>();
</script>

<style scoped></style>
