import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);

console.log(process.env);

const store = new Vuex.Store({
  state: {
    baseApiUrl: process.env.VUE_APP_API_URL,
    gymData: {
      GLA: {
        name: "The Newsroom",
        location: "Glasgow",
        open: 7,
        close: 22
      },
      PST: {
        name: "The Prop Store",
        location: "Glasgow",
        open: 12,
        close: 22
      },
      BRI: {
        name: "The Mothership",
        location: "Bristol",
        open: 7,
        close: 22
      },
      UNC: {
        name: "The Church",
        location: "Bristol",
        open: 12,
        close: 22
      }
    }
  }
});

new Vue({
  render: h => h(App),
  store: store
}).$mount("#app");