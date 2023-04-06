import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-dark-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import Badge from 'primevue/badge';
import Card from 'primevue/card';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Galleria from 'primevue/galleria';

import App from './App.vue'
import router from './router'

export const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ToastPlugin);
app.use(PrimeVue)

app.component('MenuBar', Menubar);
app.component('InputText', InputText);
app.component('FileUpload', FileUpload);
app.component('Button', Button);
app.component('Badge', Badge);
app.component('ProgressBar', ProgressBar);
app.component('Card', Card);
app.component('Carousel', Carousel);
app.component('Checkbox', Checkbox)
app.component('Galleria', Galleria);

app.mount('#app')
