<script setup lang="ts">
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {Textarea} from "@/components/ui/textarea";
import {Check} from 'lucide-vue-next'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {toast} from '@/components/ui/toast'
import {toTypedSchema} from '@vee-validate/zod'
import {useForm} from 'vee-validate'
import {h} from 'vue'
import {cn} from '@/lib/utils'
import * as z from 'zod'

import {useDirectionStore} from "@/stores/direction.ts"


const formSchema = toTypedSchema(z.object({
  FIO: z.string(),
  phone: z.string(),
  direction: z.string()
}))

const {handleSubmit, setFieldValue, values} = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', {class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4'}, h('code', {class: 'text-white'}, JSON.stringify(values, null, 2))),
  })
})

const directionStore = useDirectionStore();
console.log(directionStore.directions);

</script>

<template>
  <form @submit="onSubmit">
    <FormField v-slot="{ field }" name="FIO">
      <FormItem>
        <FormLabel>ФИО*</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Иванов Иван Иванович" v-bind="field"/>
        </FormControl>
      </FormItem>
    </FormField>


    <FormField v-slot="{ field }" name="phone">
      <FormItem>
        <FormLabel>Телефон*</FormLabel>
        <FormControl>
          <Input type="tel" placeholder="+7 (915) 240-5130" v-bind="field"/>
        </FormControl>
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="direction">
      <FormItem>
        <FormLabel>Направление</FormLabel>
        <Select>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Выберите направление"/>
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="direction in directionStore.directions"
                          :key="direction.value" :value="direction.label">
                {{ direction.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormItem>
    </FormField>

    <FormField v-slot="{ field }" name="question">
      <FormItem>
        <FormLabel>Вопрос</FormLabel>
        <FormControl>
          <Textarea class="h-full" placeholder="Введите ваш вопрос здесь." v-bind="field"/>
        </FormControl>
      </FormItem>
    </FormField>
    <Button type="submit" class="mt-2">
      Отправить
    </Button>
  </form>
</template>

<style scoped>

</style>