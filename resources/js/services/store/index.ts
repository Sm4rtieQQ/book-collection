import { ref, computed } from 'vue';
import { deleteRequest, getRequest, postRequest, putRequest } from '../http';

export const storeModuleFactory = (moduleName: string) => {
    const state: any = ref({});

    const getters = {
        all: computed(() => state.value),
        getById: (id: number) => computed(() => state.value[id]),
        getByForeignId: (foreignId: number) => computed(() =>
            state.value.filter(item => item.foreignId === foreignId)),
    }

    const setters = {
        setAll: (items: any) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },

        deleteByItem: (item: any) => {
            delete state.value[item.id];
        }
    }

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },

        create: async (item: any) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },

        update: async (id: number, item: Object) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },

        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteByItem({ id });
        }

    }

    return { getters, setters, actions }
}