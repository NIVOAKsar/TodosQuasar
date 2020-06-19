<template>
  <div class="row q-mb-sm">
    <q-input
      v-select-all
      ref="name"
      :value="name"
      :rules="[val => !!val || 'Field is required']"
      outlined
      autofocus
      label="Task name"
      clearable
      clear-icon="close"
      class="col"
      @input="$emit('update:name',$event)"
      @clear="$emit('update:name','')"
    />
    <!-- @hook:mounted="onInputLoad($event)" -->
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'
export default {
  props: ['name'],
  directives: {
    selectAll
  },

}
</script>

<style>
</style>