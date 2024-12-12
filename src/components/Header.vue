<script setup lang="ts">

import {Button} from "@/components/ui/button";
import NavMenu from "@/components/NavMenu.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
</script>

<template>
  <div class="w-full">
    <div id="main-header"
         class="container flex pt-[30px] pb-[10px] items-center justify-between">
      <img class="max-h-[100px] mr-auto" style="@media (min-width: 486px) {
        margin-right: 0;
      }" src="/public/logo4.png">
      <Button class="ml-auto pl-[40px] pt-[16px] pr-[40px] pb-[16px] font-bold" style="@media (min-width: 486px) {
        margin-left: 0;
      }">Записаться
      </Button>
    </div>
    <div class="container flex items-center justify-center">
      <NavMenu id="nav-menu" />
      <SidebarMenu id="sidebar-menu" />
    </div>
  </div>
</template>

<style scoped>
#main-header {
  display: flex;
  flex-direction: column;
}

#nav-menu {
  display: none;
}

#sidebar-menu {
  margin-left: auto;
}

@media (min-width: 486px) {
  #main-header {
    flex-direction: row;
  }

  #nav-menu {
    display: flex;
  }

  #sidebar-menu {
    display: none;
  }
}

</style>