<template>
  <g id="q" :data-descript="makeId">
    <ellipse
      class="line"
      :cx="(startX + width) / 2 + startX / 2"
      :cy="(startY + height) / 2 + startY / 2"
      :rx="width / 2 + 2"
      :ry="height / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></ellipse
    ><line
      class="line line3"
      :x1="startX + width / 2"
      :y1="startY + (2 * height) / 3"
      :x2="startX + width"
      :y2="startY + height"
      stroke-linecap="round"
      :style="cssVars"
    ></line>
  </g>
</template>
<script>
export default {
  name: "q",
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
      return this.word + "_q";
    },
  },
};
</script>
