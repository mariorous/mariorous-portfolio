import { createApp } from 'vue'
import './assets/styles/style.css'
import 'preline'
import i18n from './plugins/i18n'
import App from './App.vue'

const app = createApp(App);
app.use(i18n);
app.mount('#app');
