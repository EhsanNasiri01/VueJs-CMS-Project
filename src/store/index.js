import { createStore } from 'vuex'
import userModule from './modules/userModule.js'
// Create a new store instance.
export const store = createStore({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules:{
        userModule
    }
})
