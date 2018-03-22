/*eslint no-console: "off"*/
module.exports = (server)=>{
  const io = require("socket.io")(server);
  var sockets = [];
  io.on("connection", (socket) => {
    sockets.push(socket);
    socket.emit("connected", { hello: "world" });
    socket.on("disconnect", (reason) => {
      console.log("client disconnected ",reason);
      sockets.splice(sockets.indexOf(socket),1);
    });
  
    socket.on("message", (data) => {
      console.log(data);
      sockets.forEach(sock => {
        sock.emit("message",data); //just echoing everything any client says to every client
      });
    });
    
    socket.on("REQUEST_NAME",(data)=>{
      console.log(data);
      socket.emit("NAME_ACCEPTED",data);
    });
  });
};