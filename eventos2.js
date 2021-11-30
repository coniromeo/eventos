function escribe() {
    escribir = document.getElementById("caja")
    miTitulo = "<h1>" + document.rellenar.titulo.value + "</h1>"
    miTelefono = "<h2>" + document.rellenar.telefono.value + "</h2>"    
    miDireccion = "<h2>" + document.rellenar.direccion.value + "</h2>"
    miPedido = "<h3>" + document.rellenar.pedido.value + "</h3>"
    miHorario = "<h2>" + document.rellenar.horario.value + "</h2>"
    miTexto = "<p>" + document.rellenar.texto.value + "</p>"
    escribir.innerHTML = miTitulo + miTelefono+ miDireccion+ miPedido + miHorario + miTexto
    }
window.onload = function() {
document.rellenar.ver.onclick = escribe
}