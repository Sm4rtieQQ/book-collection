<script setup lang="ts">
import Form from '../components/Form.vue';
import { addReview } from '../store';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import type { Review } from 'types';
import Summary from '@/domains/books/components/Summary.vue';
import { getBook } from '@/domains/books/store.js';

const route = useRoute();
const router = useRouter();

const bookId = Number(route.params.bookId);

const book = getBook(bookId);

const review = ref({
    text: '',
    book_id: bookId,
});

const handleSubmit = async (data: Review) => {
    await addReview(data);
    router.push({ name: 'books.show', params: { id: bookId } });
}

</script>

<template>
    <Summary :book="book" />

    <div>
        <h2>Nieuwe recensie</h2>
        <Form :review="review" @submit="handleSubmit" />
    </div>
</template>