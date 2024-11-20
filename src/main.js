import { createApp } from 'vue'
import './index.css'
import 'vue3-emoji-picker/css'

import { createPinia } from 'pinia'

//Ícones
import {OhVueIcon, addIcons} from 'oh-vue-icons'
import { CoHamburgerMenu } from "oh-vue-icons/icons"
import { CoMagnifyingGlass } from "oh-vue-icons/icons"
import { ViFileTypeImage } from "oh-vue-icons/icons";
import { FcAddImage } from "oh-vue-icons/icons";
import { IoExitOutline } from "oh-vue-icons/icons";


import App from './App.vue'
import perfil from './components/profile/perfil.vue'
import profileData from './components/profile/profileData.vue'
import topBar from './components/topBar.vue'
import Mural from './components/mural/Mural.vue'
import postTexto from './components/mural/postMuralTexto.vue'
import postMural from './components/mural/postMural.vue'
import header from './components/layout/header.vue';
import footer from './components/layout/footer.vue';
import router from './routes'

const app = createApp(App);

addIcons(CoHamburgerMenu, CoMagnifyingGlass, ViFileTypeImage, FcAddImage, IoExitOutline);

app.component('v-icon', OhVueIcon);
app.component('perfil', perfil)
app.component('profile-data', profileData)
app.component('topbar', topBar)
app.component('mural', Mural)
app.component('post-texto', postTexto)
app.component('post-mural', postMural)
app.component('the-header', header);
app.component('the-footer', footer);

app.use(createPinia())

app.use(router);

app.mount('#app');
