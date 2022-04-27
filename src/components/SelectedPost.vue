<template>
  <li
    class="max-w-4xl w-full px-10 my-4 py-6 rounded-lg shadow-md bg-white"
    v-editable="blok"
  >
    <div class="flex justify-between items-center">
      <span class="font-light text-gray-600"> {{ formattedDate }} </span>
    </div>
    <div class="mt-2">
      <RouterLink
        class="text-2xl text-gray-700 font-bold hover:text-gray-600"
        :to="`/blog/${blok.slug}`"
      >
        {{ blok.content.title }}
      </RouterLink>
      <p class="mt-2 text-gray-600">{{ blok.content.intro }}</p>
    </div>
    <div class="flex justify-between items-center mt-4">
      <RouterLink
        class="text-blue-600 hover:underline"
        :to="`/blog/${blok.slug}`"
      >
        Read more
      </RouterLink>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ blok: Object })
const date = new Date(props.blok.created_at)

const formattedDate = computed(() => {
  return date.getDay() + '. ' + date.getMonth() + '. ' + date.getFullYear()
})
</script>
