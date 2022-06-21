<template>
    <div class="cardBook">
        <div class="cardBook-img">
            <img :src='img' :alt='title'>
        </div>
        <h6 class="cardBook-title">{{title}}</h6>
    </div>
</template>

<script>
export default {
    name: 'CardBook',
    props: ['img', 'title'],
};
</script>

<style>
@import 'CardBook.css';
</style>
