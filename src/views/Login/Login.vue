<template>
    <Container>
        <div class="login">
            <form class="login-form" ref="form" @submit.prevent="submitForm">
                <h4 class="login-form-title">
                    {{
                        $route.params.type !== 'signIn' ? 'Sign Up' : 'Sign In'
                    }}
                </h4>
                <Input
                    class="login-form-input"
                    label="Full name"
                    placeholder="John Doe"
                    name="fullName"
                    type="text"
                    :error="error"
                />
                <Input
                    class="login-form-input"
                    label="Password"
                    placeholder="At least 8 characters"
                    name="password"
                    type="password"
                    :error="error"
                />
                <RouterLink
                    v-if="$route.params.type === 'signIn'"
                    :to="{ name: 'login', params: { type: 'signUp' } }"
                >
                    <p class="login-form-link lg">Don't have an account?</p>
                </RouterLink>
                <RouterLink
                    v-else-if="$route.params.type === 'signUp'"
                    :to="{ name: 'login', params: { type: 'signIn' } }"
                >
                    <p class="login-form-link lg">Already have an account?</p>
                </RouterLink>
                <Button
                    :isLoading="loading"
                    class="login-form-btn"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    </Container>
</template>

<script>
import store from '@/store';
import router from '@/router';
import Container from '@/components/UI/Container/Container';
import Input from '@/components/UI/Input/Input';
import Button from '@/components/UI/Button/Button';
import { mapState } from 'vuex';

export default {
    name: 'Login',
    components: { Button, Input, Container },
    data() {
        return {
            passCheckErr: null,
        };
    },
    computed: {
        ...mapState({
            loading: state => state.user.loading,
            error: state => state.user.error,
        }),
    },
    methods: {
        goToHome() {
            if (store.state.user.token) {
                this.$router.push('/');
            }
        },
        submitForm() {
            const form = this.$refs.form;
            const data = {
                fullName: form.fullName.value,
                password: form.password.value,
            };
            if (this.$route.params.type === 'signIn') {
                store.dispatch('user/signIn', data).then(() => this.goToHome());
                return;
            }
            store.dispatch('user/signUp', data).then(() => this.goToHome());
            form.reset();
        },
    },
    mounted() {
        if (store.state.user.token) this.goToHome()
    },
};
</script>

<style>
@import './Login.css';
</style>