<script setup lang="ts">
import { type IconsType } from '~/types'

defineProps<{
  icons: IconsType
}>()
</script>

<template>
  <section id="cta" class="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-8 text-white">
        准备好提升您的 Chrome 体验了吗？
      </h2>
      <p class="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
        加入成千上万的满意用户，今天就体验 ChromeBoost 的强大功能。
      </p>
      <button class="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 flex items-center mx-auto">
        <i :class="icons.Download" class="w-6 h-6 mr-3"></i>
        立即获取 ChromeBoost
      </button>
    </div>
  </section>
</template> 