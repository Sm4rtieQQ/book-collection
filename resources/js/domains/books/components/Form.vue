<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';

fetchAuthors();

const props = defineProps({ book: Object});

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);

</script>


<template>
    <form class="grid grid-cols-2 gap-2 max-w-[500px] p-2 bg-slate-50" @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <input class="bg-white" v-model="form.title" type="text" required />

        <label>Samenvatting:</label>
        <textarea class="min-h-64 bg-white" v-model="form.summary" required></textarea>

        <label>Author:</label>
        <select class="bg-white" v-model="form.author_id" required>
            <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                {{ author.name }}
            </option>
        </select>

        <div class="flex">
            <button class="cursor-pointer bg-slate-200 p-2" type="submit">Opslaan</button>
        </div>
    </form>
</template>