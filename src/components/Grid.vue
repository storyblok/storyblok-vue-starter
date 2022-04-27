<template>
  <ul class="flex py-8 mb-6 container mx-auto" v-editable="blok">
    <li v-for="blok in blok.columns" :key="blok._uid" class="flex-auto px-6">
      <StoryblokComponent :blok="blok" />
    </li>
  </ul>
</template>

<script setup>
defineProps({ blok: Object })
</script>
