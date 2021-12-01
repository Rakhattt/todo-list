import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/compat'
Vue.use(Vuex)
class Ad {
  constructor (text, textarea, isDone, id = null) {
    this.id = id
    this.text = text
    this.textArea = textarea
    this.isDone = isDone
  }
}
export default new Vuex.Store({
  state: {
    clerror: null,
    created: []
  },
  mutations: {
    intercalate (state, payload) {
      state.created.push(payload)
    },
    clearError (state, payload) {
      state.clerror = null
    },
    loadTask (state, payload) {
      state.created = payload
    },
    updateTask (state, { text, textArea, id }) {
      const ad = state.created.find(a => {
        return a.id === id
      })
      ad.text = text
      ad.textArea = textArea
    },
    deleteTask (state, payload) {
      const listTasks = state.created
      state.created.every((currentEl, index) => {
        if (currentEl.id === payload.id) {
          listTasks.splice(index, 1)
          state.created = listTasks
          return false
        }
        return true
      })
    }
  },
  actions: {
    async addTask ({ commit }, payload) {
      commit('clearError')
      try {
        const newAd = new Ad(payload.text, payload.textArea, payload.isDone)
        const task = await firebase.database().ref('tasks').push(newAd)
        commit('intercalate', {
          ...newAd,
          id: task.key
        })
      } catch (e) {
        commit('clearError', false)
      }
    },

    async fetchTask ({ commit }, payload) {
      commit('clearError')
      const resultTask = []
      try {
        const fbvalue = await firebase.database().ref('tasks').once('value')
        const task = fbvalue.val()
        Object.keys(task).forEach(key => {
          const t = task[key]
          resultTask.push(
            new Ad(t.text, t.textArea, t.isDone, key)
          )
        })
        commit('loadTask', resultTask)
      } catch (e) {
        commit('clearError', false)
      }
    },
    async updateTask ({ commit }, { text, textArea, isDone, id }) {
      commit('clearError')
      try {
        await firebase.database().ref('tasks').child(id).update({
          text, textArea, isDone
        })
        commit('updateTask', {
          text, textArea, isDone, id
        })
      } catch (e) {
        commit('clearError', false)
      }
    },
    deleteTask ({ commit }, { id }) {
      firebase.database().ref('tasks').child(id).remove()
      commit('deleteTask', {
        id
      })
    }
  },
  getters: {
    created (state) {
      return state.created
    },
    MyAdsById (state) {
      return addId => {
        return state.created.find(add => add.id === addId)
      }
    }
  }
})
