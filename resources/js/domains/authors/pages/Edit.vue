<script setup lang="ts">
import Form from '../components/Form.vue';
import { fetchAuthors, getAuthorById, updateAuthor } from '../store';
import { useRoute, useRouter } from 'vue-router';
import type { Author } from 'types';

fetchAuthors();

const route = useRoute();
const router = useRouter();

const authorId = Number(route.params.id);

const author = getAuthorById(authorId);
const handleSubmit = async(data: Author) => {
    await updateAuthor(authorId, data);
    router.push({ name: 'authors.overview' });
}

</script>

<template>
    <div>
        <h2>Boek bewerken</h2>
        <Form v-if="author" :author="author" @submit="handleSubmit" />
    </div>
</template>