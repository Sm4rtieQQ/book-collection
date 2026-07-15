<template>
    <nav class="text-center text-lg font-semibold">
        <router-link :to="{name: 'books.overview'}">Boeken overzicht</router-link> |
        <router-link :to="{name: 'books.create'}">Nieuw boek</router-link> |
        <router-link :to="{name: 'authors.overview'}">Auteurs overzicht</router-link> |
        <router-link :to="{name: 'authors.create'}">Nieuwe auteur</router-link>
    </nav>
    <hr class="mb-2" />
    <router-view />
</template>