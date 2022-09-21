import { createApp } from 'vue'
import App from './App.vue'
import baseCard from "./components/ui/baseCard.vue"
import baseButton from "./components/ui/baseButton.vue"
import baseDialog from "./components/ui/baseDialog.vue"

const app = createApp(App)

app.component('base-button',baseButton)
app.component('base-card',baseCard)
app.component('base-dialog',baseDialog)


app.mount('#app')
