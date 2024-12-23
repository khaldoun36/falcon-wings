<template>
  <footer class="border-t border-black/10 py-10">
    <nav class="flex flex-col items-start justify-between gap-12 md:flex-row">
      <Logo />

      <div class="flex items-start gap-16 md:flex-row md:gap-20 lg:gap-32">
        <ul class="flex flex-col items-start gap-3">
          <p class="mb-2 text-lg font-semibold">Site navigation</p>
          <li
            v-for="item in settings.data.navigation.slice(0, -2)"
            :key="item.link.key"
            class="cursor-pointer text-lg normal-case backdrop-blur-md transition-colors hover:opacity-70 active:opacity-90 md:text-base"
          >
            <PrismicLink :field="item.link">
              {{ item.link.text }}
            </PrismicLink>
          </li>
        </ul>
        <ul class="flex flex-col items-start gap-3">
          <p class="mb-2 text-lg font-semibold">Company</p>
          <li
            v-for="item in settings.data.navigation.slice(-3)"
            :key="item.link.key"
            class="cursor-pointer text-lg normal-case backdrop-blur-md transition-colors hover:opacity-70 active:opacity-90 md:text-base"
          >
            <PrismicLink :field="item.link">
              {{ item.link.text }}
            </PrismicLink>
          </li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </nav>
    <p class="mt-6 text-center text-sm text-neutral-600/80">
      &copy; {{ new Date().getFullYear() }} {{ settings.data.site_title }}. All
      rights reserved.
    </p>
  </footer>
</template>

<script setup>
import Logo from "~/components/base/Logo.vue";
import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();
</script>

<style scoped></style>
