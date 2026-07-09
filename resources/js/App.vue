<template>
    <nav>
        <router-link :to="{name: 'books.overview'}">Boeken overzicht</router-link> |
        <router-link :to="{name: 'books.create'}">Nieuw boek</router-link> |
        <router-link :to="{name: 'authors.overview'}">Auteurs overzicht</router-link> |
        <router-link :to="{name: 'authors.create'}">Nieuwe auteur</router-link>
    </nav>
    <router-view />
</template>