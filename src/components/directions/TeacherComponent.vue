<script setup lang="ts">

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {baseURL} from "@/constants.ts";

const props = defineProps<{
  teacher: {
    refId: string,
    displayName: string,
    displayShortName: string,
    description: string,
    media: {
      refId: string,
      mediaType: string,
      photoCodec: string | null,
      fileUri: string
    }
  }
}>()
const teacher = props.teacher;
</script>

<template>
  <Card>
    <CardHeader class="p-0">
      <img :src="baseURL + teacher.media.fileUri" class="w-full">
    </CardHeader>
    <CardContent class="p-4 pt-2 pb-2 flex-1">
      <h2>{{ teacher.displayName }}</h2>
      <span class="break-words line-clamp-2">{{ teacher.description }}</span>
    </CardContent>
    <CardFooter class="p-4 pb-4 pt-0">
    </CardFooter>
  </Card>
</template>

<style scoped>

</style>