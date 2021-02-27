<template>
  <v-container class="mt-16">
    <p v-if="isConnected">We're connected to the server!</p>
    <p v-else>Not connected to server!</p>
    <p>Message from server: "{{ socketMessage }}"</p>
    <v-btn @click="pingServer()">Ping Server</v-btn>
  </v-container>
</template>

<script>
import socket from "@/plugins/socketio.js";
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
    // // when disconnect
    socket.on("disconnect", () => {
      console.log("disconnected!");
      this.isConnected = false;
    });
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      socket.emit("pingServer", "PING!");
      socket.on("message", (message) => {
        console.log(message);
        this.socketMessage = message;
      });
    },
  },
};
</script>