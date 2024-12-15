<template>
  <header class="bg-primary-900 full-width content-grid">
    <nav>
      <ul class="flex items-center gap-2 justify-center">
        <li
          v-for="item in settings.data.navigation.slice(0, -1)"
          :key="item.link.key"
          class="text-base text-center normal-case px-4 py-2 rounded-lg text-neutral-100 hover:bg-primary-800/70 transition-colors active:bg-primary-900/70 cursor-pointer backdrop-blur-md"
        >
          <PrismicLink :field="item.link" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
  import { useSettings } from "~/composables/useSettings";

  const { settings } = useSettings();
</script>

<style scoped></style>
