<template>
  <g id="j" :data-descript="makeId">
    <line
      class="line"
      :x1="startX"
      :y1="startY"
      :x2="startX + width"
      :y2="startY"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
    <line
      class="line"
      :x1="startX + width / 2"
      :y1="startY"
      :x2="startX + width / 2"
      :y2="startY + height - 20"
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
  name: "j",
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
      return this.word + "_j";
    },
    getEllipse: function () {
      return `M${this.startX + this.width / 2},${this.startY + this.height - 20}
              C${this.startX + this.width / 2},${this.startY + this.height + 5}
                ${this.startX - 5},${this.startY + this.height + 5}
                ${this.startX},${this.startY + this.height - 20}`;
    },
  },
};
</script>
