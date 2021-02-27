const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
app.use(cors());

io.on('connection', function (client) {
        console.log('a user connected => '+client.id);
        // client.on('event', data => { /* … */ });
        // When client disconnects
        client.on('disconnect', () => { 
            console.log("Client => "+client.id+" disconnected")
         });
        //  to ping server from test
         client.on('pingServer', (message) =>{
             console.log(message);
             client.emit("message",'You are message=> '+message)
         })
        //  creating a room
         client.on('create', function(room) {
            client.join(room);

            // sending data to client side
            client.on('video', (videoLink) => {
                client.emit('video', videoLink);
                console.log("sending to clients =>"+videoLink)
              });


            console.log("room created with id =>"+room)
          });
 
})

server.listen(3000, function(){
    console.log('listening on port: 3000');
});