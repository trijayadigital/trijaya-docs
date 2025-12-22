<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();
const { localePath } = useDocusI18n();
const navigation = inject<Ref<ContentNavigationItem[]>>("navigation");

const items = computed(() => {
  const baseItems = [
    {
      label: "Umum",
      icon: "i-lucide-book-open",
      to: localePath("/introduction/introduction/welcome"),
      path: "/introduction",
    },
    {
      label: "Developer Guide",
      icon: "i-lucide-database",
      to: localePath("/developer-guide/installation"),
      path: "/developer-guide",
    },
    {
      label: "API References",
      icon: "i-lucide-box",
      to: localePath("/api-references/api-endpoints"),
      path: "/api-references",
    },
  ];

  return baseItems.map((item) => ({
    ...item,
    active: route.path.includes(item.path),
  }));
});
</script>

<template>
  <USeparator class="hidden lg:flex" />
  <UContainer class="hidden lg:flex items-center justify-between bg-white dark:bg-transparent h-[48px]">
    <UNavigationMenu :items="items" variant="pill" highlight class="-mx-2.5" />
  </UContainer>
</template>
