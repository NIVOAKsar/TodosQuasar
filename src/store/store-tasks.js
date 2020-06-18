import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        // 'ID1': {
        //     name: 'Go to shop',
        //     completed: false,
        //     dueDate: '2020/06/18',
        //     dueTime: '17:30'
        // },
        // 'ID2': {
        //     name: 'Get bananas',
        //     completed: false,
        //     dueDate: '2020/06/19',
        //     dueTime: '18:30'
        // },
        // 'ID3': {
        //     name: 'Get apples',
        //     completed: false,
        //     dueDate: '2020/06/20',
        //     dueTime: '19:30'
        // },
    }
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let id = uid()
        let payload = {
            id,
            task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}