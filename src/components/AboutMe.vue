<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
    language: String,
})
</script>

<template>
    <div class="sm:flex items-center max-w-screen-xl m-auto justify-center">
        <div class="sm:w-1/2 p-5">
            <div class="text">
                <span class="text-blue-600 font-medium uppercase dark:text-violet-400">{{ $t('aboutMe') }}</span>
                <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">{{ $t('who') }} <span class="bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">{{ $t('amI') }}</span>
                </h2>
                <p class="text-lg text-gray-600 dark:text-neutral-400 pb-8">
                    {{ $t('aboutText1') }}                
                </p>
                <p class="text-lg text-gray-600 dark:text-neutral-400 pb-8">
                    {{ $t('aboutText2') }} 
                </p>
                <p class="text-lg text-gray-600 dark:text-neutral-400 pb-8">
                    {{ $t('aboutText3') }} 
                </p>
            </div>
        </div>
        <div class="p-10 hidden md:block">
            <div>
                <img src="../assets/images/credit_score_second_banner_xs.svg">
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>