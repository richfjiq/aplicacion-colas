// Comando para establecer la conexion
let socket = io();

const label = $("#lblNuevoTicket");

socket.on("connect", function() {
    console.log("Conectado al servidor");
});

socket.on("disconnect", function() {
    console.log("Desconectado del servidor");
});

socket.on("estadoActual", function(resp) {
    console.log(resp);
    label.text(resp.actual);
});
// on "estadoActual"

$("button").on("click", function() {
    socket.emit("siguienteTicket", null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});