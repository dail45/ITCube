<script setup lang="ts">

import {
  Carousel,
  CarouselContent,
  CarouselItem, CarouselNext, CarouselPrevious
} from "@/components/ui/carousel";
import {ref} from "vue";
import {Skeleton} from "@/components/ui/skeleton";
import Autoplay from 'embla-carousel-autoplay'
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import NewsEditor from "@/components/NewsEditor.vue";
import DirectionComponent from "@/components/directions/DirectionComponent.vue";
import {useDirectionStore} from "@/stores/direction.ts";
import {axiosClient} from "@/axiosclientbase.ts";
import {useRouter} from "vue-router";
import {goToLink} from "@/lib/utils.ts";
import {baseURL} from "@/constants.ts";

const router = useRouter()

const announcements = ref([])

axiosClient.get("/announcements").then(rsp => {
  console.log(rsp.data)
  if (rsp.status === 200) {
    rsp.data.forEach(announcement => {
      announcements.value.push(announcement)
    });
  }
});

const directionStore = useDirectionStore();



const latest_news = ref([
  {src: "/public/carousel1.jpg", loading: true, href: "/news/1", title: "Заголовок новости1", date: "11.01.2024"},
  {src: "/public/carousel2.jpg", loading: true, href: "/news/2", title: "Заголовок новости2", date: "11.01.2024"},
  {src: "/public/carousel3.jpg", loading: true, href: "/news/3", title: "Этот заголовок ну ооооооооооооооооооооооооооочеееееееееееееееееееееень длииииииииииииииинный", date: "11.01.2024"},
])

</script>

<template>
  <Carousel v-slot="{ canScrollNext }"
            :opts="{ loop: true }"
            :plugins="[Autoplay({ delay: 3000 })]">
    <CarouselContent class="w-full h-[500px] max-h-[500px] ml-0">
      <CarouselItem v-for="announcement in announcements" class="pl-0">
        <img class="w-full h-full object-cover"
             :src="baseURL + announcement.media.fileUri" @click="goToLink(router, announcement.url)"
        >
      </CarouselItem>
    </CarouselContent>
  </Carousel>

  <div id="latest-news" class="mt-10 w-full">
    <div class="flex justify-between items-center">
      <span class="text-[24px]">Последние новости</span>
      <Button class="thirdly">Посмотреть больше</Button>
    </div>
    <div class="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-[60px] mt-6">
      <Card v-for="news in latest_news" class="news-card flex flex-col">
        <CardHeader class="p-0">
          <img :src="news.src" class="w-full">
        </CardHeader>
        <CardContent class="p-4 pt-2 pb-2 flex-1">
          <span class="break-words line-clamp-2">{{ news.title }}</span>
        </CardContent>
        <CardFooter class="p-4 pb-4 pt-0">
          <div class="flex w-full justify-between items-center">
            <span class="text-secondary">{{ news.date }}</span>
            <Button class="thirdly">Подробнее</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>

  <div id="about-div" class="w-full mt-6 pt-[32px] pl-[40px] pr-[40px] pb-[32px] flex flex-row">
    <img src="/public/logo2.png" id="about-img" class="max-w-[200px] mr-[40px]">
    <div>
      <h1 class="text-[48px] font-bold">
        О центре
      </h1>
      <span class="text-[32px]">
        Центр цифрового образования детей "IT-КУБ.КУРГАН" – подразделение Курганского технологического колледжа, осуществляющее обучение по дополнительным общеразвивающим программам, направленным на интеллектуальное развитие детей и подростков в сфере современных информационных и телекоммуникационных технологий.
      </span>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-6">
    <DirectionComponent v-for="direction in directionStore.directions" :direction="direction"></DirectionComponent>
  </div>

</template>

<style scoped>

#about-div {
  background-image: url("/public/cube.svg");
  background-size: 50%;
  background-color: hsl(var(--additionary));
  border-radius: var(--radius);
  color: hsl(var(--primary-foreground));
}

#about-img {
  object-fit: contain;
  justify-content: center;
}

.news-card {
  box-shadow: 0px 2px 4px 0px rgba(174, 174, 174, 0.25);
  img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
}

.thirdly {
  background-color: hsl(var(--thirdly));
  color: hsl(var(--thirdly-foreground));
}

</style>