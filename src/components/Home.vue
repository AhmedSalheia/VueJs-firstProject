<template>
  <form action="">
    <input type="text" id="letters" />
    <button @click.prevent="reset('n')">Convert To Animated SVG</button>
    <button @click.prevent="reset('y')">clear</button>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="428"
      height="343"
      viewBox="0 0 428.83 343.87"
      style="margin-bottom: 150px; display: block"
    >
      <component
        v-for="i in text"
        :key="i"
        :is="letters[i]"
        :word="text.join('')"
        :startX="startXCalc()"
        :startY="startYCalc(i)"
        :width="width"
        :height="height"
        :cssVars="cssVars(i)"
      />
    </svg>
  </form>
</template>

<script>
import aC from "@/components/letters/a.vue";
import bC from "@/components/letters/b.vue";
import c from "@/components/letters/c.vue";
import d from "@/components/letters/d.vue";
import e from "@/components/letters/e.vue";
import f from "@/components/letters/f.vue";
import g from "@/components/letters/g.vue";
import h from "@/components/letters/h.vue";
import i from "@/components/letters/i.vue";
import j from "@/components/letters/j.vue";
import k from "@/components/letters/k.vue";
import l from "@/components/letters/l.vue";
import m from "@/components/letters/m.vue";
import n from "@/components/letters/n.vue";
import o from "@/components/letters/o.vue";
import p from "@/components/letters/p.vue";
import q from "@/components/letters/q.vue";
import r from "@/components/letters/r.vue";
import s from "@/components/letters/s.vue";
import t from "@/components/letters/t.vue";
import u from "@/components/letters/u.vue";
import v from "@/components/letters/v.vue";
import w from "@/components/letters/w.vue";
import x from "@/components/letters/x.vue";
import y from "@/components/letters/y.vue";
import z from "@/components/letters/z.vue";

import nl from "@/components/letters/_newLine.vue";

let row = 0,
  col = 0,
  delay = 0;

export default {
  name: "home",
  data: function () {
    return {
      text: "abcdef^ghijkl^mnopqr^stuvwx^yz".split(""),
      letters: {
        a: aC,
        b: bC,
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        h: h,
        i: i,
        j: j,
        k: k,
        l: l,
        m: m,
        n: n,
        o: o,
        p: p,
        q: q,
        r: r,
        s: s,
        t: t,
        u: u,
        v: v,
        w: w,
        x: x,
        y: y,
        z: z,
        "^": nl,
      },
      duration: 0.7,
      height: 50,
      width: 30,
    };
  },
  methods: {
    reset(i = "n") {
      this.text = "";
      row = col = delay = 0;
      if (i === "n") {
        this.getLetters();
      }
    },
    getLetters() {
      this.text = document
        .querySelector("#letters")
        .value.trim()
        .toLowerCase()
        .split("");
    },
    cssVars(i) {
      if (i === "^") {
        return "";
      }
      return (
        "--line:" +
        delay * this.duration +
        "s;" +
        "--line2:" +
        (delay * this.duration + 0.4) +
        "s;" +
        "--line3:" +
        (delay * this.duration + 0.8) +
        "s;" +
        "--line4:" +
        (delay++ * this.duration + 1.2) +
        "s;"
      );
    },
    startYCalc(i) {
      if (i === "^") {
        row++;
        col = 0;
      }
      return 15 * (row + 1) + row * this.height;
    },
    startXCalc() {
      return 15 * (col + 1) + col++ * this.width;
    },
  },
  computed: {},
};
</script>
<style lang="scss">
@keyframes animate {
  0% {
    stroke-dasharray: 0px, 999999px;
    strokedashoffset: "0";
  }

  100% {
    strokedashoffset: "2e-5";
    stroke-dasharray: 700px, 999999px;
  }
}
svg {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  .line {
    fill: none;
    stroke: #1c1b20;
    stroke-width: 10px;
    stroke-dashoffset: 382.264;
    stroke-dasharray: 0px, 999999px;

    animation: animate 10s forwards;
    animation-delay: var(--line);
  }

  .line2 {
    animation-delay: var(--line2) !important;
  }

  .line3 {
    animation-delay: var(--line3) !important;
  }

  .line4 {
    animation-delay: var(--line4) !important;
  }
}
</style>
