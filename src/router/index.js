import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/Login/Login';
import Books from '@/views/Books/Books';
import Courses from '@/views/Courses/Courses';
import CourseDetails from '@/views/Courses/CourseDetails/CourseDetails';
import store from '@/store';

const routes = [
    {
        path: '/',
        name: 'books',
        component: Books,
    },
    {
        path: '/login/:type',
        name: 'login',
        component: Login,
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses,
    },
    {
        path: '/courses/:id',
        name: 'courseDetails',
        component: CourseDetails,
        beforeEnter(to, from, next) {
            if (store.state.user.token) next();
            else next({ name: 'login', params: { type: 'signIn' } });
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
