<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
// ... 其他导入

// Icons components (需要替换为你选择的图标库)
const icons = {
  Zap: 'zap',
  Shield: 'shield',
  Rocket: 'rocket',
  Download: 'download',
  ChevronDown: 'chevron-down',
  Twitter: 'twitter',
  Facebook: 'facebook',
  Linkedin: 'linkedin',
  Instagram: 'instagram'
} as const

// ... 其他数据定义

const navItems = ['首页', '功能特点', '使用方法', '用户评价', '常见问题']
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
    <TheHeader :icons="icons" :nav-items="navItems" />
    
    <main>
      <!-- ... 其他部分保持不变 ... -->
    </main>

    <!-- ... footer 部分保持不变 ... -->
  </div>
</template>