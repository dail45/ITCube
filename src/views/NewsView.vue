<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {marked} from "marked";
import {useNewsStore} from "@/stores/news.ts";
import {axiosClient} from "@/axiosclientbase.ts";
import {baseURL} from "@/constants.ts";


const props = defineProps<{
  refId: string
}>()

axiosClient.get("/news/" + props.refId).then(rsp => {
  console.log(rsp.data);
  if (rsp.status === 200) {
    news.value.title = rsp.data.title
    news.value.mainImgSrc = baseURL + rsp.data.gallery[0].fileUri
    news.value.mdContent = rsp.data.content
    news.value.date = new Intl.DateTimeFormat('ru-RU', {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(rsp.data.publishDate))
    news.value.gallery = rsp.data.gallery.slice(1).map(el => baseURL + el.fileUri)
  }
})

const news: {
  title: string,
  mainImgSrc: string,
  date: string,
  mdContent: string,
  gallery: string[]
} = ref({});

const compiledMDContent = computed(() => news.value.mdContent ? marked(news.value.mdContent,
    {sanitize: true}) : "");
</script>

<template>
  <h1>{{ news.title }}</h1>
  <img :src="news.mainImgSrc" class="w-full">
  <span class="text-secondary mt-4 block" v-if="news.date !== undefined">Дата публикации: {{ news.date }}</span>
  <div v-html="compiledMDContent" class="break-words" />
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mt-4">
    <img v-for="image in news.gallery" :src="image">
  </div>
</template>

<style scoped>

</style>