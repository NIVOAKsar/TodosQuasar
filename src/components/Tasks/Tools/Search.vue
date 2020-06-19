<template>
  <q-input
    v-model="searchField"
    v-select-all
    label="Search"
    outlined
    class="col"
    @keyup.esc="searchField = ''"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>

    <template v-slot:hint>Field hint</template>
  </q-input>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    selectAll
  },
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get() {
        return this.search
      },
      set(value) {
        this.setSearch(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  }
}
</script>

<style>
</style>