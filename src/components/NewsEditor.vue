<script setup lang="ts">
import { MdEditor, config } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';
import ru from '@vavt/cm-extension/dist/locale/ru';

config({
  editorConfig: {
    languageUserDefined: {
      'ru': ru
    }
  }
});
const content = ref("");
const images = ref([]);
</script>

<template>
  <MdEditor language="ru" v-model="content">
  </MdEditor>

</template>

<style scoped>

</style>