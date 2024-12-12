import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useDirectionStore} from "@/stores/direction.ts";
import { axiosClient } from "@/axiosclientbase.ts";

export const useMenuStore = defineStore('menu', () => {
    const menu: ref<{
        title: string,
        href: string,
        description: string | null,
        inner: {
            title: string,
            href: string,
            description: string
        }[] | null
    }[]> = ref([])
    const directionStore = useDirectionStore();
    menu.value.push(...[
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
            inner: computed(() => directionStore.directions.map(direction => ({
                title: direction.label,
                href: direction.href,
                description: direction.description
            })))
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
    ])

    return {menu}
})
