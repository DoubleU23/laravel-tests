
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap'

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import AppContainer from './components/AppContainer.vue'
Vue.component('app-container', AppContainer);

import ExampleComponent from './components/ExampleComponent.vue'
Vue.component('example-component', ExampleComponent);


const app = new Vue({
    el: '#app'
    // components: {
    //     'app-container':        AppContainer,
    //     'example-component':    ExampleComponent
    // }
})