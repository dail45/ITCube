<script setup lang="ts">
import {MdEditor, config} from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {ref} from 'vue';
import ru from '@vavt/cm-extension/dist/locale/ru';
import {Label} from "@/components/ui/label"

config({
  editorConfig: {
    languageUserDefined: {
      'ru': ru
    }
  }
});
const content = ref("");
const images = ref([]);

function onFileChange(event) {
  const files = event.target.files;
  for (let file of files) {
    if (file.type.startsWith('image/')) {
      // todo send image to backend
      images.value.push({id: "1", src: "/public/carousel1.jpg"});
    }
  }
}

function removeImage(id) {
  images.value = images.value.filter(image => image.id !== id);
  // todo send to backend for remove image
}

</script>

<template>
  <MdEditor language="ru" v-model="content" class="mt-6 mb-4" style="border-radius: var(--radius)">
  </MdEditor>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
    <img src="/public/carousel1.jpg">
    <img src="/public/carousel2.jpg">
    <img src="/public/carousel3.jpg">
    <div v-for="image in images" class="relative">
      <img :src="image.src">
      <a class="trash-a absolute top-2 right-2" @click="removeImage(image.id)">
        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ff0000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      </a>
    </div>
  </div>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <Label for="picture">Добавить изображение</Label>
    <input id="picture" type="file" @change="onFileChange"></input>
  </div>
</template>

<style scoped>

.trash-a {
  background-color: aliceblue;
  border-radius: var(--radius)
}

</style>