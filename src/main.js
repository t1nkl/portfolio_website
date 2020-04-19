import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixins from "./mixins";
import { VLazyImagePlugin } from "v-lazy-image";
import VueTyperPlugin from "vue-typer";
import Chance from "chance";

Vue.use(VLazyImagePlugin);
Vue.use(VueTyperPlugin);
Vue.set(Vue.prototype, "chance", Chance);
Vue.mixin(mixins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
