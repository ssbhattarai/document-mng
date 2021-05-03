// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

require('./bootstrap');

// window.Vue = require('vue');

// import NProgress from 'nprogress'
// import { Inertia } from '@inertiajs/inertia'
// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./Pages/ExampleComponent.vue').default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// //  import { App, plugin } from '@inertiajs/inertia-vue'
// //  import Vue from 'vue'

// //  Vue.use(plugin)
// //  import { InertiaProgress } from '@inertiajs/progress'

// // InertiaProgress.init()

// //  const el = document.getElementById('app')
// //  const pages = {
// //     'Users/Index': require('./Pages/Users/Index.vue').default,
// //     'Dashboard/Index': require('./Pages/Dashboard/index.vue').default,
// //   }
// //  new Vue({
// //    render: h => h(App, {
// //      props: {
// //        initialPage: JSON.parse(el.dataset.page),
// //     //    resolveComponent: name => require(`./Pages/${name}`).default,
// //     resolveComponent: name => pages[name],
// //      },
// //    }),
// //  }).$mount(el)


// import { App, plugin } from '@inertiajs/inertia-vue'
// import Vue from 'vue'



// Vue.use(plugin)

// const el = document.getElementById('app')

// new Vue({
//   render: h => h(App, {
//     props: {
//       initialPage: JSON.parse(el.dataset.page),
//       resolveComponent: name => require(`./Pages/${name}`).default,
//     },
//   }),
// }).$mount(el)



// // import route from 'ziggy';

// // Global function define as $auth. We can access $auth in any component
// // Vue.prototype.$auth = this.$page.props.auth.user

// import route from 'ziggy';
// import { Ziggy } from './ziggy';


// Vue.mixin({
//     methods: {
//         route: (name, params, absolute) => route(name, params, absolute, Ziggy),
//     },
// });


import Vue from 'vue'
import VueMeta from 'vue-meta'
// import PortalVue from 'portal-vue'
import { App, plugin } from '@inertiajs/inertia-vue'
import { InertiaProgress } from '@inertiajs/progress/src'
import nprogress from 'nprogress';

Vue.config.productionTip = false
Vue.mixin({ methods: { route: window.route } })
Vue.use(plugin)
// Vue.use(PortalVue)
Vue.use(VueMeta)

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 500,
  
    // The color of the progress bar.
    color: '#29d',
  
    // Whether to include the default NProgress styles.
    includeCSS: true,
  
    // Whether the NProgress spinner will be shown.
    showSpinner: true,
})

const el = document.getElementById('app')

new Vue({
  metaInfo: {
    titleTemplate: title => (title ? `${title} - Document Management` : 'Document Management'),
  },
  render: h =>
    h(App, {
      props: {
        initialPage: JSON.parse(el.dataset.page),
        resolveComponent: name => require(`./Pages/${name}`).default,
      },
    }),
}).$mount(el)