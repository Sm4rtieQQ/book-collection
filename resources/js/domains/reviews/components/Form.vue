<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({ review: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.review });

const handleSubmit = () => emit('submit', form.value);

</script>


<template>
    <form class="grid" @submit.prevent="handleSubmit">
        <textarea class="border w-64 min-h-32" v-model="form.text" required></textarea>
        <button class="cursor-pointer border-2 p-2 font-bold" type="submit">Opslaan</button>
    </form>
</template>