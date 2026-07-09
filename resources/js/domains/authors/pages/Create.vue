<script setup lang="ts">
import Form from '../components/Form.vue';
import { createAuthor } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { Author } from 'types';

const router = useRouter();

const author = ref({
    name: '',
});

const handleSubmit = async (data: Author) => {
    await createAuthor(data);
    router.push({name: 'authors.overview'});
}

</script>

<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>