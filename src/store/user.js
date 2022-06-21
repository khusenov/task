import {
    ENDPOINT_USER_SIGNIN,
    ENDPOINT_USER_SIGNUP,
} from '@/consts/API_ENDPOINTS';

export const user = {
    namespaced: true,
    state: {
        loading: false,
        error: null,
        fullName: localStorage.getItem('userName'),
        password: '',
        id: localStorage.getItem('userId'),
        token: localStorage.getItem('userToken'),
    },
    mutations: {
        initUser(state, payload) {
            localStorage.setItem('userToken', JSON.stringify(payload.token));
            localStorage.setItem('userName', JSON.stringify(payload.fullName));
            localStorage.setItem('userId', JSON.stringify(payload._id));
            state.fullName = payload.user.fullName;
            state.password = payload.password;
            state.token = payload.token;
            state.id = payload.user._id;
        },
    },
    actions: {
        async signUp({ state, commit }, payload) {
            state.loading = true;
            try {
                const res = await fetch(ENDPOINT_USER_SIGNUP, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const resData = await res.json();
                commit('initUser', resData.data);
            } catch (err) {
                state.error = `Error: ${err.message}`;
            }
            state.loading = false;
        },
        async signIn({ state, commit }, payload) {
            state.loading = true;
            try {
                const res = await fetch(ENDPOINT_USER_SIGNIN, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                if (!res.ok) {
                    throw new Error(res.status);
                }
                const resData = await res.json();
                commit('initUser', resData.data);
            } catch (err) {
                state.error = `Error: ${err.message}`;
            }
            state.loading = false;
        },
    },
};
