import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Contact from '@/views/Contact'
import About from '@/views/About'
import TrackDetail from '@/views/TrackDetail'

Vue.use(VueRouter)

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/contact', component: Contact, name: 'contact' },
    { path: '/about', component: About, name: 'about' },
    { path: '/track/:id', component: TrackDetail, name: 'track' }
  ]
})
