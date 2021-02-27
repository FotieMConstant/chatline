<template>
  <v-app>
    <div id="app">
      <!-- for the app bar -->
      <Appbar />
      <router-view />
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Appbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
