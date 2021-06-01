<template>
  <g id="newLine" :data-descript="makeId"></g>
</template>
<script>
export default {
  name: "nl",
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
      return this.word + "_newLine";
    },
  },
};
</script>
