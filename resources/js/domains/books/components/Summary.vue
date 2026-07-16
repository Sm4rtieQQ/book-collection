<script setup lang="ts">
const props = defineProps({ book: Object })

const book = { ...props.book };

</script>

<template>
    <div>
        <h2>{{ book.title }}</h2>
        <h3>{{ book.author }}</h3>
        <p>{{ book.summary }}</p>
    </div>

    <hr class="mb-2" />
</template>