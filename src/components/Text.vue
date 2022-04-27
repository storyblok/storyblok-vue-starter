<template>
  <div class="bg-white w-full" v-editable="blok">
    <div class="container mx-auto py-12">{{ blok.text }}</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
