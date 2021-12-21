import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Login from '../views/Login'
import Create from '../views/Create'
import {computed} from 'vue'
import store from '../store'
import {firestore} from '../firebase/config'

import {auth} from "../firebase/config";

function guardRoute(to, from, next) {
    auth.onAuthStateChanged(user => {
        if (user) {
            next();
        } else {
            next({name: 'Login'})
        }
    })
}

function guardRoute_(to, from, next) {
    auth.onAuthStateChanged(user => {
        if (user) {
            next({name: 'Home'})
        } else {
            next();
        }
    })
}


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: guardRoute

    },
    {
        path: '/login',
        name: "Login",
        component: Login
    },
    {
        path: '/add',
        name: "Create",
        component: Create,
        beforeEnter: guardRoute
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import ( /* webpackChunkName: "about" */
                '../views/About.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
