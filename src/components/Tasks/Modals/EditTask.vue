<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
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
  props: ['task', 'id'],
  mixins: [mixinAddEditTask],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),

    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    },

  }
}
</script>

<style>
</style>