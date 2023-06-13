import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

function calcular (){

  const CajaTexto = document.querySelector("#cuadroTexto textarea");
  const contenido= CajaTexto.value;
  //contar palabras
  const numeroPalabras=analyzer.getWordCount(contenido);
  const mostrarResultadopalabras=document.querySelectorAll("li")[0];
  mostrarResultadopalabras.textContent="Cantidad de palabras:" + numeroPalabras;

  //contar caracteres 
  const caracteres = analyzer.getCharacterCount(contenido);
  const mostrarResultadocaracteres=document.querySelectorAll("li")[1];
  mostrarResultadocaracteres.textContent = "Número de caracteres:" + caracteres;

  //contar caracteres sin espacios 
  const caracteresFiltrados= analyzer.getCharacterCountExcludingSpaces(contenido) 
  const resultadoCaracteres=document.querySelectorAll("li")[2];
  resultadoCaracteres.textContent = "Números de caracteres sin espacio:" + caracteresFiltrados;

  //contarnumeros
  const numerosEncontrados = analyzer.getNumberCount(contenido)
  const resultadoNumeros= document.querySelectorAll("li")[3];
  resultadoNumeros.textContent= "Cantidad de números:" + numerosEncontrados;
 
  //suma numeros
  const sumaNumeros = analyzer.getNumberSum(contenido);
  const resultadoNumerossuma= document.querySelectorAll("li")[4];
  resultadoNumerossuma.textContent="Suma de los números:" + sumaNumeros;

  //promedio longitud palabras
  const promedioPalabras = analyzer.getAverageWordLength(contenido)
  const resultadoPalabras= document.querySelectorAll("li")[5];
  resultadoPalabras.textContent = "Longitud promedio de palabras:" + promedioPalabras.toFixed(2);
}

const CajaTexto = document.querySelector("#cuadroTexto textarea")
CajaTexto.addEventListener("keyup",calcular)

//boton para borrar contenido de textarea

function botonborrar () {
  const  CajaTexto  = document.querySelector("#cuadroTexto textarea");
  CajaTexto.value ="";
}

const borrartexto =document.getElementById("reset-button")
borrartexto.addEventListener("click",botonborrar)

