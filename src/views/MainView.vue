<script setup lang="ts">

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import {ref} from "vue";
import {Skeleton} from "@/components/ui/skeleton";

const images = ref([
  {src: "/public/carousel1.jpg", loading: true},
  {src: "/public/carousel2.jpg", loading: true},
  {src: "/public/carousel3.jpg", loading: true}
])
</script>

<template>
  <Carousel v-slot="{ canScrollNext }"
  :opts="{
      loop: true
  }" class="mt-2">
    <CarouselContent class="w-full h-[678px] max-h-[678px] ml-0">
      <CarouselItem v-for="image in images" class="pl-0">
        <Skeleton v-if="image.loading" class="w-full h-full"></Skeleton>
        <img class="w-full h-full object-cover"
             :src="image.src"
             @load="image.loading = false"
             @error="image.loading = false"
        >
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

<style scoped>

</style>