var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
  var obtenerEstudiantes = [];
  for(var i = 0;i < obtenerEstudiantes;i++){
      var estudiantes = obtenerEstudiantes[i];
  }



    obtenerEstudiantes.push(estudiantes);

}
obtenerListaEstudiantes();

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar8 el estudiante recientemente creado
    var preguntas = ["Nombre de Estudiante",
                     "Puntos Técnicos",
                     "Puntos HSE",
                    ];
    var respuestas = [];
    var numeroPreguntas = preguntas.length;
    for(var indice = 0; indice < numeroPreguntas; indice++){
    var guardarRespuestas = prompt(preguntas[indice]);
    respuestas.push(guardarRespuestas);
    }


}
agregarEstudiante();


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante

    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var lista = lista.length
        for (var i = 0, limite = lista; i < limite; i++) {
                var estudiante = lista[i];
  }
  mostrarLista();
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
