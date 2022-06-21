<template>
    <Nav />
    <router-view />
</template>

<style>
@import 'assets/style/index.css';
</style>
<script>
import Nav from '@/components/Sections/Nav';
export default {
    components: { Nav },
};
</script>
