<script setup lang="ts">
import { fetchBooks, getAllBooks, deleteBook } from '../store';

fetchBooks();
</script>


<template>
    <table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Summary</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="book in getAllBooks" :key="book.id">
            <td>{{ book.title }}</td>
            <td>{{ book.summary }}</td>
            <td><RouterLink :to="{name: 'books.edit', params: { id: book.id }}">Bewerken</RouterLink></td>
            <td><button class="cursor-pointer" @click="deleteBook(book.id)">Verwijderen</button></td>
        </tr>
        </tbody>
    </table>
</template>