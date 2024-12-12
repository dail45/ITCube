<script setup lang="ts">

import {Button} from "@/components/ui/button";
import {useRouter} from "vue-router";
import {goToLink} from "@/lib/utils.ts";
import {baseURL} from "@/constants.ts";

const props = defineProps<{
  program: {
    refId: string,
    title: string,
    description: string,
    document: {
      refId: string,
      mediaType: string,
      photoCodec: string | null,
      fileUri: string
    }
  }
}>()

const router = useRouter();
const program = props.program
</script>

<template>
  <div class="p-[20px] flex flex-row justify-between border-1 items-center">
    <span>{{ program.title }}</span>
    <div class="flex flex-row gap-[20px]">
      <Button variant="outline" class="pdf-btn" @click="goToLink(router, baseURL + program.document.fileUri)">
        <span>Рассписание</span>
        <span class="pdf-span">PDF</span>
      </Button>
      <Button @click="goToLink(router, 'https://xn--45-kmc.xn--80aafey1amqq.xn--d1acj3b/')">
        <span>Записаться</span>
      </Button>
    </div>
  </div>
</template>

<style scoped>

.pdf-btn {

}

.pdf-span {
  color: #AE0C01;
  font-family: Circe;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: -1.4px;
}

.border-1 {
  border: 1px solid hsl(var(--secondary));
  border-radius: var(--radius);
}

</style>