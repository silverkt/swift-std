// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Ennmenu from './Ennmenu';
import Ennfooter from './Footer';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios';

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.component('enn-navi-menu', {
	template: '<Ennmenu/>',
	components: { Ennmenu }
});

Vue.component('enn-footer', {
	template: '<Ennfooter/>',
	components: { Ennfooter }
});

new Vue({
	el: '#navi',
	router,
	template: '<enn-navi-menu/>'
});

new Vue({
    el: '#footer',
    router,
    template: '<enn-footer/>'
})

window.$ennNaviMenu = Ennmenu; 
window.$ennFooter = Ennfooter; 