<template>
  <component
    :is="componentToDisplay"
    :to="target"
    :variant="variant"
    class="flex h-12 items-center justify-center rounded-lg px-5 text-base font-medium outline outline-transparent transition-all hover:outline-offset-[3px]"
    :class="{
      'button-primary': variant === 'primary',
      'button-secondary': variant === 'secondary',
    }"
  >
    <slot />
  </component>
</template>

<script setup>
const { target, variant = "primary" } = defineProps({
  target: {
    type: String,
  },
  variant: {
    type: String,
  },
});

const componentToDisplay = computed(() =>
  target ? resolveComponent("NuxtLink") : "button",
);
</script>

<style scoped>
.button-primary {
  @apply bg-gradient-to-b from-primary-800 to-primary-900 text-neutral-100 hover:bg-primary-800 hover:outline-primary-800;
}

.button-secondary {
  @apply bg-gradient-to-b from-neutral-100 to-neutral-400 text-neutral-900 hover:bg-neutral-300 hover:outline-neutral-300;
}
</style>
