<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name ref="modalTaskName" :name.sync="taskToSubmit.name"></modal-task-name>
        <modal-due-date :due-date.sync="taskToSubmit.dueDate" @clearDueDate="clearDueDate" />
        <modal-due-time v-if="taskToSubmit.dueDate" :due-time.sync="taskToSubmit.dueTime" />
        <modal-buttons />
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixinAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  name: 'AddTask',
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      }
    }
  },

  methods: {
    ...mapActions('tasks', ['addTask']),
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    },
  }
}
</script>

<style>
</style>