import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

// import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
let router = new VueRouter(
    {
        linkActiveClass: 'active'
    }
);
router.map({
    '/goods': {
        component: goods
    },
    '/ratings': {
        component: ratings
    },
    '/seller': {
        component: seller
    }
});
// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app');
router.go('/goods');
