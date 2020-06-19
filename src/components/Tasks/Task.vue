<template>
  <q-item
    :class="!task.completed? 'bg-orange-1': 'bg-green-1'"
    clickable
    v-ripple
    @click="updateTask({id:id,updates: {completed: ! task.completed}})"
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon size="18px" name="event" class="q-mr-xs"></q-icon>
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{task.dueDate}}</q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn flat round dense color="primary" icon="edit" @click.stop="showEditTask = true" />
        <q-btn flat round dense color="red" icon="delete" @click.stop="promptToDelete(id)" />
      </div>
    </q-item-section>

    <q-dialog persistent v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
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
    }
  }
}
</script>

<style>
</style>