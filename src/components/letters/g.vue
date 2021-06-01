<template>
  <g id="g" :data-descript="makeId">
    <path
      :d="getEllipse"
      class="line"
      :style="cssVars"
      stroke-linecap="round"
    />

    <line
      class="line line4"
      :x1="this.startX + this.width"
      :y1="this.startY + (3 * this.height) / 5"
      :x2="this.startX + this.width / 2"
      :y2="this.startY + (3 * this.height) / 5"
      :style="cssVars"
      stroke-linecap="round"
    ></line>
  </g>
</template>
<script>
export default {
  name: "g",
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
      return this.word + "_g";
    },
    getEllipse: function () {
      return `M${this.startX + this.width},${this.startY + this.height / 4}

              Q${this.startX + this.width},${this.startY}
                ${this.startX + this.width / 2},${this.startY}

              C${this.startX - 5},${this.startY}
                ${this.startX - 5},${this.startY + this.height}
                ${this.startX + this.width / 2},${this.startY + this.height}

              Q${this.startX + this.width},${this.startY + this.height}
                ${this.startX + this.width},${
        this.startY + (3 * this.height) / 5
      }`;
    },
  },
};
</script>
