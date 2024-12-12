<script setup>
import {defineProps} from "vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {useMenuStore} from "@/stores/menu";
import {ChevronsUpDown} from "lucide-vue-next";

const menuStore = useMenuStore();
</script>

<template>
  <div class="w-full bg-primary bg-cube pb-[32px]" style="border-radius: 0">
    <div
        class="container flex flex-row items-center relative pt-4 gap-[40px]">
      <div
          class="flex flex-row gap-2.5 items-center justify-start shrink-0 relative">
        <img
            class="shrink-0 w-[130px] h-[130px] relative"
            style="object-fit: cover"
            src="/public/logo2.png"
        />
      </div>
      <div
          class="flex flex-col gap-2.5 items-start justify-start shrink-0 relative">
        <div
            class="pr-4 pl-4 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
          <div
              class="text-left font-['Inter-Bold',_sans-serif] text-base leading-6 font-bold relative flex-1">
            Разделы сайта
          </div>
        </div>
        <div>
          <div v-for="item in menuStore.menu">
            <div v-if="item.inner === null || item.inner === undefined">
              <a :href="item.href"
                 class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{{
                  item.title
                }}</a>
            </div>
            <div v-else>
              <DropdownMenu>
                <DropdownMenuTrigger
                    class="text-base flex flex-row items-center select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <span>
              {{ item.title }}
            </span>
                  <ChevronsUpDown class="h-4 w-4"/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li v-for="innerItem in item.inner">
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
                    </li>
                  </ul>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
<!--      <div-->
<!--          class="flex flex-row gap-5 items-start justify-start shrink-0 w-[700px] h-[172px] relative">-->
<!--        <div-->
<!--            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative">-->
<!--          awdadwawdawd-->
<!--        </div>-->
<!--        <div-->
<!--            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative">-->
<!--          Тексты проихвольные уууу-->
<!--        </div>-->
<!--        <div-->
<!--            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative">-->
<!--          awdadwawdawd-->
<!--        </div>-->
<!--        <div-->
<!--            class="text-[#000000] text-left font-['Inter-Bold',_sans-serif] text-sm leading-6 font-bold relative">-->
<!--          awdadwawdawd-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>
.bg-thirdly {
  background-color: hsl(var(--thirdly));
}
.bg-cube {
  background-image: url("/public/cube.svg");
  background-size: 50%;
  background-color: hsl(var(--additionary));
  border-radius: var(--radius);
  color: hsl(var(--primary-foreground));
}
</style>
