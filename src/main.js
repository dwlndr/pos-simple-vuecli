import { createApp } from 'vue'
import App from './App.vue'
import Content from './Content.vue'

const app = createApp(App);

app.component("Content", Content)

app.mount("#app")
