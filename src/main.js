import Vue from "vue";
import App from "./App.vue";

import router from "./router/";
import firebase from "firebase";
import "./registerServiceWorker";

require("./assets/sass/main.scss");

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
};

console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");