<template>
  <q-page class="q-pa-md">
    <q-list v-if="Object.keys(tasks).length" bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" />
    </q-list>
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
    'add-task': require('components/Tasks/Modals/AddTask.vue').default
  },
  data() {
    return {
      showAddTask: false
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  }
}
</script>

<style>
</style>