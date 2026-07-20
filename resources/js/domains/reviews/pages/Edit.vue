<script setup lang="ts">
import Summary from '@/domains/books/components/Summary.vue';
import Form from '../components/Form.vue';
import { useRoute, useRouter } from 'vue-router';
import { getBook } from '@/domains/books/store.js';
import { getReviewById, updateReview } from '../store';
import { Review } from '@/types.js';

const route = useRoute();
const router = useRouter();

const bookId = Number(route.params.bookId);
const reviewId = Number(route.params.reviewId);

const book = getBook(bookId);
const review = getReviewById(reviewId);

const handleSubmit = async (data: Review) => {
    await updateReview(reviewId, data);
    router.push({ name: 'books.show', params: { id: bookId } });
}

</script>

<template>
    <Summary :book="book" />

    <div>
        <h2>Recensie bewerken</h2>
        <Form :review="review" @submit="handleSubmit" />
    </div>
</template>
