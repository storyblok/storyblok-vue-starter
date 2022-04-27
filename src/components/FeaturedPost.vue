<template>
  <li v-editable="blok" class="pr-8 w-1/3">
    <RouterLink
      :to="`/blog/${blok.slug}`"
      class="py-16 block transition hover:opacity-50"
    >
      <img :src="blok.content.image" class="pb-10 w-full" />
      <h2 class="pb-6 text-lg font-bold">{{ blok.content.title }}</h2>
      <p class="pb-6 text-gray-700 leading-loose">
        {{ blok.content.intro }}
      </p>
    </RouterLink>
  </li>
</template>

<script setup>
defineProps({ blok: Object })
</script>
