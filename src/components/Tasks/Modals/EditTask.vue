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
export default {
  name: 'AddTask',
  props: ['task', 'id'],
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
  },
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
    submitForm(args) {
      //   this.$refs.name.validate()
      if (this.$refs?.modalTaskName.$refs?.name) {
        if (!this.$refs.modalTaskName.$refs.name.hasError) {
          this.submitTask()
        }
      }

    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = ''
      this.taskToSubmit.dueTime = ''
    }
  }
}
</script>

<style>
</style>