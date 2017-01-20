import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import main from '../view/main.vue'

import project from '../view/project.vue'

import apiList from '../view/api-list.vue'

import apiAdd from '../view/api-add.vue'

import appBase from '../view/app-base.vue'

import about from '../view/about.vue'

var router = new VueRouter({
  routes: [
    {name: 'index', path: '/', component: main},
    {name: 'project-list', path: '/projectList/', component: project},
    {name: 'api-list', path: '/api/:id?', component: apiList},
    {name: 'app-base', path: '/app/base', component: appBase},
    {name: 'api-add', path: '/apiAdd/:id?', component: apiAdd},
    {name: 'about', path: '/about', component: about}
  ]
})

export default router
