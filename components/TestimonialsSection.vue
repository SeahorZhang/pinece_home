<script setup lang="ts">
interface Testimonial {
  quote: string
  name: string
  title: string
  avatar: string
}

defineProps<{
  testimonials: Testimonial[]
}>()
</script>

<template>
  <section id="testimonials" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white">
        用户评价
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
</template> 