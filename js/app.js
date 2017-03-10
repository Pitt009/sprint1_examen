var estudiantes = []; //arreglo vacio

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
  }



function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar8 el estudiante recientemente creado
    var nombreEstudiante = prompt("Ingresa Nombre del estudiante");// ventana emergente input
    var puntosTecnicos = prompt("Ingresa Puntos Técnicos");
    var puntosHSE = prompt("Ingresa Puntos HSE");
    var estudiante = { //objeto literal
        nombre : nombreEstudiante, // propiedades
        puntosT: puntosTecnicos,
        puntosEmo : puntosHSE,
      };
      estudiantes.push(estudiante); // guarda en el arreglo las propiedades
      return estudiante;
 }

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>"; // completar con propiedades del objeto
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosT + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosEmo + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
  var resultado = " "; // string vacio
  var lista = estudiantes.forEach(function (estudiante){
    resultado += mostrar(estudiante);
    });
  return resultado;
  }


function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var buscarEstudiante = estudiantes.filter(function (estudiante) {
      return estudiante.nombre.toLowerCase() === nombre.toLowerCase();

    });
return buscarEstudiante;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    return estudiantes.sort(function (a,b) {
      return a.puntosT < b.puntosT;

    });

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return estudiantes.sort(function (a,b) {
      return a.puntosEmo < b.puntosEmo;

    });

}
