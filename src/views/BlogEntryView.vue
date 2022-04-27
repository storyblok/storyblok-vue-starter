<script setup>
import { useRoute } from 'vue-router'
import { useStoryblok } from '@storyblok/vue'
const route = useRoute()
const story = await useStoryblok(`blog/${route.params.slug}`, {
  version: 'draft',
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
