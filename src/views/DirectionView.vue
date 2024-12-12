<script setup lang="ts">

import {axiosClient} from "@/axiosclientbase.ts";
import {ref} from "vue";
import ProgramComponent from "@/components/directions/ProgramComponent.vue";

const props = defineProps<{
  refId: string
}>()

const info = ref({});

axiosClient.get("/study/" + props.refId).then(rsp => {
  if (rsp.status === 200) {
    info.value = rsp.data;
  }
});

</script>

<template>
  <div class="grid grid-cols-1 gap-[20px]">
    <ProgramComponent :program="program" v-for="program in info.programs" />
  </div>
</template>

<style scoped>

</style>