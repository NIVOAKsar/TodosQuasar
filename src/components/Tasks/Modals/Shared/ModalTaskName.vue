<template>
  <div class="row q-mb-sm">
    <q-input
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
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>
</style>