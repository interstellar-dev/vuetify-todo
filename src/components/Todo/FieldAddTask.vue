<template>
	<v-text-field
		v-model="newTaskTitle"
		@keyup.enter="addTask"
		class="field-add-task pa-2 mt-2"
		outlined
		placeholder="Add task"
		hide-details
		clearable
	>
		<template v-slot:append>
			<v-icon
			  @click="addTask"
				:disabled="newTaskTitleInvalid"
			>
				mdi-plus
			</v-icon>
		</template>
	</v-text-field>
</template>

<script>
export default {
	data() {
		return {
			newTaskTitle: '',
		}
	},

	computed: {
		newTaskTitleInvalid() {
			return !this.newTaskTitle
		}
	},

	methods: {
		addTask() {
			if (!this.newTaskTitleInvalid) {
				this.$store.dispatch('addTask', this.newTaskTitle);
				this.newTaskTitle = ''
		}
		}
	},
}
</script>

<style lang="sass">
.field-add-task.v-input--is-focused
	.v-input__slot
		background-color: rgba(35, 93, 130, .5) !important
</style>
