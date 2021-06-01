<template>
  <g id="x" :data-descript="makeId">
    <line
      class="line"
      :x1="startX"
      :y1="startY"
      :x2="startX + width"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line2"
      :x1="startX + width"
      :y1="startY"
      :x2="startX"
      :y2="startY + height"
      stroke-linecap="round"
      :style="cssVars"
    ></line>
  </g>
</template>
<script>
export default {
  name: "x",
  props: {
    word: String,
    startX: Number,
    width: Number,
    startY: Number,
    height: Number,
    cssVars: String,
  },
  data() {
    return {};
  },
  computed: {
    makeId: function () {
      return this.word + "_x";
    },
  },
};
</script>
