import { ENDPOINT_BOOKS_PAGING } from '@/consts/API_ENDPOINTS';

export const books = {
    namespaced: true,
    state: {
        loading: false,
        initialLoading: false,
        error: null,
        data: [],
        page: 0,
        limit: 8,
        total: null,
        isMore: true,
    },
    mutations: {
        add(state, payload) {
            state.total = payload.total;
            state.data.push(...payload.data);
            console.log(state);
        },
        isMore(state) {
            state.isMore = state.limit * state.page < state.total;
        },
    },
    actions: {
        async getInitialData({ state, commit }) {
            if (state.page === 0) {
                state.initialLoading = true;
                try {
                    state.page++;
                    const res = await fetch(
                        ENDPOINT_BOOKS_PAGING(state.page, state.limit)
                    );
                    if (!res.ok) throw new Error('Error: ' + res.status);
                    const resData = await res.json();
                    commit('add', resData.data);
                    commit('isMore');
                } catch (err) {
                    state.error = err.message;
                    state.page--;
                }
                state.initialLoading = false;
            }
        },
        async loadMore({ state, commit }) {
            if (state.isMore) {
                state.loading = true;
                try {
                    state.page++;
                    const res = await fetch(
                        ENDPOINT_BOOKS_PAGING(state.page, state.limit)
                    );
                    if (!res.ok) throw new Error('Error: ' + res.status);
                    const resData = await res.json();
                    commit('add', resData.data);
                    commit('isMore');
                } catch (err) {
                    state.error = err.message;
                    state.page--;
                }
                state.loading = false;
            }
        },
    },
};
