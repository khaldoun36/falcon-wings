<template>
  <section class="bg-primary-950 py-20 md:py-28 lg:py-32" id="contact">
    <Container
      tag="div"
      class="grid items-start gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16"
    >
      <div class="lg:mt-1">
        <h3 class="text-xl text-neutral-100 md:text-2xl lg:text-3xl">
          {{ slice.primary.title }}
        </h3>
        <p
          class="mt-4 text-pretty text-sm text-neutral-300/80 md:mt-5 md:text-base"
        >
          {{ slice.primary.subtitle }}
        </p>
        <div class="mt-8 space-y-6 lg:mt-16">
          <div class="flex items-start gap-4 text-neutral-100">
            <div
              class="flex items-center justify-center rounded border border-white/10 p-2"
            >
              <Icon name="heroicons:envelope" class="size-5" />
            </div>
            <div class="mt-1 flex flex-col gap-1">
              <p class="text-xl">
                {{ locale === "en" ? "Email us at" : "راسلنا على" }}
              </p>
              <a
                href="mailto:info@falconswings.ae"
                class="text-base text-neutral-300/80"
                >info@falconswings.ae</a
              >
            </div>
          </div>
          <div class="flex items-start gap-4 text-neutral-100">
            <div
              class="flex items-center justify-center rounded border border-white/10 p-2"
            >
              <Icon name="heroicons:phone" class="size-5" />
            </div>
            <div class="mt-1 flex flex-col gap-1">
              <p class="text-xl">
                {{ locale === "en" ? "Call us" : "اتصل بنا" }}
              </p>
              <a href="tel:+971585567875" class="text-base text-neutral-300/80"
                >+971 58 556 7875</a
              >
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from "@/components/base/Container.vue";
import { type Content } from "@prismicio/client";
import ContactForm from "./ContactForm.vue";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ContactUsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const { locale } = useI18n();
</script>
