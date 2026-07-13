<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getBook, updateBook } from '../store';
import Form from '../components/Form.vue';
import type { Book } from 'types';

const route = useRoute();
const router = useRouter();

const bookId = Number(route.params.id);

const book = getBook(bookId);

const handleSubmit = async (data: Book) => {
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