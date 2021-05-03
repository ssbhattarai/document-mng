/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import NProgress from 'nprogress'
import { Inertia } from '@inertiajs/inertia'
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./Pages/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//  import { App, plugin } from '@inertiajs/inertia-vue'
//  import Vue from 'vue'

//  Vue.use(plugin)
//  import { InertiaProgress } from '@inertiajs/progress'

// InertiaProgress.init()

//  const el = document.getElementById('app')
//  const pages = {
//     'Users/Index': require('./Pages/Users/Index.vue').default,
//     'Dashboard/Index': require('./Pages/Dashboard/index.vue').default,
//   }
//  new Vue({
//    render: h => h(App, {
//      props: {
//        initialPage: JSON.parse(el.dataset.page),
//     //    resolveComponent: name => require(`./Pages/${name}`).default,
//     resolveComponent: name => pages[name],
//      },
//    }),
//  }).$mount(el)


import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'



Vue.use(plugin)

const el = document.getElementById('app')

new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./Pages/${name}`).default,
    },
  }),
}).$mount(el)
