import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetails from '../views/Jobs/JobDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import ( /* webpackChunkName: "about" */
                '../views/About.vue')
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobsDetails',
        component: JobsDetails
    },
    // redirect
    {
        path: '/all_jobs',
        redirect: '/jobs'
    },
    // if route not exist
    {
        path: '/:catchAll(.*)',
        redirect: '/jobs'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
