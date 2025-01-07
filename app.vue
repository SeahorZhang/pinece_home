<script setup lang="ts">
import { ref } from 'vue'
import { type IconsType } from '~/types'
import TheHeader from '~/components/TheHeader.vue'
import HeroSection from '~/components/HeroSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import HowItWorksSection from '~/components/HowItWorksSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import FAQSection from '~/components/FAQSection.vue'
import CTASection from '~/components/CTASection.vue'
import TheFooter from '~/components/TheFooter.vue'

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

const openFaqIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openFaqIndex.value = openFaqIndex.value === index ? null : index
}

const features = [
  { 
    icon: 'Zap', 
    title: "闪电般速度", 
    description: "体验我们优化的扩展程序带来的超快浏览速度。" 
  },
  { 
    icon: 'Shield', 
    title: "增强安全性", 
    description: "通过高级安全功能和实时威胁检测，保护您的在线安全。" 
  },
  { 
    icon: 'Rocket', 
    title: "提升生产力", 
    description: "通过智能自动化和可自定义的快捷方式简化您的工作流程。" 
  }
]

const steps = [
  { 
    title: "安装 ChromeBoost", 
    description: "只需在应用商店点击一下，即可将我们强大的扩展添加到 Chrome。" 
  },
  { 
    title: "自定义您的体验", 
    description: "通过我们直观的设置面板，根据您的需求定制 ChromeBoost。" 
  },
  { 
    title: "享受超强浏览体验", 
    description: "体验更快、更安全、更高效的网页浏览体验。" 
  }
]

const testimonials = [
  { 
    quote: "ChromeBoost 彻底改变了我的在线体验。就像为我的浏览器赋予了超能力！", 
    name: "张小明", 
    title: "网页开发者", 
    avatar: "/placeholder.svg?height=64&width=64" 
  },
  { 
    quote: "现在我无法想象没有 ChromeBoost 的 Chrome 浏览器。它已成为我日常工作和浏览必不可少的工具。", 
    name: "李小华", 
    title: "数字营销专家", 
    avatar: "/placeholder.svg?height=64&width=64" 
  }
]

const faqs = [
  { 
    question: "ChromeBoost 是免费使用的吗？", 
    answer: "是的，ChromeBoost 提供包含基本功能的免费版本。我们还为高级用户提供具有进阶功能的付费版本。" 
  },
  { 
    question: "如何安装 ChromeBoost？", 
    answer: "安装 ChromeBoost 非常简单！只需访问 Chrome 网上应用店，搜索 ChromeBoost，然后点击'添加到 Chrome'。扩展程序将在几秒钟内添加到您的浏览器中。" 
  },
  { 
    question: "ChromeBoost 与其他扩展程序兼容吗？", 
    answer: "ChromeBoost 设计时考虑到了与大多数 Chrome 扩展程序的兼容性。如果您遇到任何冲突，我们的支持团队随时准备为您提供帮助。" 
  },
  { 
    question: "ChromeBoost 多久更新一次？", 
    answer: "我们定期更新 ChromeBoost，以确保最佳性能、安全性和与最新版本 Chrome 的兼容性。更新会自动应用，因此您始终可以使用最新的功能和改进。" 
  }
]

const navItems = ['首页', '功能特点', '使用方法', '用户评价', '常见问题']
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
    <TheHeader :icons="icons" :nav-items="navItems" />
    
    <main>
      <HeroSection :icons="icons" />
      <FeaturesSection :features="features" :icons="icons" />
      <HowItWorksSection :steps="steps" />
      <TestimonialsSection :testimonials="testimonials" />
      <FAQSection 
        :faqs="faqs" 
        :icons="icons" 
        :open-faq-index="openFaqIndex"
        @toggle="toggleFaq"
      />
      <CTASection :icons="icons" />
    </main>

    <TheFooter :icons="icons" :nav-items="navItems" />
  </div>
</template>