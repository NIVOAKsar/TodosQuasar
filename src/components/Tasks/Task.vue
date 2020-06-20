<template>
  <q-item
    v-touch-hold:1000.mouse="showEditTaskModal"
    v-ripple
    :class="!task.completed? 'bg-orange-1': 'bg-green-1'"
    clickable
    @click="updateTask({id:id,updates: {completed: ! task.completed}})"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        v-html="$options.filters.searchHighlight(task.name,search)"
        :class="{'text-strikethrough': task.completed}"
      />
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon size="18px" name="event" class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{task.dueDate | niceDate}}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{taskDueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn flat round dense color="primary" icon="edit" @click.stop="showEditTaskModal" />
        <q-btn flat round dense color="red" icon="delete" @click.stop="promptToDelete(id)" />
      </div>
    </q-item-section>

    <q-dialog persistent v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { date } from 'quasar'
const { formatDate } = date

export default {
  props: ['task', 'id'],
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  },
  data() {
    return {
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')

      }
      return this.task.dueTime
    }
  },
  filters: {
    niceDate(value) {
      return formatDate(value, 'MMM D')
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, match => {
          return `<span class="bg-yellow-6">${match}</span>`
        })
      }
      return value
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {

      this.$q.dialog({
        title: 'DELETE',
        dark: true,
        message: 'Would you like to delete this task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      }).onCancel(() => {
      })
    },
    showEditTaskModal() {
      this.showEditTask = true
    }
  }
}
</script>

<style>
</style>