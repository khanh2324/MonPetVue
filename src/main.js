import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./scss/GlobalStyle.scss";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/google.css";
import "tippy.js/themes/translucent.css";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTippy, { TippyComponent } from "vue-tippy";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faFacebook,
    faFacebookF,
    faLinkedin,
    faPinterest,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
    faUserSecret,
    faMagnifyingGlass,
    faChevronUp,
    faChevronDown,
    faBagShopping,
    faBasketShopping,
    faCartShopping,
    faBars,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
    faTwitter,
    faUserSecret,
    faMagnifyingGlass,
    faFacebook,
    faLinkedin,
    faPinterest,
    faChevronUp,
    faChevronDown,
    faBagShopping,
    faBasketShopping,
    faCartShopping,
    faFacebookF,
    faBars,
);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueTippy);
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component("tippy", TippyComponent);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
