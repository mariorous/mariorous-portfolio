<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import Services from './components/Services.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const { locale } = useI18n();

const isDarkMode = ref(false);
const currentLanguage = ref('es'); // Idioma inicial

const setFavicon = (theme) => {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
        favicon.href = theme === 'dark'
            ? '/icon-mario-white.svg' // Favicon para modo oscuro
            : '/icon-mario-black.svg'; // Favicon para modo claro
    }
};

onMounted(() => {
    // Configuración del tema desde localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode.value = true;
        document.body.classList.add('dark');
        setFavicon('dark');
    } else {
        isDarkMode.value = false;
        setFavicon('light');
    }

    // Configuración del idioma desde localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage.value = savedLanguage;
    }
});

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    const theme = isDarkMode.value ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode.value);
    localStorage.setItem('theme', theme);
    setFavicon(theme);
};

const toggleLanguage = () => {
    // coger el idioma del sistema
    if (!localStorage.getItem('language')) {
        const systemLanguage = navigator.language.split('-')[0];
        currentLanguage.value = systemLanguage === 'es' ? 'es' : 'en';
        locale.value = currentLanguage.value;
        localStorage.setItem('language', currentLanguage.value); // Guarda el idioma en localStorage
    } else {
        currentLanguage.value = currentLanguage.value === 'es' ? 'en' : 'es';
        locale.value = currentLanguage.value;
        localStorage.setItem('language', currentLanguage.value); // Guarda el idioma en localStorage
    }
};
</script>

<template>
    <Header
        :isDarkMode="isDarkMode"
        :currentLanguage="currentLanguage"
        @toggleDarkMode="toggleDarkMode"
        @toggleLanguage="toggleLanguage"
    />
    <HeroSection :language="currentLanguage" />
    <AboutMe :language="currentLanguage" />
    <Services :language="currentLanguage" />
    <Projects :language="currentLanguage" />
    <Contact :language="currentLanguage" />
    <Footer :language="currentLanguage" />
</template>

<style>
html {
  scroll-behavior: smooth;
}
body.dark {
    background-color: #1a202c; /* Color de fondo oscuro */
    color: #f7fafc; /* Color de texto claro */
}
</style>
