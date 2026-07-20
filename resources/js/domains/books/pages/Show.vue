<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBook } from '../store';
import { deleteReview, getBookReviews } from '@/domains/reviews/store';
import type { Review } from '@/types';
import Summary from '../components/Summary.vue';

const route = useRoute();

const bookId = Number(route.params.id);

let book = ref(getBook(bookId));
const reviews = ref<Review[]>([]);

onMounted(async () => {
    book = getBook(bookId);
    reviews.value = await getBookReviews(bookId);
});

const handleDeleteReview = async (reviewId: number) => {
    await deleteReview(reviewId);
    reviews.value = await getBookReviews(bookId);
}

</script>

<template>
    <Summary v-if="book" :book="book" />
    <div>
        <h3>Recensies</h3>
        <div v-if="reviews.length">
            <div v-for="review in reviews" :key="review.id">
                <div class="grid grid-cols-[auto_200px]">
                    <p class="mb-1">{{ review.text }}</p>
                    <div class="text-center">
                        <RouterLink :to="{ name: 'reviews.edit', params: { bookId: book.id, reviewId: review.id } }">
                            Bewerken</RouterLink> |
                        <button class="cursor-pointer" @click="handleDeleteReview(review.id)">Verwijderen</button>
                    </div>
                </div>
                <hr class="mb-4" />
            </div>
        </div>
        <div v-else>
            <p class="text-sm italic mb-4">Er zijn nog geen recensies voor dit boek.</p>
        </div>
    </div>

    <RouterLink :to="{ name: 'reviews.create', params: { bookId: bookId } }" class="border-2 font-bold p-2">Plaats een
        recensie</RouterLink>

</template>