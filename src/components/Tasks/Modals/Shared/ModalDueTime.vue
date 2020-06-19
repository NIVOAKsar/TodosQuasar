<template>
  <div class="row q-mb-sm">
    <q-input
      :value="dueTime"
      outlined
      label="Due time"
      clearable
      clear-icon="close"
      class="col"
      @input="$emit('update:dueTime',$event)"
      @clear="$emit('update:dueTime','')"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="dueTime" @input="$emit('update:dueTime',$event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueTime']
}
</script>

<style>
</style>