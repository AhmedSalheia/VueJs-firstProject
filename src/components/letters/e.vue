<template>
  <g id="e" :data-descript="makeId"
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
      class="line"
      :x1="startX + width"
      :y1="startY + height"
      :x2="startX"
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
    <line
      class="line line2"
      :x1="startX"
      :y1="startY + height"
      :x2="startX"
      :y2="startY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>

    <line
      class="line line3"
      :x1="startX"
      :y1="(startY + height) / 2 + startY / 2"
      :x2="startX + (2 * width) / 3"
      :y2="(startY + height) / 2 + startY / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "e",
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
      return this.word + "_e";
    },
  },
};
</script>
