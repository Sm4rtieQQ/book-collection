import { storeModuleFactory } from "@/services/store";
import { Review } from "@/types";

const reviewStore = storeModuleFactory('reviews');

reviewStore.actions.getAll();

export const reviews = reviewStore.getters.all;

export const getReviewById = (id: number) => {
    return reviewStore.getters.getById(id);
}

export const getBookReviews = async (id: number) => {
    return await reviewStore.actions.getByFields({ book_id: id }) ?? [];
}

export const addReview = async (newReview: Review) => {
    await reviewStore.actions.create(newReview);
}

export const deleteReview = async (id: number) => {
    await reviewStore.actions.delete(id);
}