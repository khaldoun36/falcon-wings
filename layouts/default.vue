<template>
  <div class="content-grid min-h-dvh grid-rows-[auto_1fr_auto]">
    <Head>
      <Title>{{ settings.data.site_title }}</Title>
      <Meta name="description" :content="settings.data.meta_description" />
      <Meta property="og:image" :content="settings.data.og_image.url" />
    </Head>

    <PrimaryHeader />

    <slot />
    <PrimaryFooter />
  </div>
</template>
<script setup>
import PrimaryHeader from "~/components/base/PrimaryHeader.vue";
import PrimaryFooter from "~/components/base/PrimaryFooter.vue";

import { useSettings } from "~/composables/useSettings";

const { settings } = useSettings();
</script>

<style scoped></style>
