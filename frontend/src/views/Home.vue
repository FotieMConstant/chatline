<template>
  <div class="home mt-16">
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-card class="pa-2" outlined tile>
          <!-- Where the video is played -->
          <v-sheet
            @click="clickButton"
            color="#272727"
            elevation="3"
            height="550"
            width="880"
          ></v-sheet>
          <!--/ Where the video is played -->
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <v-card class="pa-2 __room" outlined tile>
          <v-list three-line>
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title" link>
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template> </v-list
        ></v-card>
      </v-col>
    </v-row>
    <!-- Dialog to get the room id -->
    <v-dialog v-model="dialogGetRoomId" max-width="290">
      <v-card>
        <v-card-title class="headline"> Room ID </v-card-title>

        <v-card-text>
          Please provide the room id: <v-text-field v-model="roomId" />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialogGetRoomId = false">
            Disagree
          </v-btn>

          <v-btn color="green darken-1" text @click="dialogGetRoomId = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- / Dialog to get the room id -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      dialogGetRoomId: false,
      roomId: null,
      items: [
        { header: "In room" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
      // emiting data to the backend
      this.$socket.emit("create", "room1");
      this.$socket.emit(
        "video",
        "https://stackoverflow.com/questions/19150220/creating-rooms-in-socket-io"
      );
    },
    customEmit: function (data) {
      console.log(
        'this method was fired by the socket server. eg: io.emit("customEmit", data)' +
          data
      );
    },
  },
  methods: {
    clickButton: function () {
      // $socket is socket.io-client instance
      console.log("Clicked");
      this.$socket.on("video", function (videoLink) {
        console.log("Message gotten from socket => " + videoLink);
      });
    },
  },
  mounted() {
    // this.$socket.on("user-connected", (data) => {
    //   debugger;
    //   console.log(data);
    //   this.$socket.emit("users");
    // });
    // this.$socket.emit("users");
    // this.$socket.on("users", (data) => {
    //   console.log("users", data);
    // });
  },
};
</script>
<style scoped>
.__room {
  height: 600px;
  overflow-y: scroll;
}
</style>
