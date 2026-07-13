<script setup lang="ts">
import ErrorMessage from '@/services/error/ErrorMessage.vue';
import { books, deleteBook } from '../store';

</script>


<template>
    <ErrorMessage />

    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>
                    <RouterLink :to="{ name: 'books.show', params: { id: book.id } }">{{ book.title }}</RouterLink>
                </td>
                <td>{{ book.summary }}</td>
                <td>
                    <RouterLink :to="{ name: 'books.edit', params: { id: book.id } }">Bewerken</RouterLink>
                </td>
                <td>
                    <button class="cursor-pointer" @click="deleteBook(book.id)">Verwijderen</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>