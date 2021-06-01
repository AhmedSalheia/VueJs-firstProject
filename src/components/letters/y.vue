<template>
  <g id="y" :data-descript="makeId"
    ><line
      class="line"
      :x1="startX + width"
      :y1="startY"
      :x2="startX + width / 2"
      :y2="startY + height / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></line
    ><line
      class="line line2"
      :x1="startX + width / 2"
      :y1="startY + height / 2"
      :x2="startX + width / 2"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line3"
      :x1="startX"
      :y1="startY"
      :x2="startX + width / 2"
      :y2="startY + height / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "y",
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
      return this.word + "_y";
    },
  },
};
</script>
