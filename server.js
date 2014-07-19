var cv=require("socket.io").listen(6969);
cv.sockets.on("connection",arranque);

function arranque(usuario){
	usuario.on("nuevoNombre", emitir);
}
function emitir(data){
	cv.sockets.emit("nombreDesdeServidor", data + "*");
}
