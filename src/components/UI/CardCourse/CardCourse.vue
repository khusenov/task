<template>
    <div class="cardCourse">
        <div class="cardCourse-img">
            <img :src="img" alt="title" />
        </div>
        <h6 class="cardCourse-title">{{ title }}</h6>
        <p class="cardCourse-text">{{ text }}</p>
        <Button
            :to="{ name: 'courseDetails', params: { id: id } }"
            class="cardCourse-btn"
        >
            Learn more
        </Button>
    </div>
</template>

<script>
import Button from '@/components/UI/Button/Button';
export default {
    name: 'CardCourse',
    components: { Button },
    props: ['img', 'title', 'text', 'id'],
};
</script>

<style>
@import 'CardCourse.css';
</style>
