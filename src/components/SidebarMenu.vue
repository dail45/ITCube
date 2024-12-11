<script setup lang="ts">

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader, SheetTrigger
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
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
      <SheetContent side="left">
        <SheetHeader/>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="item in menuStore.menu">
              <div v-if="item.inner === null || item.inner === undefined">
                <NavigationMenuLink as-child>
                  <a :href="item.href" class="text-base">{{ item.title }}</a>
                </NavigationMenuLink>
              </div>
              <div v-else>
                <NavigationMenuTrigger
                    class="text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                  {{ item.title }}
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
        <SheetFooter/>
      </SheetContent>
    </Sheet>
  </div>
</template>

<style scoped>

a, .NavigationMenuTrigger {
  text-decoration: none;
  color: hsla(var(--primary-foreground2), 1);
  transition: 0.4s;
  padding: 8px 8px;
  border-radius: var(--radius);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(var(--primary2), 0.2);
  }
}

</style>