<template>
  <g id="c" :data-descript="makeId">
    <path
      :d="getEllipse"
      class="line"
      :style="cssVars"
      stroke-linecap="round"
    />
  </g>
</template>
<script>
export default {
  name: "c",
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
      return this.word + "_c";
    },
    getEllipse: function () {
      return `M${this.startX + this.width},${this.startY + this.height / 5} 
              
              Q${this.startX + this.width},${this.startY}
                ${this.startX + this.width / 2},${this.startY}
              
              C${this.startX - 5},${this.startY}
                ${this.startX - 5},${this.startY + this.height}
                ${this.startX + this.width / 2},${this.startY + this.height}
                
              Q${this.startX + this.width},${this.startY + this.height}
                ${this.startX + this.width},${
        this.startY + this.height - this.height / 5
      }`;
    },
  },
};
</script>
