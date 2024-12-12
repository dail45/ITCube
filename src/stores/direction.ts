import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import { axiosClient } from "@/axiosclientbase.ts";

export const useDirectionStore = defineStore('direction', () => {
    const directions: ref<{
        value: string,
        label: string,
        description: string | null,
        href: string,
        icon: string
    }[]> = ref([])

    axiosClient.get("/study").then(rsp => {
        if (rsp.status === 200) {
            rsp.data.forEach(direction => {
                directions.value.push({
                    value: direction.refId,
                    label: direction.title,
                    description: direction.description,
                    href: "/directions/" + direction.refId,
                    icon: direction.icon.fileUri
                })
            })
        }
    });


    console.log(directions.value);
    return {directions}
})
