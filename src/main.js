import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGoogleMaps from '@fawmi/vue-google-maps'

createApp(App)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDHesS0QhZsURFZsAb9nZ96C9jYSqSE8As',
    },
  })
  .mount("#app");
