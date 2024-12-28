<template>
  <div class="bg-primary-950">
    <div class="border-t border-white/10 py-10">
      <Container
        tag="footer"
        class="flex flex-col items-start justify-between gap-12 md:flex-row"
      >
        <Logo />

        <p class="mt-6 text-center text-sm text-neutral-300/80">
          &copy; {{ new Date().getFullYear() }} {{ settings.data.site_title }}.
          All rights reserved.
        </p>
      </Container>
    </div>
  </div>
</template>

<script setup>
import Logo from "~/components/base/Logo.vue";
import Container from "~/components/base/Container.vue";
import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();
</script>

<style scoped></style>
