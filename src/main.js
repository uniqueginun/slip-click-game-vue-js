import Vue from "vue";
import App from "./App.vue";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

Vue.use(Toasted, {
  theme: "bubble",
  position: "bottom-left",
  duration: 5000,
  iconPack: "fontawesome"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
