<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import "@/assets/base.css"
import {useDirectionStore} from "@/stores/direction.ts";

const directionStore = useDirectionStore();
const menu = [
  {
    title: "Новости",
    href: "/news",
    description: null,
    inner: null
  },
  {
    title: "О направлениях",
    href: null,
    description: null,
    inner: directionStore.directions.map(direction => ({
      title: direction.label,
      href: direction.href,
      description: direction.description
    }))
  },
  {
    title: "О центре",
    href: "/about",
    description: null,
    inner: [
      {
        title: "Документы",
        href: "/docs",
        description: "Documents"
      },
      {
        title: "Руководство",
        href: "/guides",
        description: "Guides"
      },
      {
        title: "Преподавательский состав",
        href: "/teachers",
        description: "Teachers"
      }
    ]
  },
  {
    title: "Контакты",
    href: "/contacts",
    description: null,
    inner: null
  }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="item in menu">
        <div v-if="item.inner === null || item.inner === undefined">
          <NavigationMenuLink as-child>
            <a :href="item.href" class="text-base">{{ item.title }}</a>
          </NavigationMenuLink>
        </div>
        <div v-else>
          <NavigationMenuTrigger class="text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            {{ item.title }}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li v-for="innerItem in item.inner">
                <NavigationMenuLink as-child>
                  <a :href="innerItem.href"
                     class="block text-base select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div class="text-sm font-medium leading-none break-words">
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
</template>

<style scoped>

a, .NavigationMenuTrigger {
  text-decoration: none;
  color: hsla(var(--primary-foreground), 1);
  transition: 0.4s;
  padding: 10px 8px;
  border-radius: var(--radius);
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(var(--primary), 0.2);
  }

}

</style>