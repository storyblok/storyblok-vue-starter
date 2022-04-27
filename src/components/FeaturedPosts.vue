<template>
  <div class="py-8 mb-6 container mx-auto text-left" v-editable="blok">
    <div class="relative">
      <h2 class="relative font-serif text-4xl z-10 text-primary">
        {{ blok.title }}
      </h2>
      <div
        class="absolute top-0 w-64 h-10 mt-6 -ml-4 bg-yellow-300 opacity-50"
      />
    </div>
    <ul class="flex">
      <FeaturedPost v-for="blok in blok.posts" :key="blok._uid" :blok="blok" />
    </ul>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
