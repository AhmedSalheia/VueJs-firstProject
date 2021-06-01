let Vue = require("vue");

let app = Vue.createApp({});
// Change the font formate of a text
app.directive("font", {
  bind: function (el, binding) {
    el.style.fontSize = binding.value + "px";

    // Working With Modifiers:

    // Bold Modifier:
    if (binding.modifiers.bold) {
      el.style.fontWeight = "bold";
    }

    // Orange Modifier:
    if (binding.modifiers.orange) {
      el.style.color = "orange";
    }
  },
});
