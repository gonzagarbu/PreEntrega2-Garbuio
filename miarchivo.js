// CLASE AFILIADOS

class Afiliado {
  constructor(id, nombre, apellido, nacionalidad, sueldo, condicion) {
    this.id = parseInt(id);
    this.nombre = nombre.toUpperCase();
    this.apellido = apellido.toUpperCase();
    this.nacionalidad = nacionalidad.toUpperCase();
    this.sueldo = parseFloat(sueldo);
    this.dealta = true;
  }
  }

// CLASE USUARIOS

class Usuarios {
    constructor(dni,nombreApellido,password) {
      this.dni = parseInt(dni);
      this.nombreApellido = nombreApellido.toLowerCase();
      this.password = parseInt(password);
    }
    }

// ARRAYS
var arrayUsuarios= [];

var arrayAfiliados = [];

let carrito = [];

let practicas = [
    {
    id: 1 ,
    cod_nom: 420101,
    nom: 'CONSULTA MEDICA',
    coseguro: 500
    },
    {
    id: 2 ,
    cod_nom: 180101,
    nom: 'ECOGRAFIA',
    coseguro: 1000
    },
    {
    id: 3,
    cod_nom: 120101,
    nom: 'RESONANCIA MAGNETICA NUCLEAR',
    coseguro: 1300
    },
    {
    id: 4 ,
    cod_nom: 170101,
    nom: 'PLACA',
    coseguro: 70,
    },
    {
    id: 5,
    cod_nom: 660101,
    nom: 'ANALISIS DE SANGRE',
    coseguro: 2200
    }
  ];


// MENU

seleccion = 0
let menu = "Ingrese una opcion:" + "\n" + "\n1-Registrarse" + "\n2-Ingreso al Sistema" + "\n3-Cargar Afiliados" + "\n4-Buscar Afiliados" +  "\n5-Mostrar Usuarios" + "\n6-Agregar practicas a realizar"+ "\n7-Eliminar Pracias a Realizar" +"\n8- Pagar Autorizacion" + "\n9- Actualizar Valores" +"\n10-Salir";
while (seleccion != 10) {
    switch(seleccion) {
        case 1:
            cargaUsuarios()
            break;
        case 2:
            ingresoSistema()
            break;
        case 3:
            cargaAfiliados()
            break;
        case 4:
            buscarAfiliados()
            break;
        case 5:
            mostrarAfiliados()
            break    
        case 6:
            agregarPracticas()
            break   
        case 7:
            eliminarCarrito()
            break   
        case 8:
            pagoCarrito()
            break 
        case 9:
            actualizarValoresCoseguro();
        default:
            break;
    
    }
        seleccion = parseInt(prompt(menu));
    }


 //Ingreso al sistema
function ingresoSistema() {
    usuario = parseInt(prompt("Ingrese DNI"));
    contrasenia = parseInt(prompt("Ingrese Contraseña numerica"));
    const encontrado = arrayUsuarios.find((usu) => usu.dni === usuario);
    const encontrado2 = arrayUsuarios.find((usu) => usu.password === contrasenia);
    
    console.log(encontrado);
    console.log(encontrado2);
    
    
    
    if ((encontrado != undefined) && (encontrado2 != undefined)) {
        alert("Bienvenido " + arrayUsuarios.map((usu) => usu.nombreApellido.toUpperCase()));
    }
    else {
        alert("Usuario y contraseña incorrecta");
    }
    
    }


// CARGA USUARIOS
function cargaUsuarios() {
    arrayUsuarios = [];
    var menu = "Ingrese dni de usuario a registrar \n \n***PARA SALIR INGRESE FIN***";
    let opcion =  prompt(menu);
    do {
      idUsuario = opcion;
      let nombreUsuario = prompt("Ingrese Nombre y Apellido");
      let contraseniaUsuario = prompt("Ingrese contraseña numerica");
      arrayUsuarios.push(
        new Usuarios(idUsuario,nombreUsuario,contraseniaUsuario)
      );
      opcion = prompt(menu);
    } while (opcion.toUpperCase() !== "FIN");
    
console.log(arrayUsuarios);
    }
    




//

// CARGA AFILIADOS
function cargaAfiliados() {
arrayAfiliados = [];
var menu = "Ingrese Numero de afiliado \n***PARA SALIR INGRESE FIN***";
let opcion =  prompt(menu);
do {
  idAfi = opcion;
  let nombreAfi = prompt("Ingrese Nombre");
  let apellidoAfi = prompt("Ingrese Apellido");
  let nacionalidadAfi = prompt("Ingrese Nacionalidad");
  let sueldoAfi = prompt("Ingrese Sueldo Afiliado");
  arrayAfiliados.push(
    new Afiliado(idAfi, nombreAfi, apellidoAfi, nacionalidadAfi, sueldoAfi)
  );
  opcion = prompt(menu);
} while (opcion.toUpperCase() !== "FIN");

console.log(arrayAfiliados);

}


// MOSTRAR AFILIADOS
function mostrarAfiliados() { 
for (let afi of arrayAfiliados) {
    console.log("ID AFILIADO: "+afi.id+"\nNOMBRE: "+afi.nombre+"\nAPELLIDO: "+afi.apellido+"\nNACIONALIDAD: "+afi.nacionalidad+"\nSUELDO:"+afi.sueldo );
    
} 
}

//BUSCAR AFILIADOS
function buscarAfiliados() {
let dni =  parseInt(prompt("Ingrese DNI"));
const encontrado = arrayAfiliados.find((afiliado) => afiliado.id == dni); // TRAE TODO EL OBJETO
if (encontrado != undefined) {
    alert("AFILIADO EN PADRON")
}
else {
    alert("AFILIADO INEXISTENTE");
}
}

//AGREGAR PRACTICAS

function agregarPracticas()  {
    let seleccion = prompt("Ingrese el ID de la practica que desea realizar \n" + practicas.map((producto) => producto.id + ".  " +producto.cod_nom+ "---" +producto.nom + "---$" + producto.coseguro + "\n") );
    carrito.push(practicas.find((producto) => producto.id == seleccion));
    console.log(carrito);6
}

// ELIMINAR PRACTICAS SELECCIONADAS

function eliminarCarrito() {
    let anda = prompt("ANDA");
    let carritomostrar = carrito.map((producto, index) => {return (index + 1) + " - " + producto.nom + " " + producto.coseguro + "\n"});
    let seleccion = prompt("Ingrese el # de la practica que desea eliminar del carrito \n" + carritomostrar.join(""));
    carrito.splice((seleccion - 1),1);
}

// PAGAR AUTORIZACION

function pagoCarrito() {
    let total = 0;
    let carritoMostrar = carrito.map((producto) => {
        total += producto.coseguro;
        return producto.nom + " $" + producto.coseguro + "\n";
    });
    alert(carritoMostrar.join("") +"\n" + "TOTAL A PAGAR: $" + total);
}


//ACTUALIZAR VALORES DE COSEGUROS.

function actualizarValoresCoseguro() {
   const preciosNuevos = practicas.map((e) => { 
    return { 
             id: e.id, 
             cod_nom: e.cod_nom, 
             nom: e.nom, 
             coseguro: parseFloat(e.coseguro*1.20)}})
  console.log(preciosNuevos);
}

    
