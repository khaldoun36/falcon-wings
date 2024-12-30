<template>
  <Container tag="main" class="grid min-h-dvh place-items-center">
    <h1
      class="text-2xl text-neutral-600/80 md:text-3xl lg:text-5xl xl:text-7xl"
      :class="locale === 'en' ? 'tracking-wider' : ''"
    >
      {{ locale === "en" ? "Coming Soon" : "ترقبوا قريبا" }}
    </h1>
  </Container>
</template>

<script setup>
import Container from "~/components/base/Container.vue";
const { locale } = useI18n();
</script>

<style scoped></style>
