<template>
  <div id="addButton">
    <span class="addIcon" @click="$emit('click')">+</span>
    <span class="addText" @click="$emit('click')">{{text}}</span>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
