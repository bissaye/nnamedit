import { createApp } from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import store from './store'

createApp(App).use(store).use( CKEditor ).mount('#app')
