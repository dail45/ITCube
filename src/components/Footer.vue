<script setup>
import {defineProps} from "vue";
import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger
} from "@/components/ui/navigation-menu/index.js";

const menuStore = useMenuStore();
</script>

<template>
  <div class="flex flex-row items-center justify-between relative">
    <div
        class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"
    >
      <img
          class="shrink-0 w-[130px] h-[130px] relative"
          style="object-fit: cover"
          src="_30.png"
      />
    </div>
    <div
        class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative"
    >
      <div
          class="pr-4 pl-4 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative"
      >
        <div
            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-base leading-6 font-bold relative flex-1"
        >
          Разделы сайта
        </div>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem v-for="item in menuStore.menu">
            <div v-if="item.inner === null || item.inner === undefined">
              <NavigationMenuLink as-child>
                <a :href="item.href"
                   class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{{
                    item.title
                  }}</a>
              </NavigationMenuLink>
            </div>
            <div v-else>
              <NavigationMenuTrigger
                  class="text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <span>
              {{ item.title }}
            </span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li v-for="innerItem in item.inner">
                    <NavigationMenuLink as-child>
                      <a :href="innerItem.href"
                         class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div
                            class="text-sm font-medium leading-none break-words">
                          {{ innerItem.title }}
                        </div>
                        <p class="line-clamp-3 text-sm leading-snug text-muted-foreground break-words">
                          {{ innerItem.description }}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div
          class="flex flex-row gap-5 items-start justify-start shrink-0 w-[700px] h-[172px] relative"
      >
        <div
            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative"
        >
          awdadwawdawd
        </div>
        <div
            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative"
        >
          Тексты проихвольные уууу
        </div>
        <div
            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative"
        >
          awdadwawdawd
        </div>
        <div
            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative"
        >
          awdadwawdawd
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
