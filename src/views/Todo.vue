<template>
  <div class="home">

		<field-add-task />

    <list-tasks
      v-if="$store.state.tasks.length"
    />

		<no-tasks v-else/>

  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
import ListTasks from '@/components/Todo/ListTasks.vue'
import NoTasks from '@/components/Todo/NoTasks.vue'

export default {
  name: 'Todo',

	components: {
		FieldAddTask,
		ListTasks,
		NoTasks
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
