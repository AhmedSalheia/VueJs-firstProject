<template>
  <g id="f" :data-descript="makeId"
    ><line
      class="line"
      :x1="startX + width"
      :y1="startY"
      :x2="startX"
      :y2="startY"
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
    <line
      class="line line3"
      :x1="startX"
      :y1="(startY + height) / 2 + startY / 2"
      :x2="startX + width / 2"
      :y2="(startY + height) / 2 + startY / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "f",
  props: {
    word: String,
    startX: Number,
    width: Number,
    startY: Number,
    height: Number,
    cssVars: String,
  },
  computed: {
    makeId: function () {
      return this.word + "_f";
    },
  },
};
</script>
