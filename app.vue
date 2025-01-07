<script setup lang="ts">
import { ref } from 'vue'
import { type IconsType } from '~/types'
import TheHeader from '~/components/TheHeader.vue'
import HeroSection from '~/components/HeroSection.vue'

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
      <!-- Features Section -->
      <section id="features" class="py-20 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            Powerful Features
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

      <!-- How It Works Section -->
      <section id="how-it-works" class="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div class="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-16">
            <div v-for="(step, index) in steps" 
                 :key="index"
                 class="flex flex-col items-center text-center max-w-xs">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                {{ index + 1 }}
              </div>
              <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="testimonials" class="py-20 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div v-for="(testimonial, index) in testimonials" 
                 :key="index"
                 class="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-700 dark:via-gray-600 dark:to-gray-500 p-8 rounded-2xl shadow-xl">
              <p class="text-gray-600 dark:text-gray-300 mb-6 text-lg italic">
                "{{ testimonial.quote }}"
              </p>
              <div class="flex items-center">
                <img :src="testimonial.avatar" 
                     :alt="testimonial.name"
                     class="w-16 h-16 rounded-full mr-4 border-4 border-white dark:border-gray-800">
                <div>
                  <h4 class="font-semibold text-xl text-gray-900 dark:text-white">
                    {{ testimonial.name }}
                  </h4>
                  <p class="text-gray-500 dark:text-gray-400">
                    {{ testimonial.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="py-20 bg-white dark:bg-gray-800">
        <div class="container mx-auto px-4">
          <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div class="max-w-3xl mx-auto space-y-4">
            <div v-for="(faq, index) in faqs" 
                 :key="index"
                 class="border-b border-gray-200 dark:border-gray-700">
              <button @click="toggleFaq(index)"
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

      <!-- CTA Section -->
      <section id="cta" class="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold mb-8 text-white">
            Ready to Supercharge Your Chrome?
          </h2>
          <p class="text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Join thousands of satisfied users and experience the power of ChromeBoost today.
          </p>
          <button class="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105 flex items-center mx-auto">
            <i :class="icons.Download" class="w-6 h-6 mr-3"></i>
            Get ChromeBoost Now
          </button>
        </div>
      </section>
    </main>

    <!-- Footer -->
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
              Enhancing your Chrome experience, one click at a time.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 class="text-lg font-semibold mb-4">Legal</h4>
            <ul class="space-y-2">
              <li v-for="(item, index) in ['Privacy Policy', 'Terms of Service', 'Cookie Policy']"
                  :key="index">
                <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Social Links -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
            <div class="flex space-x-4">
              <a v-for="(icon, name) in { Twitter: icons.Twitter, Facebook: icons.Facebook, Linkedin: icons.Linkedin, Instagram: icons.Instagram }"
                 :key="name"
                 href="#"
                 class="text-gray-400 hover:text-white transition-colors duration-200">
                <i :class="icon" class="w-6 h-6"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {{ new Date().getFullYear() }} ChromeBoost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 可以添加任何需要的自定义样式 */
</style>

