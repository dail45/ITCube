<script setup lang="ts">

import {useRouter} from "vue-router";
import {baseURL} from "@/constants.ts";
import {goToLink} from "@/lib/utils.ts";

const props = defineProps<{
  direction: {
    value: string,
    label: string,
    description: string | null,
    href: string,
    icon: string
  }
}>()
const direction = props.direction
const router = useRouter()
</script>

<template>
  <div
      class="direction-card pt-[40px] pr-[32px] pl-[32px] pb-[40px] flex flex-row gap-[30px]" @click="goToLink(router, direction.href)">
    <div>
      <img :src="baseURL + direction.icon" style="width: 50px; height: 50px">
    </div>
    <div class="flex flex-col">
      <span>{{ direction.label }}</span>
      <span class="text-secondary">{{ direction.description }}</span>
    </div>
  </div>
</template>

<style scoped>

.direction-card {
  background: url("/cube.svg") lightgray 50% / cover;
  border-radius: 8px;
  border: 1px solid rgba(22, 65, 148, 0.25);
  box-shadow: 0px 2px 8px 0px rgba(22, 65, 148, 0.25);
}
</style>