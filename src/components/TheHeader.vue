<script setup lang="ts">
import { type IconsType } from '../types'

interface Props {
  icons: IconsType
  navItems: string[]
}

defineProps<Props>()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 backdrop-blur-sm shadow-lg">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <a href="#" class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
          <i :class="icons.Zap" class="w-6 h-6 text-white"></i>
        </div>
        <span class="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
          ChromeBoost
        </span>
      </a>
      
      <nav class="hidden md:flex space-x-8">
        <a v-for="item in navItems" 
           :key="item"
           :href="`#${item.toLowerCase().replace(' ', '-')}`"
           class="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-200 font-medium">
          {{ item }}
        </a>
      </nav>
      
      <button class="md:hidden">
        Menu
      </button>
    </div>
  </header>
</template>