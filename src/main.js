import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import store from './store'
import router from './router'

createApp(App).use(router).use(store).use( CKEditor ).mount('#app')
