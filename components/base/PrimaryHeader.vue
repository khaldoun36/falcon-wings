<template>
  <header
    class="full-width content-grid fixed left-0 right-0 top-0 z-50 mx-auto rounded-none border border-white/0 bg-primary-950/0 py-2 backdrop-blur-none transition-all duration-[250ms]"
    :class="{
      '!left-[1%] !right-[1%] !top-[1%] !rounded-lg !border-white/10 !bg-primary-950/50 !backdrop-blur-md':
        isScrolled,
    }"
  >
    <div class="flex items-center justify-between">
      <NuxtLink to="/" aria-label="Home">
        <div class="size-12 bg-red-300">
          <div
            class="size-5 bg-blue-500"
            @click="isScrolled = !isScrolled"
          ></div>
        </div>
      </NuxtLink>
      <nav>
        <ul class="flex items-center justify-center gap-2">
          <li
            v-for="item in settings.data.navigation.slice(0, -1)"
            :key="item.link.key"
            class="cursor-pointer rounded-lg px-4 py-2 text-center text-base normal-case text-neutral-100 transition-colors hover:text-neutral-400 active:text-neutral-500"
          >
            <PrismicLink :field="item.link">{{ item.link.text }} </PrismicLink>
          </li>
        </ul>
      </nav>
      <PrismicLink
        :field="
          settings.data.navigation[settings.data.navigation.length - 1].link
        "
        class="button"
      >
        {{
          settings.data.navigation[settings.data.navigation.length - 1].link
            .text
        }}
      </PrismicLink>
    </div>
  </header>
</template>

<script setup>
import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();

const isScrolled = ref(false);

import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();

watch(y, (newY) => {
  if (newY > 100) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
});
</script>

<style scoped></style>
