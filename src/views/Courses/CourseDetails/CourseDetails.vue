<template>
    <Container>
        <div class="courseDetails">
            <h1 v-if="loading">Loading...</h1>
            <div v-if="course && !loading" class="courseDetails-data">
                <h1 class="courseDetails-data-title">{{ course.name }}</h1>
                <p class="courseDetails-data-text">{{ course.description }}</p>
                <Button
                    :isLoading="loadingBuy"
                    @click="buy"
                    class="courseDetails-data-btn"
                >
                    Buy
                </Button>
            </div>
        </div>
    </Container>
</template>

<script>
import Container from '@/components/UI/Container/Container';
import store from '@/store';
import { mapActions, mapState } from 'vuex';
import Button from '@/components/UI/Button/Button';
export default {
    name: 'CourseDetails',
    components: { Button, Container },
    computed: {
        ...mapState({
            course: state => state.courseDetails.data,
            loading: state => state.courseDetails.loading,
            error: state => state.courseDetails.error,
            loadingBuy: state => state.courseDetails.loadingBuy,
        }),
    },
    methods: {
        ...mapActions({
            buy: dispatch => dispatch('courseDetails/buy'),
        }),
    },
    mounted() {
        store.dispatch('courseDetails/getData', this.$route.params.id);
    },
};
</script>

<style>
@import 'CourseDetails.css';
</style>
