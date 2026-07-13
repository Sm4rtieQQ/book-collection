<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getBook } from '../store';


const route = useRoute();

const bookId = Number(route.params.id);

const book = getBook(bookId);

console.log(book);

</script>

<template>
    <h2>{{ book.title }}</h2>
    <h3>{{ book.author }}</h3>
    <p>{{ book.summary }}</p>
</template>