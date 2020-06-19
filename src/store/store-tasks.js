import Vue from 'vue'
import { uid } from 'quasar'

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
    },
    search: 'Test'

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
    },
    setSearch(state, value) {
        state.search = value
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
    },
    setSearch({ commit }, value) {
        commit('setSearch', value)
    }
}

const getters = {
    tasksFiltered: (state) => {
        let tasksFiltered = {}
        if (state.search) {
            Object.keys(state.tasks).forEach(key => {
                let task = state.tasks[key]
                let taskNameLowerCase = task.name.toLowerCase()
                let searchLowerCase = state.search.toLowerCase()
                if (taskNameLowerCase.includes(searchLowerCase)) {
                    tasksFiltered[key] = task
                }
            })
            return tasksFiltered
        }
        return state.tasks
    },
    tasksTodo: (state, getters) => {
        let tasksFilteres = getters.tasksFiltered
        let tasks = {}
        Object.keys(tasksFilteres).forEach((key) => {
            let task = tasksFilteres[key]
            if (!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach((key) => {
            let task = state.tasks[key]
            if (task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}