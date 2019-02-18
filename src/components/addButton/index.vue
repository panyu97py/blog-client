<template>
  <div id="addButton">
    <div class="addButtonItem" @click="$emit('click')">
      <span class="addIcon">+</span>
      <span class="addText">{{text}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
