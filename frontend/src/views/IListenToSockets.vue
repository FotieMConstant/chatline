<template>
  <v-container class="mt-16">
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{ socketMessage }}"</p>
    <v-btn @click="pingServer()">Ping Server</v-btn>
  </v-container>
</template>

<script>
import io from "socket.io-client";
const socket = io("http://localhost:3000", { transports: ["websocket"] });
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: "",
    };
  },

  mounted: function () {
    // client-side
    // when connected
    socket.on("connect", () => {
      this.isConnected = true;
      console.log("socket connected!"); // x8WIv7-mJelg7on_ALbx
    });

    // when disconnect
    socket.on("disconnect", () => {
      console.log("disconnected!");
      this.isConnected = false;
    });

    // socket.on("counter", (counter) => {
    //   document.querySelector("h1").textContent = counter;
    // });
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      socket.emit("pingServer", "PING!");
      socket.on("message", (message) => {
        console.log(message);
      });
    },
  },
};
</script>