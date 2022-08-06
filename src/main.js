import { createApp } from 'vue';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import loader from '@googlemaps/js-api-loader';
// import * as VueGoogleMaps from 'vue2-google-maps';
// import Webpack from ''

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

// const loader = new Loader({ apiKey: AIzaSyC8FHHNjdqdpY9kzMeSzSKqRiiKEBa-Cyk })

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app');


// var jwt = localStorage.getItem("jwt");
// if (jwt) {
//   axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
// }

createApp(App).use(router).use(MaterialDashboard).mount('#app')
