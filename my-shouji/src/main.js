import Vue from 'vue';
import ElementUI from 'element-ui';
import  "../node_modules/element-ui/lib/theme-chalk/index.css";
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
