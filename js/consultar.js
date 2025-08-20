
function Consulta() {
tabla = document.querySelector('#horarios')
legajo=document.getElementById(legajo).value
urlApi="http://proveedores.alsea.com.ar:48080/asignaciones-server/mobile/main/asignaciones/legajos/"
urlFinal=urlApi+legajo
   fetch(urlFinal)
      .then(res => res.json())
      .then(response => {
         console.log(response.asignaciones[0].fecha);
         response.asignaciones.map((fecha) => {
            console.log(fecha.fecha)
            console.log(fecha.horaEntrada)
            console.log(fecha.horaSalida)
            console.log(fecha.tienda)
            fila = document.createElement("tr")
            fila.innerHTML = `<tr><td>${fecha.fecha}</td>`
               `<td>${fecha.horaEntrada}</td>`
               `<td>${fecha.horaSalida}</td>`
               `<td>${fecha.tienda}</td> </tr>`
            tabla.append(fila)
         })



      })
}