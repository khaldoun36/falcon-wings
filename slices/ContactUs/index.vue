<script setup lang="ts">
import { type Content } from "@prismicio/client";
import ContactForm from "@/components/base/ContactForm.vue";
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
</script>

<template>
  <section
    class="my-20 grid items-start gap-8 rounded-lg bg-primary-950 p-8 md:my-28 lg:my-32 lg:grid-cols-[1fr_1.25fr] lg:gap-16 lg:p-16"
  >
    <div>
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
            <p class="text-xl">Email us at</p>
            <a
              href="mailto:hello@the-code-factory.com"
              class="text-base text-neutral-300/80"
              >hello@the-code-factory.com</a
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
            <p class="text-xl">Call us</p>
            <a href="tel:+971501234567" class="text-base text-neutral-300/80"
              >+971 50 123 4567</a
            >
          </div>
        </div>
      </div>
    </div>
    <ContactForm />
  </section>
</template>
