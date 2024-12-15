<template>
  <NuxtLink
    v-for="item in passedItems"
    :key="`${item?.program_title}-${Math.random()}`"
    class="block hover:shadow-lg cursor-pointer group"
  >
    <article
      v-if="item.is_program_active"
      class="rounded-lg border border-black/10 relative isolate p-8 group-hover:bg-neutral-950 transition-all"
    >
      <PrismicImage
        :field="item.badge"
        :alt="item.badge.alt"
        :width="item.badge.dimensions?.width"
        :height="item.badge.dimensions?.height"
      />

      <h3
        class="text-xl md:text-xl lg:text-3xl text-center capitalize mt-8 group-hover:text-neutral-100"
      >
        {{ item.program_title }}
      </h3>
      <p
        class="text-base md:text-lg text-center mt-6 group-hover:text-neutral-400"
      >
        {{ item.program_subtitle }}
      </p>
      <button
        :field="item.redirect_to_program_page"
        class="button mt-8 min-w-full"
      >
        {{ item.redirect_to_program_page.text }}
      </button>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps<{ passedItems: any[] }>();
</script>

<style scoped></style>
