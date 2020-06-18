<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        :class="!task.completed? 'bg-orange-1': 'bg-green-1'"
        clickable
        v-ripple
        @click="task.completed = !task.completed"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough': task.completed}">{{task.name}}</q-item-label>
        </q-item-section>

        <q-item-section side>
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [{
        id: 1,
        name: 'Go to shop',
        completed: false,
        dueDate: '2020/06/18',
        dueTime: '17:30'
      }, {
        id: 2,
        name: 'Get bananas',
        completed: false,
        dueDate: '2020/06/19',
        dueTime: '18:30'

      }, {
        id: 3,
        name: 'Get apples',
        completed: false,
        dueDate: '2020/06/20',
        dueTime: '19:30'

      }]
    }
  }
}
</script>

<style>
</style>