<template>
    <Container>
        <div class="courses">
            <h1 class="courses-title">Courses</h1>
            <div class="courses-container">
                <CardCourse
                    v-for="course in courses"
                    :key="course._id"
                    :img="course['imgUrl']"
                    :title="course['name']"
                    :text="course['description']"
                    :id='course._id'
                />
            </div>
            <Button
                v-if="isMore && courses.length"
                :isLoading="loading"
                class="courses-btn"
                @click="loadMore"
            >
                Load more
            </Button>
        </div>
    </Container>
</template>

<script>
import Nav from '@/components/Sections/Nav';
import Container from '@/components/UI/Container/Container';
import Button from '@/components/UI/Button/Button';
import { mapActions, mapState } from 'vuex';
import CardCourse from '@/components/UI/CardCourse/CardCourse';
export default {
    name: 'Courses',
    computed: {
        ...mapState({
            isMore: state => state.courses.isMore,
            loading: state => state.courses.loading,
            courses: state => state.courses.data,
        }),
    },
    methods: {
        ...mapActions({
            initialLoad: dispatch => dispatch('courses/getInitialData'),
            loadMore: dispatch => dispatch('courses/loadMore'),
        }),
    },
    mounted() {
        this.initialLoad();
    },
    components: { CardCourse, Button, Container, Nav },
};
</script>

<style>
@import 'Courses.css';
</style>
