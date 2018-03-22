import io from "socket.io-client";
const sock = {};
sock.connection = io.connect("http://localhost:8080");

sock.connection.on("connected", function () {
  sock.connection.emit("fromclient", { my: "data" });
});

function subscribeToMessages(callback){
  sock.connection.on("message",data=>callback(data));
}

function sendMessage(data){
  sock.connection.emit("message",data);
}

export { subscribeToMessages, sendMessage };