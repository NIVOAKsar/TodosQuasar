import Vue from 'vue'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2020/06/18',
            dueTime: '17:30'
        },
        'ID2': {
            name: 'Get bananas',
            completed: false,
            dueDate: '2020/06/19',
            dueTime: '18:30'
        },
        'ID3': {
            name: 'Get apples',
            completed: false,
            dueDate: '2020/06/20',
            dueTime: '19:30'
        },
    }
    // tasks: [
    //     {
    //         id: 1,
    //         name: 'Go to shop',
    //         completed: false,
    //         dueDate: '2020/06/18',
    //         dueTime: '17:30'
    //     }, {
    //         id: 2,
    //         name: 'Get bananas',
    //         completed: false,
    //         dueDate: '2020/06/19',
    //         dueTime: '18:30'

    //     }, {
    //         id: 3,
    //         name: 'Get apples',
    //         completed: false,
    //         dueDate: '2020/06/20',
    //         dueTime: '19:30'

    //     }
    // ]
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
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