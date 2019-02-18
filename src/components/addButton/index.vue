<template>
  <div id="addButton" @click="$emit('click')">
    <span class="addIcon">+</span>
    <span class="addText">{{text}}</span>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
