<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();
const fullNavigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const navigation = computed(() => {
  if (!fullNavigation?.value) return [];

  const currentSection = fullNavigation.value.find((item) => {
    return route.path.startsWith(item.path || "");
  });

  return currentSection?.children || fullNavigation.value;
});
</script>

<template>
  <UContentNavigation
    variant="pill"
    :navigation="navigation"
    trailing-icon="i-lucide-chevron-up"
  />
</template>
