import type { Book } from 'types';
import { storeModuleFactory } from '@/services/store';

const bookStore = storeModuleFactory('books');
const reviewStore = storeModuleFactory('reviews');

bookStore.actions.getAll();

export const books = bookStore.getters.all;

export const getBook = (id: number) => {
    return bookStore.getters.getById(id);
}

export const addBook = async (newBook: Book) => {
    await bookStore.actions.create(newBook);
}

export const updateBook = async (id: number, updatedBook: Book) => {
    await bookStore.actions.update(id, updatedBook);
}

export const deleteBook = async (id: number) => {
    await bookStore.actions.delete(id);
}