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

    <form class="grid grid-cols-[120px_auto] gap-2" @submit.prevent="handleSubmit">
        <label class="font-semibold">Titel:</label>
        <div>
            <input class="border w-64" v-model="form.title" type="text" required />
            <FormError name="title" />
        </div>

        <label class="font-semibold">Samenvatting:</label>
        <div>
            <textarea class="border w-64 min-h-64 " v-model="form.summary" required></textarea>
            <FormError name="summary" />
        </div>

        <label class="font-semibold">Auteur:</label>
        <div>
            <select class="border w-64" v-model="form.author_id" required>
                <option v-for="author in authors" :key="author.id" :value="author.id">
                    {{ author.name }}
                </option>
            </select>
            <FormError name="author" />
        </div>

        <div class="flex">
            <button class="border-2 font-bold cursor-pointer p-2" type="submit">Opslaan</button>
        </div>
    </form>
</template>