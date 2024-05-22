import { createApp } from 'vue'
import './assets/style.css'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';

const app = createApp(App)
app.use(Toast);
app.mount('#app');
