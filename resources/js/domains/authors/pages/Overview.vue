<script setup lang="ts">
import { fetchAuthors, getAllAuthors } from '../store';

fetchAuthors();
</script>


<template>
    <table>
        <thead>
        <tr>
            <th>Author</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="author in getAllAuthors" :key="author.id">
            <td>{{ author.name }}</td>
            <td><RouterLink :to="{name: 'authors.edit', params: {id: author.id}}">Bewerken</RouterLink></td>
        </tr>
        </tbody>
    </table>
</template>