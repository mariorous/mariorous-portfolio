<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
    language: String,
})
</script>

<template>
    <footer class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="text-center">
        <div>
        <a class="flex justify-center text-xl font-semibold text-black dark:text-white" href="#" aria-label="Brand">
            <svg class="dark:fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0 0 64 64">
                <path d="M6 13.236v33.009c0 1.084.585 2.083 1.529 2.615l11.49 6.463C20.353 56.073 22 55.11 22 53.58V18L8.894 11.447C7.565 10.782 6 11.749 6 13.236zM42.927 47.674l14.5-28.999-13.659-7.759c-.978-.506-2.181-.127-2.691.848l-8.664 16.541L42.927 47.674zM36.955 45.055L26 24.876 26 38.838zM58 26.472L46.087 50.299l8.933 5.025C56.353 56.073 58 55.11 58 53.58V26.472z"></path>
            </svg>
        </a>
        </div>
        <!-- End Col -->

        <div class="mt-3">
        <p class="text-gray-500 dark:text-neutral-500">
            © 2024 Mario López
        </p>
        </div>
    </div>
    <!-- End Grid -->
    </footer>
</template>