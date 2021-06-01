<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Homepage />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Home.vue";
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Homepage,
  },
  data() {
    return {
      // component: HelloWorld,
    };
  },
};
</script>
