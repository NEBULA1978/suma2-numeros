window.onload = inicio;
// variable wardar suma numeros cada recarga
let sumaCorrecta, a, b;


function inicio() {
  preguntar();
  document.querySelector("button").onclick = comprobar;
  document.querySelector(".tres").onKeydown = teclado;
	
 
}

function teclado(e) {
  let tecla = e.key;
  if ((tecla = "Enter")) {
    comprobar();
  }
}



function comprobar() {
  let c = Number(document.querySelector(".tres").value);

  if (c == sumaCorrecta) {
    document.querySelector(".resultados").innerHTML += "</br>" + "</br>";
    document.querySelector(
      ".resultados"
    ).innerHTML += `Has acertado: El resultado de ${a} + ${b} es ${sumaCorrecta}`;
  } else {
    document.querySelector(".resultados").innerHTML += "</br>" + "</br>";
    document.querySelector(
      ".resultados"
    ).innerHTML += `No has acertado: El resultado de ${a} + ${b} es ${sumaCorrecta}`;
  }
  preguntar();
}






function preguntar() {
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);

  //variable sume dos numeros:
  sumaCorrecta = a + b;
  //escribir valores dentro del input
  document.querySelector(".uno").value = a;
  document.querySelector(".dos").value = b;
  //le digo que vacie input
  document.querySelector(".tres").value = "";
  //mete cursor dendtro despues puldsar boton
  document.querySelector(".tres").focus();
}



