<template>
  <g id="i" :data-descript="makeId"
    ><line
      class="line"
      :x1="startX"
      :y1="startY"
      :x2="startX + width"
      :y2="startY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line2"
      :x1="startX + width / 2"
      :y1="startY"
      :x2="startX + width / 2"
      :y2="endY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line line3"
      :x1="startX"
      :y1="endY"
      :x2="startX + width"
      :y2="endY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "i",
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
      return this.word + "_i";
    },
    endY: function () {
      return this.startY + this.height;
    },
  },
};
</script>
