<template>
    <nav class="nav">
        <Container>
            <div class="nav-body">
                <RouterLink class="nav-logo" to="/">Logo</RouterLink>
                <ul class="nav-menu">
                    <li class="nav-menu-item" v-for="item in menu">
                        <RouterLink class="nav-menu-link" :to="item.route">
                            {{ item.name }}
                        </RouterLink>
                    </li>
                    <li v-if="!token" class="nav-menu-item">
                        <RouterLink
                            class="nav-menu-link"
                            :to="{ name: 'login', params: { type: 'signIn' } }"
                        >
                            Sign in
                        </RouterLink>
                    </li>
                    <li v-if="!token" class="nav-menu-item">
                        <Button
                            :to="{
                                name: 'login',
                                params: { type: 'signUp' },
                            }"
                            variant="sm"
                            >Sign Up</Button
                        >
                    </li>
                    <Avatar v-if="token" />
                </ul>
            </div>
        </Container>
    </nav>
</template>

<script>
import Container from '@/components/UI/Container/Container';
import { mapState } from 'vuex';
import Button from '@/components/UI/Button/Button';
import Avatar from '@/components/UI/Avatar/Avatar';
export default {
    name: 'Nav',
    computed: {
        ...mapState({
            menu: state => state.nav.menu,
            token: state => state.user.token,
        }),
    },
    components: { Avatar, Button, Container },
};
</script>

<style>
@import 'Nav.css';
</style>
