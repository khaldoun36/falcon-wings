<template>
  <div class="min-h-dvh grid-rows-[auto_1fr_auto]">
    <!-- SEO Related Components -->
    <Head>
      <Title>{{ settings.data.site_title }}</Title>
      <Meta name="description" :content="settings.data.meta_description" />
      <Meta property="og:image" :content="settings.data.og_image.url" />
    </Head>

    <PrimaryHeader />

    <NuxtPage />

    <PrimaryFooter />
  </div>
</template>
<script setup>
import PrimaryHeader from "~/components/base/PrimaryHeader.vue";
import PrimaryFooter from "~/components/base/PrimaryFooter.vue";

import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();
</script>

<style>
@font-face {
  font-family: "CabinetGrotesk-Variable";
  src: url("../fonts/CabinetGrotesk-Variable.woff2") format("woff2");
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}
body {
  --body-color: theme("colors.neutral.600/80%");
  color: var(--body-color);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "CabinetGrotesk-Variable", sans-serif;
  font-weight: 650;
  --headings-color: theme("colors.neutral.950");
  color: var(--headings-color);
}
</style>
