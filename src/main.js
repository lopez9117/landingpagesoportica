import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Aboutus from './components/About-us.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Customers from './components/Customers.vue'
import Contact from './components/Contact.vue'
import Formwork from './components/Formwork.vue'
import Finishedprojects from './components/Finishedprojects.vue'
import Viewfacility from './components/Viewfacility.vue'
import Viewproyectmanagement from './components/Viewproyectmanagement.vue'
import Viewinterventory from './components/Viewinterventory.vue'
import Viewtechnicalsupervision from './components/Viewtechnicalsupervision.vue'
import Viewsustainabledesign from './components/Viewsustainabledesign.vue'
import Blog from './components/Blog.vue'
import Dash from './components/Dash.vue'
import Claims from './components/FormClaims.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/blog', component: Blog },
    { path: '/sustainable', component: Viewsustainabledesign },
    { path: '/technical', component: Viewtechnicalsupervision },
    { path: '/interventory', component: Viewinterventory },
    { path: '/management', component: Viewproyectmanagement },
    { path: '/facility', component: Viewfacility },
    { path: '/finishedprojects', component: Finishedprojects },
    { path: '/formwork', component: Formwork },
    { path: '/contact', component: Contact },
    { path: '/customers', component: Customers },
    { path: '/projects', component: Projects },
    { path: '/services', component: Services },
    { path: '/aboutus', component: Aboutus },
    { path: '/home', component: Home },
    { path: '/', component: Home },
    { path: '/dash', component: Dash },
    { path: '/claims', component: Claims }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.component('home', Home);
Vue.component('aboutus', Aboutus);
Vue.component('services', Services);
Vue.component('customers', Customers);
Vue.component('contact', Contact);
Vue.component('formwork', Formwork);
Vue.component('finishedprojects', Finishedprojects);
Vue.component('facility', Viewfacility);
Vue.component('management', Viewproyectmanagement);
Vue.component('interventory', Viewinterventory);
Vue.component('technical', Viewtechnicalsupervision);
Vue.component('sustainable', Viewsustainabledesign);
Vue.component('blog', Blog);
Vue.component('dash', Dash);
Vue.component('claims', Claims);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})


