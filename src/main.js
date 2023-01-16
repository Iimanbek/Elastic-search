import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Layout from '@/layout/Layout.vue'
import App from './App.vue'
import router from './router'
import { Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css' 
import './assets/main.css'
import "swiper/css/navigation";

const app = createApp(App)


app.component('swiper', Swiper)
app.component('swiper-slide', SwiperSlide)
app.use(createPinia())
app.use(router)
app.component('Layout', Layout)
app.mount('#app')
