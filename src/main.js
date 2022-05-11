import { createApp } from 'vue'
import Vue from 'vue';
import App from './App.vue'
import router from './router'
import axios from "axios";
import * as VueGoogleMaps from 'vue2-google-maps';

// Vue.use(VueGoogleMaps, {
//   load: {
//     key: process.env.VUE_APP_MY_API_KEY,
//     libraries: 'places' // necessary for places input
//   }
// });

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');

// var jwt = localStorage.getItem("jwt");
// if (jwt) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
// }

createApp(App).use(router).mount('#app')
