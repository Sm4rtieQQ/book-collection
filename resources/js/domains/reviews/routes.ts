import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";

export const reviewRoutes = [
    { path: '/reviews/:bookId/create', component: Create, name: 'reviews.create' },
    { path: '/reviews/:bookId/:reviewId/edit', component: Edit, name: 'reviews.edit' },
]