<script setup>
import { useStoryblok } from '@storyblok/vue'
const story = await useStoryblok(
  'blog',
  {
    version: 'draft',
    resolve_relations: 'selected-posts.posts',
  },
  {
    resolveRelations: ['selected-posts.posts'],
  }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
