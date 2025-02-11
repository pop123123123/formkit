import { createApp } from 'vue'
import { plugin, defaultConfig, createInput } from '@formkit/vue'
import { de, fr } from '@formkit/i18n'
import { createRouter, createWebHashHistory } from 'vue-router'
import '@formkit/themes/genesis'
import './assets/styles/main.scss'
import App from './vue/App.vue'
import BasicForm from './vue/examples/BasicForm.vue'
import CustomInput from './vue/examples/custom-input/CustomInput.vue'
import CurrencyInput from './vue/examples/custom-input/CurrencyInput.vue'
import FileUpload from './vue/examples/FileUpload.vue'
import GroupInput from './vue/examples/Group.vue'
import TSXExample from './vue/examples/TSXExample.tsx'
import ModifySchema from './vue/examples/ModifySchema.vue'

const myInput = createInput(CurrencyInput)

// Create the Vue application:
const app = createApp(App)

// Configure FormKit:
const config = defaultConfig({
  locales: { de, fr },
  locale: 'en',
  inputs: { foo: myInput },
})

// Install FormKit:
app.use(plugin, config)

// Create a new router (to navigate the examples)
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: BasicForm,
    },
    {
      path: '/basic-form',
      component: BasicForm,
    },
    {
      path: '/custom-input',
      component: CustomInput,
    },
    {
      path: '/file-upload',
      component: FileUpload,
    },
    {
      path: '/group',
      component: GroupInput,
    },
    {
      path: '/tsx',
      component: TSXExample,
    },
    {
      path: '/plugin-schema',
      component: ModifySchema,
    },
  ],
})

// Install the router
app.use(router)

// Mount the Vue application
app.mount('#vue-app')
