import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// socket io
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';



Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000', {transports: ['websocket']}), //options object is Optional
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
