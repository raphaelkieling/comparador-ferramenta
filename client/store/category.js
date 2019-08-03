import * as categoryApi from '~/api/category'

export const state = () => ({})

export const actions = {
    create: ({ commit }, payload) => {
        return categoryApi.create(payload);
    },
    getAll: ({ commit }, payload) => {
        return categoryApi.all(payload);
    },
    getOne: ({ commit }, payloadId) => {
        return categoryApi.one(payloadId);
    }

}

export const mutations = {}
