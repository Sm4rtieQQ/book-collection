<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getBook } from '../store';
import { deleteReview, getBookReviews } from '@/domains/reviews/store';
import type { Review } from '@/types';
import Summary from '../components/Summary.vue';

const route = useRoute();

const bookId = Number(route.params.id);

const book = getBook(bookId);
const reviews = ref<Review[]>([]);

onMounted(async () => {
    reviews.value = await getBookReviews(bookId);
});

</script>

<template>
    <Summary :book="book" />
    <div>
        <h3>Recensies</h3>
        <div v-if="reviews.length">
            <div v-for="review in reviews" :key="review.id">
                <div class="grid grid-cols-[auto_200px]">
                    <p class="mb-1">{{ review.text }}</p>
                    <div class="text-center">
                        <RouterLink :to="{ name: 'reviews.edit', params: { bookId: book.id, reviewId: review.id } }">
                            Bewerken</RouterLink> |
                        <a class="cursor-pointer" @click="deleteReview(review.id)">Verwijderen</a>
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