<template>
  <div v-editable="blok">
    <div class="bg-white-half w-full">
      <div
        class="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center"
      >
        <h1 class="text-5xl font-bold font-serif text-primary tracking-wide">
          {{ blok.title }}
        </h1>
        <p class="text-gray-500 text-lg max-w-lg">{{ blok.intro }}</p>
        <img class="w-full bg-gray-300 my-16" :src="blok.image" />
      </div>
    </div>
    <div class="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
      <div class="leading-relaxed text-xl text-left text-gray-800 drop-cap">
        {{ blok.long_text }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
