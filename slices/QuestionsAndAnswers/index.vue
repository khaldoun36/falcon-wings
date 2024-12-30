<template>
  <div class="bg-primary-700/20" id="faq">
    <Container tag="section" class="py-20 md:py-28 lg:py-32">
      <h2 class="text-balance text-center text-2xl md:text-3xl lg:text-5xl">
        {{ slice.primary.sectiontitle }}
      </h2>

      <div class="mt-10 grid gap-20 md:mt-12 lg:mt-16 lg:grid-cols-2">
        <PrismicImage
          :field="slice.primary.image"
          class="hidden aspect-square h-auto w-full rounded-lg border border-black/10 object-cover lg:block"
        />

        <div>
          <AccordionRoot
            class="space-y-8"
            :default-value="updatedFAQ[0].id"
            type="single"
            :collapsible="true"
          >
            <AccordionItem
              v-for="item in updatedFAQ"
              :key="item.id"
              :value="item.id"
              class="accordion-item rounded-lg border border-black/10 bg-white p-4 shadow-sm"
            >
              <AccordionHeader>
                <AccordionTrigger
                  class="flex min-w-full items-center justify-between text-lg text-neutral-950 md:text-xl"
                  >{{ item.question }}
                  <span class="expand-collapse-icon"></span>
                </AccordionTrigger>
              </AccordionHeader>

              <AccordionContent
                class="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp mt-8 text-base text-neutral-600"
                >{{ item.answer }}</AccordionContent
              >
            </AccordionItem>
          </AccordionRoot>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "radix-vue";
import { type Content } from "@prismicio/client";
import Container from "~/components/base/Container.vue";
// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const { slice } = defineProps(
  getSliceComponentProps<Content.QuestionsAndAnswersSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const updatedFAQ = computed(() => {
  return slice.primary.questions_and_answers.map((item) => {
    return {
      question: item.question,
      answer: item.answer,
      id:
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15),
    };
  });
});
</script>

<style>
.expand-collapse-icon {
  font-size: 20px;
  width: 1em;
  height: 1em;
  position: relative;
  display: inline-block;
  transform: scale(0.6);
}

.expand-collapse-icon::before,
.expand-collapse-icon::after {
  content: "";
  position: absolute;
  width: 1em;
  height: 0.16em;
  top: calc((1em / 2) - 0.08em);
  background-color: black;
  transition: 0.3s ease-in-out all;
  border-radius: 0.03em;
}

.expand-collapse-icon::after {
  transform: rotate(90deg);
}

button[data-state="open"] .expand-collapse-icon::after {
  transform: rotate(180deg);
}

button[data-state="open"] .expand-collapse-icon::before {
  transform: rotate(90deg) scale(0);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}
</style>
