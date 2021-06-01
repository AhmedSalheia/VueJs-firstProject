<template>
  <g id="u" :data-descript="makeId">
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
  name: "u",
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
      return this.word + "_u";
    },
    getEllipse: function () {
      return `M${this.startX},${this.startY}
              C${this.startX - 5},${this.startY + this.height + 20}
                ${this.startX + this.width + 5},${
        this.startY + this.height + 20
      }
                ${this.startX + this.width},${this.startY}`;
    },
  },
};
</script>
