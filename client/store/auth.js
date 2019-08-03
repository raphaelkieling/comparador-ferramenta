import * as userApi from '~/api/user'
import { setToken } from '~/utils/auth.js'

export const state = () => ({
    title: '',
    user: {}
})

export const actions = {
    auth: ({ commit }, payload) => {
        return userApi.auth(payload).then((data) => {
            commit('setUser', data.user);
            commit('setToken', data.access_token)
            return data;
        })
    }
}

export const mutations = {
    setToken: (state, token) => {
        setToken(token)
    },
    setUser: (state, user) => {
        state.user = user;
    }
}
