function Pasajero(nombre, apellido, dni, nro_asiento){
	this.nombre = nombre,
	this.apellido = apellido,
	this.dni = dni,
	this.nro_asiento = nro_asiento
	
};

function Pasajes(){
	this.asientos = [];
	this.guardarReservar = function(reserva){

		this.asientos.push(reserva);
	}
	this.buscar = function(){

	}
	this.limpiar = function(){

	}
	this.listar = function(){

	}
	this.eliminar = function(){

	}
	this.dibujarAsientos = function(){
		var cantidadAsiento = 32;
		var filas = 4;
		var columnas = cantidadAsiento / filas;
		var pasillo="";
		var asientosHTML = "<table border='2'>";
		for(var i = 1; i <= 4; i++ ){
			asientosHTML += "<tr>";
			var numeroDeAsiento = i;
			for(var j = 0 ; j < columnas; j++){
				asientosHTML += "<td>"+ ( numeroDeAsiento ) +"</td>";
				numeroDeAsiento += 4;
			}
			(i == 2 )? pasillo += "<td></td>":pasillo = "";
			asientosHTML += "</tr>"+pasillo;
		}
		asientosHTML += "</table>";
		document.getElementById('dibujarAsientos').innerHTML = asientosHTML;
		//return asientos;
	}
	this.formReserva = function(event){
		var nro_asiento = event.target.textContent;
		colorCelda = event.target;
		document.getElementById("nro_asiento").value = nro_asiento;

		if(colorCelda.style.backgroundColor == "red"){
			var indice = 0;
			for(var i = 0; i < asientos.length; i++){
				if(asientos[i].nro_asiento == asiento){
					indice = i;
				}
				document.getElementById('nombre').value = asientos[indice].nombre;
				document.getElementById('apellido').value = asientos[indice].apellido;
				document.getElementById('dni').value = asientos[indice].dni;
			}
		}
	}
}
var pasajes = new Pasajes();
pasajes.dibujarAsientos();

//colsole.log(pasajes.dibujarAsientos())

var celdas = document.getElementsByTagName('td');
for(var i = 0; i < celdas.length; i++){
	celdas[i].addEventListener('click', pasajes.formReserva, false);
}

var reservarAsiento = document.getElementById('reservarAsiento');
reservarAsiento.onclick = function(){
	//console.log("hola")
	var nro_asiento = document.getElementById("nro_asiento").value;
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var dni = document.getElementById('dni').value;
	if(nro_asiento != "" && nombre != "" && apellido != "" && dni != ""){

		pasajes.guardarReservar = ( new Pasajero(nombre, apellido, dni, nro_asiento));
		colorCelda.style.backgroundColor ="red";
		alert("guadado con Exito");
	}else{
		alert("ingrese datos");
	}
	console.log(pasajes.asientos)
}

var limpiar = document.getElementById('limpiar');
limpiar.onclick = function(){

}
var listar = document.getElementById('listar');
listar.onclick = function(){

}
var buscar = document.getElementById('buscar');
buscar.onclick = function(){

}
