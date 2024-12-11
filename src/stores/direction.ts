import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useDirectionStore = defineStore('direction', () => {
    const directions: ref<{
        value: string,
        label: string,
        description: string | null,

    }[]> = ref([])
    directions.value.push({
        value: "direction-python",
        label: "Программирование на языке Python",
        description: "Основы разработки на Python.",
        href: "/directions/python"
    });
    directions.value.push({
        value: "direction-mobile",
        label: "Мобильная разработка",
        description: "Разработка мобильных приложений для iOS и Android.",
        href: "/directions/mobile"
    });
    directions.value.push({
        value: "direction-algorithms",
        label: "Основы алгоритмимки и логики",
        description: "Изучение основ алгоритмов и структур данных.",
        href: "/directions/algorithms"
    });
    directions.value.push({
        value: "direction-robotics",
        label: "Программирование роботов",
        description: "Создание и программирование роботов.",
        href: "/directions/robotics"
    });
    directions.value.push({
        value: "direction-cybersecurity",
        label: "Кибергигиена и работа с большими данными",
        description: "Защита данных и кибербезопасность.",
        href: "/directions/cybersecurity"
    });
    directions.value.push({
        value: "direction-vr-ar",
        label: "Разработка VR/AR приложений",
        description: "Разработка приложений для виртуальной и дополненной реальности.",
        href: "/directions/vr-ar"
    });
    console.log(directions.value);
    return {directions}
})
