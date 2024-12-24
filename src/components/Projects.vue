<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
    language: String,
})
</script>

<template>
    <div id="projects" class="flex justify-center items-center mt-14">
        <span class="text-blue-600 font-medium uppercase dark:text-violet-400">{{  $t('projects') }}</span>
    </div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card -->
        <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#141820] dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <img class="w-full h-52 rounded-t-xl object-cover" src="../assets/images/gestor_items.png" alt="">
        </div>
        <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                {{ $t('projectType1') }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {{ $t('projectName1') }}
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                {{ $t('projectDesc1') }}
            </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <!-- <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#141820] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            {{ $t('link') }}
            </a> -->
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#141820] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/mariorous/gestor_items" target="_blank">
            {{ $t('repository') }}
            </a>
        </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#141820] dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="h-52 flex flex-col justify-center items-center bg-violet-500 rounded-t-xl">
            <img class="w-full h-52 rounded-t-xl object-cover" src="../assets/images/hangman_game.png" alt="">
        </div>
        <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-violet-600 dark:text-violet-500">
                {{ $t('projectType2') }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                {{ $t('projectName2') }}
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
                {{ $t('projectDesc2') }}
            </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <!-- <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#141820] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
            {{ $t('link') }}
            </a> -->
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#141820] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/mariorous/hangman_game" target="_blank">
            {{ $t('repository') }}
            </a>
        </div>
        </div>
        <!-- End Card -->

        <!-- Card -->
        <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#141820] dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div class="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <img class="w-full h-52 rounded-t-xl object-cover" src="../assets/images/gesper.png" alt="">
        </div>
        <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-amber-500">
            {{ $t('projectType3') }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            {{ $t('projectName3') }}
            </h3>
            <p class="mt-3 text-gray-500 dark:text-neutral-500">
            {{ $t('projectDesc3') }}
            </p>
        </div>
        <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#141820] dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="https://github.com/mariorous/gesper-theme" target="_blank">
            {{ $t('repository') }}
            </a>
        </div>
        </div>
        <!-- End Card -->
    </div>
    <!-- End Grid -->
    </div>
</template>