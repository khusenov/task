<template>
    <Container>
        <div class="books">
            <h1 class="books-title">Books</h1>
            <div class="books-container">
                <CardBook
                    v-for="book in books"
                    :img="book.imgUrl"
                    :title="book.name"
                />
            </div>
            <Button
                :isLoading="loading"
                @click="loadMore"
                v-if="isMore && books.length"
                class="books-btn"
                >Load more</Button
            >
        </div>
    </Container>
</template>

<script>
import Nav from '@/components/Sections/Nav';
import store from '@/store';
import Container from '@/components/UI/Container/Container';
import CardBook from '@/components/UI/CardBook/CardBook';
import Button from '@/components/UI/Button/Button';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'Books',
    components: { Button, CardBook, Container, Nav },
    computed: {
        ...mapState({
            isMore: state => state.books.isMore,
            books: state => state.books.data,
            loading: state => state.books.loading,
        }),
    },
    methods: {
        ...mapActions({
            loadMore: dispatch => dispatch('books/loadMore'),
        }),
    },
    mounted() {
        store.dispatch('books/getInitialData');
    },
};
</script>

<style>
@import 'Books.css';
</style>
