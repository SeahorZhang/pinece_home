<script setup lang="ts">
import { type IconsType } from '~/types'

interface FAQ {
  question: string
  answer: string
}

defineProps<{
  faqs: FAQ[]
  icons: IconsType
  openFaqIndex: number | null
}>()

const emit = defineEmits<{
  (e: 'toggle', index: number): void
}>()
</script>

<template>
  <section id="faq" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        常见问题
      </h2>
      <div class="max-w-3xl mx-auto space-y-4">
        <div v-for="(faq, index) in faqs" 
             :key="index"
             class="border-b border-gray-200 dark:border-gray-700">
          <button @click="emit('toggle', index)"
                  class="flex justify-between items-center w-full py-5 text-left text-lg font-medium text-gray-900 dark:text-white focus:outline-none">
            {{ faq.question }}
            <i :class="[icons.ChevronDown, openFaqIndex === index ? 'transform rotate-180' : '']"
               class="w-5 h-5 text-gray-500 transition-transform duration-300"></i>
          </button>
          <div :class="['overflow-hidden transition-all duration-300 ease-in-out', 
                      openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']">
            <p class="py-5 text-gray-600 dark:text-gray-300">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 