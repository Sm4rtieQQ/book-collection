<script setup lang="ts">
import Form from '../components/Form.vue';
import { addBook } from '../store';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const book = ref({
    title: '',
    summary: '',
    author_id: null,
});

const handleSubmit = async (data: any) => {
    await addBook(data);
    router.push({name: 'books.overview'});
}

</script>

<template>
    <div>
        <h2>Nieuw boek toevoegen</h2>
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>