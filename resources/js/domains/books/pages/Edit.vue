<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import type { Book } from 'types';

fetchBooks();

const route = useRoute();
const router = useRouter();

const bookId = Number(route.params.id);

const book = getBookById(bookId);
const handleSubmit = async(data: Book) => {
    await updateBook(bookId, data);
    router.push({ name: 'books.overview' });
}

</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>