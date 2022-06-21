import { createStore } from 'vuex';
import { user } from '@/store/user';
import { nav } from '@/store/nav';
import { books } from '@/store/books';
import { courses } from '@/store/courses';
import { courseDetails } from '@/store/courseDetails';

export default createStore({
    modules: {
        user,
        nav,
        books,
        courses,
        courseDetails,
    },
});
