<template>
  <main class="mb-20 mt-40 md:mb-28 md:mt-44 lg:mb-32 lg:mt-52">
    <!-- main sticky container -->
    <div class="relative grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
      <!-- images container -->
      <div class="grid gap-8">
        <NuxtImg
          v-for="image in pageProgram.program_pictures"
          :src="image.image.url"
          :alt="image.image.alt"
          :width="image.image.dimensions.width"
          :height="image.image.dimensions.height"
          class="aspect-square w-full rounded-lg border border-black/10 object-cover shadow-sm"
        />
      </div>
      <!-- content container -->
      <div class="row-start-1 h-fit lg:sticky lg:top-[208px] lg:row-start-auto">
        <h1 class="text-balance text-3xl capitalize md:text-4xl lg:text-6xl">
          {{ pageProgram.program_title }}
        </h1>
        <p
          class="mt-5 text-balance text-base text-neutral-600/80 md:text-lg lg:mt-6"
        >
          {{ pageProgram.program_description }}
        </p>
        <AccordionRoot
          class="mt-8 space-y-8"
          :default-value="updatedSkills[0].id"
          type="single"
          :collapsible="true"
        >
          <AccordionItem
            v-for="item in updatedSkills"
            :key="item.id"
            :value="item.id"
            class="accordion-item rounded-lg border border-black/10 p-4"
          >
            <AccordionHeader>
              <AccordionTrigger
                class="flex min-w-full items-center justify-between text-lg text-neutral-950 md:text-xl"
                >{{ item.question }}
                <span class="expand-collapse-icon"></span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent class="mt-5 text-base text-neutral-600 md:mt-6">{{
              item.answer
            }}</AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>
    </div>
  </main>
</template>

<script setup>
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from "radix-vue";
import { usePrograms } from "~/composables/usePrograms";

const { programDetails } = usePrograms();

const route = useRoute();

// const programUid = route.params.uid;
const programUid = "falcons-cadets";

const program = computed(() => {
  return programDetails.value?.filter((program) => program.uid === programUid);
});

const pageProgram = computed(() => {
  if (program.value) {
    return program.value[0].data;
  } else {
    return null;
  }
});

console.log(pageProgram.value);

const updatedSkills = computed(() => {
  return pageProgram.value.about_the_program.map((item) => {
    return {
      id: `${item.title}-${Math.random().toString(36).substring(2, 9)}`,
      question: item.title,
      answer: item.subtitle,
    };
  });
});
</script>

<style scoped></style>
