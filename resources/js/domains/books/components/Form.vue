<script setup lang="ts">
import { ref } from 'vue';
import { authors } from '@/domains/authors/store';
import FormError from '@/services/error/FormError.vue';
import ErrorMessage from '@/services/error/ErrorMessage.vue';

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => emit('submit', form.value);

</script>


<template>

    <ErrorMessage />

    <form class="grid grid-cols-[200px_auto] gap-2 p-2 bg-slate-50" @submit.prevent="handleSubmit">
        <label>Titel:</label>
        <div>
            <input class="bg-white" v-model="form.title" type="text" required />
            <FormError name="title" />
        </div>

        <label>Samenvatting:</label>
        <div>
            <textarea class="min-h-64 bg-white" v-model="form.summary" required></textarea>
            <FormError name="summary" />
        </div>

        <label>Auteur:</label>
        <div>
            <select class="bg-white" v-model="form.author_id" required>
                <option v-for="author in authors" :key="author.id" :value="author.id">
                    {{ author.name }}
                </option>
            </select>
            <FormError name="author" />
        </div>

        <div class="flex">
            <button class="cursor-pointer bg-slate-200 p-2" type="submit">Opslaan</button>
        </div>
    </form>
</template>