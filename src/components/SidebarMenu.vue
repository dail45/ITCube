<script setup lang="ts">

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader, SheetTrigger
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronsUpDown } from 'lucide-vue-next'
import {Button} from "@/components/ui/button";
import {useMenuStore} from "@/stores/menu.ts";

const menuStore = useMenuStore();
</script>

<template>
  <div>
    <Sheet>
      <SheetTrigger>
        <Button>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px"
               viewBox="0 -960 960 960" width="32px"
               style="fill: hsl(var(--primary-foreground))">
            <path
                d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left"
                    class="w-full flex flex-col">
        <SheetHeader/>
        <div v-for="item in menuStore.menu">
          <div v-if="item.inner === null || item.inner === undefined">
            <a :href="item.href"
               class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{{
                item.title
              }}</a>
          </div>
          <div v-else>
            <Collapsible>
              <CollapsibleTrigger
                  class="text-base flex flex-row select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <span>
              {{ item.title }}
            </span>
                <ChevronsUpDown class="h-4 w-4"/>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li v-for="innerItem in item.inner">
                    <a :href="innerItem.href"
                       class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div class="text-sm font-medium leading-none break-words">
                        {{ innerItem.title }}
                      </div>
                      <p class="line-clamp-3 text-sm leading-snug text-muted-foreground break-words">
                        {{ innerItem.description }}
                      </p>
                    </a>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
        <SheetFooter/>
      </SheetContent>
    </Sheet>
  </div>
</template>

<style scoped>

a, span {
  text-decoration: none;
  color: hsla(var(--primary2), 1);
  transition: 0.4s;
  padding: 8px 8px;
  border-radius: var(--radius);
}

span {
  padding: 0 0;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(var(--primary2), 0.2);
  }
}

</style>