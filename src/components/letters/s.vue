<template>
  <g id="s" :data-descript="makeId">
    <line
      class="line"
      :x1="startX"
      :y1="startY + height"
      :x2="startX + width / 2"
      :y2="startY"
      :style="cssVars"
      stroke-linecap="round"
    ></line
    ><line
      class="line line2"
      :x1="startX + width / 2"
      :y1="startY"
      :x2="startX + width"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line3"
      :x1="startX + 5"
      :y1="(startY + height) / 2 + startY / 2"
      :x2="startX + width - 5"
      :y2="(startY + height) / 2 + startY / 2"
      :style="cssVars"
    ></line>
  </g>
</template>
<script>
export default {
  name: "s",
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
      return this.word + "_s";
    },
  },
};
</script>
