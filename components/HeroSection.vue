<script setup lang="ts">
import { type IconsType } from '~/types'

defineProps<{
  icons: IconsType
}>()
</script>

<template>
  <section class="py-20 md:py-32">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
        提升您的 <br />
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
          Chrome 性能
        </span>
      </h1>
      <p class="text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        通过我们强大的扩展程序释放浏览器的全部潜力。体验更快、更智能、更安全的浏览体验。
      </p>
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          <i :class="icons.Download" class="w-5 h-5 mr-2"></i>
          立即安装
        </button>
        <button class="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-8 rounded-full transition duration-300 border-2 border-indigo-600 hover:border-indigo-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-400 dark:border-indigo-400 transform hover:scale-105">
          了解更多
        </button>
      </div>
    </div>
  </section>
</template> 