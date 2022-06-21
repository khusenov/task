<template>
    <div class="avatar">
        <div class="avatar-img">{{ letter }}</div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: 'Avatar',
    computed: {
        letter: () =>
            store.state.user.fullName ? store.state.user.fullName[0] : '',
    },
};
</script>

<style>
@import 'Avatar.css';
</style>
