<script setup lang="ts">
interface Step {
  title: string
  description: string
}

defineProps<{
  steps: Step[]
}>()
</script>

<template>
  <section id="how-it-works" class="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        使用方法
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
</template> 