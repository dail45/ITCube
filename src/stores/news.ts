import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import { axiosClient } from "@/axiosclientbase.ts";

export const useNewsStore = defineStore('news', () => {
    const news: ref<{
        refId: string,
        title: string,
        media: {
            refId: string,
            mediaType: string,
            photoCodec: string | null,
            fileUri: string
        }
    }[]> = ref([])

    axiosClient.get("/news").then(rsp => {
        if (rsp.status === 200) {
            news.value = rsp.data;
        }
    });

    return {news}
})
