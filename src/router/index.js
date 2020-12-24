import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from './Course/Course'
import Location from './Location/Location'
Vue.use(VueRouter)

const routes = [
  Course,
  Location
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
