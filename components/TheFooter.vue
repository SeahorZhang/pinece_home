<script setup lang="ts">
import { type IconsType } from '~/types'

defineProps<{
  icons: IconsType
  navItems: string[]
}>()

const legalItems = ['隐私政策', '服务条款', 'Cookie 政策']
const socialIcons = {
  Twitter: 'Twitter',
  Facebook: 'Facebook',
  Linkedin: 'Linkedin',
  Instagram: 'Instagram'
} as const
</script>

<template>
  <footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <i :class="icons.Zap" class="w-6 h-6 text-white"></i>
            </div>
            <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              ChromeBoost
            </span>
          </div>
          <p class="text-gray-400">
            提升您的 Chrome 体验，一键开启全新可能。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">快速链接</h4>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item">
              <a :href="`#${item.toLowerCase().replace(' ', '-')}`"
                 class="text-gray-400 hover:text-white transition-colors duration-200">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-lg font-semibold mb-4">法律条款</h4>
          <ul class="space-y-2">
            <li v-for="(item, index) in legalItems" :key="index">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="text-lg font-semibold mb-4">关注我们</h4>
          <div class="flex space-x-4">
            <a v-for="(icon, name) in socialIcons"
               :key="name"
               href="#"
               class="text-gray-400 hover:text-white transition-colors duration-200">
              <i :class="icons[icon]" class="w-6 h-6"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} ChromeBoost. 保留所有权利。</p>
      </div>
    </div>
  </footer>
</template> 