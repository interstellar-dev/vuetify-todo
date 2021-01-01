import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		tasks: [
			{
				id: 1,
				title: 'Celebrate New Year',
				done: false
			},
			{
				id: 2,
				title: 'Congratulate the family',
				done: false
			},
			{
				id: 3,
				title: 'Eat salad',
				done: false
			}
		],

		snackbar: {
			show: false
		}
  },
  mutations: {
		addTask(state, newTaskTitle){
			let newTask = {
				id: Date.now(),
				title: newTaskTitle,
				done: false
			}
			state.tasks.push(newTask)
		},

		doneTask(state, id) {
			let task = state.tasks.filter(task => task.id === id)[0]
			task.done = !task.done
		},

		deleteTask(state, id){
			return state.tasks = state.tasks.filter(task => task.id !== id)
		},

		showSnackbar(state) {
			state.snackbar.show = true
		}
  },
  actions: {
		addTask({ commit }, newTaskTitle) {
			commit('addTask', newTaskTitle)
			commit('showSnackbar')
		},

		deleteTask({ commit }, id) {
			commit('deleteTask', id)
			commit('showSnackbar')
		}
  },
  modules: {
  }
})
