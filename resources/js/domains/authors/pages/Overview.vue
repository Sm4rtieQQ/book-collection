<script setup lang="ts">
import { getAuthorsSortedBy, deleteAuthor } from '../store';
import { getMessage } from '@/services/error';

const authors = getAuthorsSortedBy('name');
</script>


<template>
    <table>
        <thead>
            <tr>
                <th>Auteur</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th class="text-xs text-red-700">{{ getMessage }}</th>
            </tr>
            <tr v-for="author in authors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>
                    <RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }">Bewerken</RouterLink>
                </td>
                <td>
                    <button class="cursor-pointer" @click="deleteAuthor(author.id)">Verwijderen</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>