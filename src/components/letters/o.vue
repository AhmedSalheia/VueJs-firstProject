<template>
  <g id="o" :data-descript="makeId">
    <ellipse
      class="line"
      :cx="(startX + width) / 2 + startX / 2"
      :cy="(startY + height) / 2 + startY / 2"
      :rx="width / 2 + 2"
      :ry="height / 2"
      :style="cssVars"
      stroke-linecap="round"
    ></ellipse>
  </g>
</template>
<script>
export default {
  name: "o",
  props: {
    word: String,
    startX: Number,
    width: Number,
    startY: Number,
    height: Number,
    cssVars: String,
  },
  data() {
    return {
      r: 25,
    };
  },
  computed: {
    makeId: function () {
      return this.word + "_o";
    },
  },
};
</script>
