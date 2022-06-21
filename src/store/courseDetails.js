import {
    ENDPOINT_COURSE_BUY,
    ENDPOINT_COURSEDETAILS_BYID,
} from '@/consts/API_ENDPOINTS';

export const courseDetails = {
    namespaced: true,
    state: {
        loading: false,
        error: null,
        data: null,

        loadingBuy: false,
        errorBuy: null,
    },
    mutations: {
        initData(state, payload) {
            state.data = payload.data;
        },
    },
    actions: {
        async getData({ state, commit }, payload) {
            state.loading = true;
            try {
                const res = await fetch(ENDPOINT_COURSEDETAILS_BYID(payload));
                if (!res.ok) throw new Error(res.message);
                const data = await res.json();
                commit('initData', data);
            } catch (err) {
                state.error = err.message;
            }
            state.loading = false;
        },
        async buy({ state, rootState }) {
            state.loadingBuy = true;
            console.log(rootState.user.token);
            console.log(state.data._id);
            try {
                const res = await fetch(ENDPOINT_COURSE_BUY, {
                    headers: {
                        token: rootState.user.token,
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                    body: JSON.stringify({ courseId: state.data._id }),
                });
                if (!res.ok) throw new Error(res.message);
                const data = await res.json();
                console.log(data);
            } catch (err) {
                state.errorBuy = err.message;
            }
            state.loadingBuy = false;
        },
    },
};
