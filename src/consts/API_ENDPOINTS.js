export const ENDPOINT_MAIN = 'https://coursesnodejs.herokuapp.com';

export const ENDPOINT_USER = 'https://coursesnodejs.herokuapp.com/user';

export const ENDPOINT_USER_SIGNUP =
    'https://coursesnodejs.herokuapp.com/user/sign-up';

export const ENDPOINT_USER_SIGNIN =
    'https://coursesnodejs.herokuapp.com/user/sign-in';

export const ENDPOINT_BOOKS_PAGING = (page, limit) =>
    `https://coursesnodejs.herokuapp.com/user/book?page=${page}&limit=${limit}`;

export const ENDPOINT_COURSES_PAGING = (page, limit) =>
    `https://coursesnodejs.herokuapp.com/user/course?limit=${limit}&page=${page}`;

export const ENDPOINT_COURSEDETAILS_BYID = id =>
    `https://coursesnodejs.herokuapp.com/user/course/${id}`;

export const ENDPOINT_COURSE_BUY =
    'https://coursesnodejs.herokuapp.com/user/coursesUser';
