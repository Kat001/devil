import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/Signup.vue'
// import Profile from '../views/Profile.vue'

// import store from '../store/store.js'






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: (to,from,next) => {

                let token = localStorage.getItem('token');
                console.log(token,typeof(token))
                if(token == "null") {
                    next("/login");
                } else {
                  next();
                }
              },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
