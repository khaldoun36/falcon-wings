<template>
  <main v-if="pageProgram">
    <section
      v-for="(item, index) in pageProgram"
      :key="index"
      class="py-20 md:py-28 lg:py-32"
      :class="[
        index % 2 === 0 ? 'bg-primary-700/20' : 'bg-[hsl(46_74%_92%_/_.4)]',
        [index === 0 ? '!pt-48 md:!pt-52 lg:!pt-56' : ''],
      ]"
    >
      <Container tag="div" class="grid gap-8 lg:grid-cols-2 lg:gap-20">
        <NuxtImg
          :src="item.image.url"
          :alt="item.image.alt"
          :width="item.image.dimensions.width"
          :height="item.image.dimensions.height"
          class="aspect-square h-auto w-full rounded-lg border border-white/10 object-cover"
          :class="{ 'lg:!col-start-1 lg:!row-start-1': index % 2 === 0 }"
        />
        <div
          class="prose md:mt-8"
          :class="{ 'lg:!col-start-1 lg:!row-start-1': index % 2 !== 0 }"
        >
          <h2
            class="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            :class="{ 'tracking-wide': locale === 'en' }"
          >
            {{ item.title }}
          </h2>

          <PrismicRichText
            :field="item.subtitle"
            class="mt-6 max-w-prose text-pretty"
          />
        </div>
      </Container>
    </section>
  </main>
</template>

<script setup>
import Container from "~/components/base/Container.vue";
import { usePrograms } from "~/composables/usePrograms";

const { programDetails } = usePrograms();

const route = useRoute();

const programUid = route.params.uid;

const pageProgram = ref(null);

const program = computed(() => {
  return programDetails.value?.filter((program) => program.uid === programUid);
});

watch(
  [program],
  () => {
    if (program.value && program.value.length > 0) {
      pageProgram.value = program.value[0].data.about_the_program;
    }
  },
  { immediate: true },
);

const { locale } = useI18n();
</script>

<style scoped>
main :not(h1, h2, h3, h4, h5, h6) {
  @apply text-base md:text-lg;
  --body-color: theme("colors.neutral.600/80%");
  color: var(--body-color);
}
</style>
