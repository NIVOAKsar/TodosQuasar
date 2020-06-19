<template>
  <transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
    <div class="q-mt-lg">
      <list-header bg-color="bg-green-4">Completed</list-header>
      <q-list bordered separator>
        <task v-for="(task, key) in tasksCompleted" :key="key" :task="task" :id="key" />
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'list-header': require('components/Shared/ListHeader.vue').default,
  },
}
</script>

<style>
</style>