<template>
  <!-- border border-black/10 bg-white/80 shadow-sm -->
  <NuxtLink
    class="group block cursor-pointer rounded-lg transition-all"
    :to="
      isProgramActive
        ? localePath(`/programs/${passedItems.uid}`)
        : localePath('/coming-soon')
    "
  >
    <article class="flex h-full max-w-[520px] flex-col gap-8 text-center">
      <NuxtImg
        :src="String(passedItems.data?.program_badge.url)"
        :alt="String(passedItems.data?.program_badge.alt)"
        :width="passedItems.data?.program_badge.dimensions?.width"
        :height="passedItems.data?.program_badge.dimensions?.height"
        class="mx-auto w-72"
        :class="{ 'blur-md': !isProgramActive }"
      />

      <div>
        <h3
          class="mt-8 text-xl capitalize tracking-wide lg:text-4xl"
          :class="{ 'tracking-wide': locale === 'en' }"
        >
          {{ passedItems.data?.program_title }}
        </h3>
        <p class="mt-5 text-base">
          {{ passedItems.data?.program_description }}
        </p>
      </div>

      <Button class="mt-auto min-w-full">
        {{ locale === "en" ? "Know more" : "اعرف المزيد" }}
      </Button>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import Button from "../../components/base/Button.vue";
const localePath = useLocalePath();
const { locale } = useI18n();
const props = defineProps<{ passedItems: any; isProgramActive: boolean }>();
</script>

<style scoped></style>
