<template>
    <nav class="nav">
        <Container>
            <div class="nav-body">
                <RouterLink class="nav-logo" to="/">Logo</RouterLink>
                <ul ref="menu" class="nav-menu">
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
                </ul>
                <Avatar class="nav-avatar" v-if="token" />
                <Burger
                    class="nav-burger"
                    :style="{ marginLeft: token ? 'var(--gap-sm)' : 'auto' }"
                    @click='() => isMenuOpen ? closeMenu() : openMenu()'
                />
            </div>
        </Container>
    </nav>
</template>

<script>
import Container from '@/components/UI/Container/Container';
import { mapState } from 'vuex';
import Button from '@/components/UI/Button/Button';
import Avatar from '@/components/UI/Avatar/Avatar';
import Burger from '@/components/UI/Burger/Burger';
export default {
    name: 'Nav',
    computed: {
        ...mapState({
            menu: state => state.nav.menu,
            token: state => state.user.token,
        }),
    },
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        openMenu() {
            console.log('open');
            this.isMenuOpen = true;
            this.$refs.menu.style.height = this.$refs.menu.scrollHeight + 'px'
        },
        closeMenu() {
            console.log('close');
            this.isMenuOpen = false;
            this.$refs.menu.removeAttribute('style');
        },
    },
    mounted() {
        console.log(this.$refs.menu);
        window.addEventListener('resize', () => this.closeMenu());
    },
    components: { Burger, Avatar, Button, Container },
};
</script>

<style>
@import 'Nav.css';
</style>