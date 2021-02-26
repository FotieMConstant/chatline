<template>
  <v-container class="mt-16">
    <p v-if="isConnected">We're connected to the server!</p>
    <p>Message from server: "{{ socketMessage }}"</p>
    <v-btn @click="pingServer()">Ping Server</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isConnected: false,
      socketMessage: "",
    };
  },

  sockets: {
    connect() {
      // Fired when the socket connects.
      this.isConnected = true;
      console.log(this.$socket); // x8WIv7-mJelg7on_ALbx
    },

    disconnect() {
      this.isConnected = false;
    },

    // Fired when the server sends something on the "messageChannel" channel.
    messageChannel(data) {
      this.socketMessage = data;
      console.log(data);
    },
  },

  methods: {
    pingServer() {
      // Send the "pingServer" event to the server.
      this.$socket.emit("pingServer", "PING!");
    },
  },
};
</script>