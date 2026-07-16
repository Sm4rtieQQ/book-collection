<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);

</script>


<template>
    <form class="grid grid-cols-[120px_auto]" @submit.prevent="handleSubmit">
        <label class="font-semibold">Naam:</label>
        <input class="border w-64" v-model="form.name" type="text" required />

        <div class="flex">
            <button class="cursor-pointer border-2 p-2 font-bold" type="submit">Opslaan</button>
        </div>
    </form>
</template>