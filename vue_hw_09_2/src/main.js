import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/scss/bootstrap.scss'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false;

//아래는 사용자가 바로 마이페이지로 접근 시 유저체크를 통하도록 함
router.beforeEach((to, from, next) => {
  if (to.path === '/user/mypage') {
    // 이전 페이지로의 이동을 막음
    if (from.path !== '/user/usercheck') {
      next(false);
      return;
    }
  }
  next(); // 다음 단계로 진행
});


new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
