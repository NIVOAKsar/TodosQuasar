<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-lg">
        <search />
        <sort />
      </div>

      <p
        v-if="search && !Object.keys(tasksTodo).length && !Object.keys(tasksCompleted).length"
      >no search results</p>

      <q-scroll-area class="q-scroll-area-tasks relative-position">
        <no-tasks v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList" />
        <tasks-todo v-if="Object.keys(tasksTodo).length" :tasks-todo="tasksTodo" />
        <tasks-completed
          v-if="Object.keys(tasksCompleted).length"
          :tasks-completed="tasksCompleted"
          class="q-mb-xl"
        />
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
          round
          dense
          color="primary"
          size="24px"
          icon="add"
          @click="showAddTask = true"
          class="all-pointer-events"
        />
      </div>
    </div>

    <q-dialog persistent v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'PageTodo',
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'add-task': require('components/Tasks/Modals/AddTask.vue').default,
    'tasks-todo': require('components/Tasks/TasksTodo.vue').default,
    'tasks-completed': require('components/Tasks/TasksCompleted.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
    'search': require('components/Tasks/Tools/Search.vue').default,
    'sort': require('components/Tasks/Tools/Sort.vue').default
  },
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings'])

  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  },
  destroyed() {
    this.$root.$off('showAddTask')
  }
}
</script>

<style scoped>
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>