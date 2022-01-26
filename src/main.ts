import { createApp } from 'vue'
import App from './App.vue'

//@ts-ignore
import Toaster from '@meforma/vue-toaster';

createApp(App).use(Toaster).mount('#app')