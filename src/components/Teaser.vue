<template>
  <div class="bg-white-half" v-editable="blok">
    <div class="pb-6 pt-16 container mx-auto">
      <h2 class="text-6xl font-bold font-serif text-primary mb-4">
        {{ blok.headline }}
      </h2>
      <img :src="blok.image.filename" :alt="blok.image.alt" class="w-full" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
