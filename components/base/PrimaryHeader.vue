<template>
  <div
    ref="sentinel"
    class="pointer-events-none absolute top-0 h-[1px] w-full opacity-0"
  ></div>
  <header
    class="fixed left-0 right-0 top-0 z-50 mx-auto rounded-none border border-white/0 bg-primary-950/0 py-2 backdrop-blur-none transition-all duration-[250ms]"
    :class="{
      'active !left-[8px] !right-[8px] !top-[8px] !rounded-lg !border-white/10':
        isScrolled || useRoute().path !== '/',
    }"
  >
    <Container tag="div" class="flex items-center justify-between">
      <NuxtLink to="/" aria-label="Home">
        <Logo />
      </NuxtLink>
      <nav :class="{ open: isOpen }">
        <ul class="flex items-center justify-center gap-2">
          <li
            v-for="item in enNav.slice(0, -1)"
            :key="item.link.key"
            class="cursor-pointer rounded-lg px-4 py-2 text-center text-base normal-case text-neutral-100 transition-colors hover:text-neutral-400 active:text-neutral-500"
            @click="isOpen = false"
          >
            <NuxtLink :to="item.link">{{ item.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <Button
        v-for="item in enNav.slice(-1)"
        :target="localePath(item.link)"
        variant="primary"
      >
        {{ item.text }}
      </Button>

      <button
        @click="isOpen = !isOpen"
        class="relative mt-2 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        :aria-expanded="isOpen"
        aria-label="Toggle menu"
      >
        <span
          class="absolute h-0.5 w-6 -translate-y-2 rounded-lg bg-neutral-100 transition-transform duration-300"
          :class="{ 'translate-y-0 rotate-45': isOpen }"
        />
        <span
          class="absolute h-0.5 w-6 rounded-lg bg-neutral-100 transition-transform duration-300"
          :class="{ '-rotate-45': isOpen }"
        />
      </button>
    </Container>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
import Container from "./Container.vue";
import Button from "./Button.vue";
import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();

const isScrolled = ref(false);
const isOpen = ref(false);
const sentinel = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isScrolled.value = !entry.isIntersecting;
    },
    {
      // Using 0 threshold to detect as soon as the element starts entering/leaving viewport
      threshold: 0.4,
      // Small negative margin to trigger slightly after scroll starts
      rootMargin: "0px 0px 0px 0px",
    },
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }

  onUnmounted(() => {
    observer.disconnect();
  });
});

const { locale } = useI18n();
const localePath = useLocalePath();

const enNav = [
  {
    text: "Home",
    link: "/",
    key: Math.random() + "home",
  },
  {
    text: "About us",
    link: "/#about",
    key: Math.random() + "about",
  },
  {
    text: "Programs",
    link: "/#programs",
    key: Math.random() + "programs",
  },
  {
    text: "Locations",
    link: "/#locations",
    key: Math.random() + "locations",
  },
  {
    text: "Q&A",
    link: "/#faq",
    key: Math.random() + "faq",
  },
  {
    text: "Contact us",
    link: "/#contact",
    key: Math.random() + "contact",
  },
];
</script>

<style scoped>
header.active:after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
  background: theme("colors.primary.950/80%");
  backdrop-filter: blur(12px);
}

@media screen and (width < 768px) {
  nav {
    position: fixed;
    inset: 0;
    min-height: 100dvh;
    background: theme("colors.primary.950/85%");
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: start;

    transform: translateY(-100%);
    transition: transform 250ms ease-in-out;
  }

  nav.open {
    transform: translateY(0);
  }

  body:has(nav.open) {
    overflow: hidden;
  }

  nav ul {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 3rem;
  }

  nav ul li {
    font-size: 1.5rem;
  }
}
</style>
