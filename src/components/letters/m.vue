<template>
  <g id="m" :data-descript="makeId">
    <line
      class="line"
      :x1="startX"
      :y1="startY + height"
      :x2="startX"
      :y2="startY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line2"
      :x1="startX"
      :y1="startY"
      :x2="startX + width / 2"
      :y2="startY + height - 10"
      stroke-linecap="round"
      :style="cssVars"
    ></line>
    <line
      class="line line3"
      :x1="startX + width / 2"
      :y1="startY + height - 10"
      :x2="startX + width"
      stroke-linecap="round"
      :y2="startY"
      :style="cssVars"
    ></line>
    <line
      class="line line4"
      :x1="startX + width"
      :y1="startY"
      :x2="startX + width"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "m",
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
      return this.word + "_m";
    },
  },
};
</script>
