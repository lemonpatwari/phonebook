

// require('./bootstrap');

window.Vue = require('vue');
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const app = new Vue({
    el: '#app',
    components : {
        'navbar' : Navbar,
        'my-footer' : Footer
    }
});
