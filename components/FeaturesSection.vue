<script setup lang="ts">
import { type IconsType } from '~/types'

interface Feature {
  icon: keyof IconsType
  title: string
  description: string
}

defineProps<{
  features: Feature[]
  icons: IconsType
}>()
</script>

<template>
  <section id="features" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        功能特点
      </h2>
      <div class="grid md:grid-cols-3 gap-12">
        <div v-for="(feature, index) in features" 
             :key="index"
             class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
            <i :class="icons[feature.icon]" class="w-8 h-8 text-white"></i>
          </div>
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template> 