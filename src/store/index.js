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
		]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
