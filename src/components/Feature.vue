<template>
  <div
    class="py-16 max-w-sm p-2 sm:p-10 text-center flex flex-col items-center"
    v-editable="blok"
  >
    <component :is="blok.icon"></component>
    <div class="px-6 py-4">
      <div class="font-bold text-xl my-4">{{ blok.name }}</div>
      <p class="text-base text-gray-600">{{ blok.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
