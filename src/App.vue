<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import AboutMe from './components/AboutMe.vue';
import Services from './components/Services.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const isDarkMode = ref(false)

const setFavicon = (theme) => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
        favicon.href = theme === 'dark'
            ? './src/assets/icon-mario-white.svg' // Favicon para modo oscuro
            : './src/assets/icon-mario-black.svg'; // Favicon para modo claro
    }
};

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode.value = true;
        document.body.classList.add('dark');
        setFavicon('dark');
    } else {
        isDarkMode.value = false;
        setFavicon('light');
    }
});

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    const theme = isDarkMode.value ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('theme', theme); // Guarda el tema en localStorage
    setFavicon(theme);
}
</script>

<template>
    <Header :isDarkMode="isDarkMode" @toggleDarkMode="toggleDarkMode" />
    <HeroSection />
    <AboutMe />
    <Services />
    <Projects />
    <Contact />
    <Footer />
</template>

<style>
body.dark {
    background-color: #1a202c; /* Color de fondo oscuro */
    color: #f7fafc; /* Color de texto claro */
}
</style>
