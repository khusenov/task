<template>
    <div class="cardBook">
        <div class="cardBook-img">
            <img :src="baseUrl + img" :alt="title" />
        </div>
        <h6 class="cardBook-title">{{ title }}</h6>
    </div>
</template>

<script>

import { ENDPOINT_MAIN } from '@/consts/API_ENDPOINTS';

export default {
    name: 'CardBook',
    computed: {
        baseUrl: () => ENDPOINT_MAIN
    },
    props: ['img', 'title'],
};
</script>

<style>
@import 'CardBook.css';
</style>
