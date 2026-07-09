<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);

</script>


<template>
    <form class="grid grid-cols-2 gap-2 max-w-[500px] p-2 bg-slate-50" @submit.prevent="handleSubmit">
        <label>Naam:</label>
        <input class="bg-white" v-model="form.name" type="text" required />

        <div class="flex">
            <button class="cursor-pointer bg-slate-200 p-2" type="submit">Opslaan</button>
        </div>
    </form>
</template>