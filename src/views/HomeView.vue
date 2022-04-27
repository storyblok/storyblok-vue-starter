<script setup>
import { useStoryblok } from '@storyblok/vue'
const story = await useStoryblok(
  'home',
  {
    version: 'draft',
    resolve_relations: 'featured-posts.posts',
  },
  {
    resolveRelations: ['featured-posts.posts'],
  }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
