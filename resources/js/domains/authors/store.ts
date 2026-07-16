import type { Author } from 'types';
import { storeModuleFactory } from '@/services/store';

const authorStore = storeModuleFactory('authors');

authorStore.actions.getAll();

export const authors = authorStore.getters.all;

export const getAuthorById = (id: number) => {
    return authorStore.getters.getById(id);
}

export const addAuthor = async (newAuthor: Author) => {
    await authorStore.actions.create(newAuthor);
}

export const updateAuthor = async (id: number, updatedAuthor: Author) => {
    await authorStore.actions.update(id, updatedAuthor);
}

export const deleteAuthor = async (id: number) => {
    await authorStore.actions.delete(id);
}