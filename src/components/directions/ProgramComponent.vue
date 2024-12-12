<script setup lang="ts">

import {Button} from "@/components/ui/button";

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
const program = props.program
</script>

<template>
  <div class="p-[20px] flex flex-row justify-between border-1 items-center">
    <span>{{ program.title }}</span>
    <div class="flex flex-row gap-[20px]">
      <Button variant="outline" class="pdf-btn">
        <span>Рассписание</span>
        <span class="pdf-span">PDF</span>
      </Button>
      <Button>
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