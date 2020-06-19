<template>
  <q-page class="q-pa-md">
    <no-tasks v-if="!Object.keys(tasksTodo).length" />
    <tasks-todo v-else :tasks-todo="tasksTodo" />
    <tasks-completed v-if="Object.keys(tasksCompleted).length" :tasks-completed="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn round dense color="primary" size="24px" icon="add" @click="showAddTask = true" />
    </div>

    <q-dialog persistent v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'tasks-todo': require('components/Tasks/TasksTodo.vue').default,
    'tasks-completed': require('components/Tasks/TasksCompleted.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default
  },
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      console.log('boom');

      this.showAddTask = true
    })
  },
  destroyed() {
    this.$root.$off('showAddTask')
  }
}
</script>

<style>
</style>