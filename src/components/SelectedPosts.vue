<template>
  <ul class="mx-auto w-full flex flex-col items-center" v-editable="blok">
    <SelectedPost v-for="blok in blok.posts" :key="blok._uid" :blok="blok" />
  </ul>
</template>

<script setup>
defineProps({ blok: Object })
</script>
