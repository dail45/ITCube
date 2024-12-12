<script setup lang="ts">

import {axiosClient} from "@/axiosclientbase.ts";
import {computed, ref} from "vue";
import ProgramComponent from "@/components/directions/ProgramComponent.vue";
import {marked} from "marked";
import TeacherComponent from "@/components/directions/TeacherComponent.vue";

const props = defineProps<{
  refId: string
}>()

const info = ref({});

const html = computed(() => {
  return info.value.content ? marked(info.value.content, {sanitize: true}) : ""
})

axiosClient.get("/study/" + props.refId).then(rsp => {
  if (rsp.status === 200) {
    info.value = rsp.data;
    console.log(rsp.data);
  }
});

</script>

<template>
  <h2>{{ info.title }}</h2>
  <div v-html="html" />
  <h2>Программы</h2>
  <div class="grid grid-cols-1 gap-[20px]">
    <ProgramComponent :program="program" v-for="program in info.programs" />
  </div>
  <h2>Преподаватели</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-[20px]">
    <TeacherComponent :teacher="teacher" v-for="teacher in info.instructors" />
  </div>
</template>

<style scoped>

</style>