<template>
  <g id="b" :data-descript="makeId">
    <line
      class="line"
      :x1="startX"
      :y1="startY"
      :x2="startX"
      :y2="startY + height"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <path
      :d="getEllipse"
      class="line line2"
      :style="cssVars"
      stroke-linecap="round"
    />
  </g>
</template>
<script>
export default {
  name: "b",
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
      return this.word + "_b";
    },
    getEllipse: function () {
      return `M${this.startX},${this.startY} 
              C${this.startX + this.width * (3 / 4)},${this.startY - 3}
                ${this.startX + this.width * (3 / 4)},${
        this.startY + this.height / 2
      }
                ${this.startX},${this.startY + this.height / 2}
                
              C${this.startX + this.width},${this.startY + this.height / 2}
                ${this.startX + this.width},${this.startY + this.height}
                ${this.startX},${this.startY + this.height}`;
    },
  },
};
</script>
