<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <div class="container w-full flex-1 mt-6 mb-6">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>

</style>
