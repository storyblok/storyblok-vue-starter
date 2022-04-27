import { createApp } from 'vue'
import router from './router'

import './assets/main.css'

import { StoryblokVue, apiPlugin } from '@storyblok/vue'

import App from './App.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Grid from './components/Grid.vue'
import Page from './components/Page.vue'
import Post from './components/Post.vue'
import Teaser from './components/Teaser.vue'
import Feature from './components/Feature.vue'
import FeaturedPosts from './components/FeaturedPosts.vue'
import FeaturedPost from './components/FeaturedPost.vue'
import SelectedPosts from './components/SelectedPosts.vue'
import SelectedPost from './components/SelectedPost.vue'
import Text from './components/Text.vue'
import Mail from './components/icons/Mail.vue'
import Phone from './components/icons/Phone.vue'
import Twitter from './components/icons/Twitter.vue'

const app = createApp(App)

app.use(router)

app.component('Header', Header)
app.component('Footer', Footer)
app.component('Grid', Grid)
app.component('Page', Page)
app.component('Post', Post)
app.component('Teaser', Teaser)
app.component('Feature', Feature)
app.component('FeaturedPosts', FeaturedPosts)
app.component('FeaturedPost', FeaturedPost)
app.component('SelectedPosts', SelectedPosts)
app.component('SelectedPost', SelectedPost)
app.component('Text', Text)
app.component('Mail', Mail)
app.component('Phone', Phone)
app.component('Twitter', Twitter)

app.use(StoryblokVue, {
  accessToken: '5tSyyRs2M8lBlegDN8J3dAtt',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
})

app.mount('#app')
