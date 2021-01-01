<template>
  <div class="home">

		<field-add-task />

    <list-tasks
      v-if="$store.state.tasks.length"
    />

		<div
		  v-else
			class="no-tasks"
		>
			<v-icon
			  color="primary"
			  size="100"
			>
				mdi-check
			</v-icon>
			<div
			  class="text-h5 primary--text"
			>
				No tasks
			</div>
		</div>

  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
import ListTasks from '@/components/Todo/ListTasks.vue'

export default {
  name: 'Todo',

	components: {
		FieldAddTask,
		ListTasks
	}
}
</script>

<style lang="sass" scoped>
.no-tasks
	position: absolute
	left: 50%
	top: 50%
	transform: translate(-50%, -50%)
	opacity: .5
</style>
