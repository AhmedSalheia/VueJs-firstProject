<template>
  <g id="k" :data-descript="makeId">
    <line
      class="line"
      :x1="startX + width - 5"
      :y1="startY + 1"
      :x2="startX + 1"
      :y2="startY + (2 * height) / 3"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line"
      :x1="startX + 10"
      :y1="startY + height / 2"
      :x2="startX + width - 5"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line2"
      :x1="startX"
      :y1="startY"
      :x2="startX"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "k",
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
      return this.word + "_k";
    },
  },
};
</script>
