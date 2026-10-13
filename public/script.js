class Test {
  constructor(preguntas, carreras) {
    this.preguntas = preguntas;
    this.carreras = carreras;
    this.respuestas = [];
  }

  responder(area) {
    this.respuestas.push(area);
  }

  volver() {
    this.respuestas.pop();
  }

  terminado() {
    return this.respuestas.length === this.preguntas.length;
  }

  puntos() {
    const puntos = {};
    for (const area in this.carreras) {
      puntos[area] = 0;
    }
    for (const area of this.respuestas) {
      puntos[area] = puntos[area] + 1;
    }
    return puntos;
  }

  resultado() {
    const puntos = this.puntos();
    const areas = Object.keys(puntos)
      .filter((area) => puntos[area] > 0)
      .sort((a, b) => puntos[b] - puntos[a]);
    return areas.slice(0, 2).map((area) => this.carreras[area]);
  }
}

let test;

const pantallas = {
  inicio: document.getElementById("pantalla-inicio"),
  quiz: document.getElementById("pantalla-quiz"),
  resultado: document.getElementById("pantalla-resultado"),
  error: document.getElementById("pantalla-error")
};
const textoUltimo = document.getElementById("texto-ultimo");
const contador = document.getElementById("contador");
const progreso = document.getElementById("progreso");
const textoPregunta = document.getElementById("texto-pregunta");
const contenedorOpciones = document.getElementById("opciones");
const botonVolver = document.getElementById("boton-volver");
const textoResultado = document.getElementById("texto-resultado");
const textoSegundo = document.getElementById("texto-segundo");

document.getElementById("boton-empezar").addEventListener("click", empezar);
document.getElementById("boton-reintentar").addEventListener("click", empezar);
botonVolver.addEventListener("click", volver);
document.getElementById("boton-repetir").addEventListener("click", repetir);

mostrarUltimo();

function mostrar(nombre) {
  for (const clave in pantallas) {
    pantallas[clave].classList.add("oculto");
  }
  pantallas[nombre].classList.remove("oculto");
}

function pedir(url) {
  return fetch(url).then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error("Error al pedir " + url);
    }
    return respuesta.json();
  });
}

function empezar() {
  Promise.all([pedir("/api/preguntas"), pedir("/api/carreras")])
    .then(([preguntas, carreras]) => {
      test = new Test(preguntas, carreras);
      mostrar("quiz");
      mostrarPregunta();
    })
    .catch(() => {
      mostrar("error");
    });
}

function mostrarPregunta() {
  const numero = test.respuestas.length;
  const total = test.preguntas.length;
  const pregunta = test.preguntas[numero];

  contador.textContent = (numero + 1) + "/" + total;
  progreso.style.width = (numero / total * 100) + "%";
  textoPregunta.textContent = pregunta.texto;
  botonVolver.classList.toggle("oculto", numero === 0);
  contenedorOpciones.innerHTML = "";

  pregunta.opciones.forEach((opcion) => {
    const boton = document.createElement("button");
    boton.textContent = opcion.texto;
    boton.classList.add("opcion");
    boton.addEventListener("click", () => elegirOpcion(opcion.area));
    contenedorOpciones.appendChild(boton);
  });
}

function elegirOpcion(area) {
  test.responder(area);
  if (test.terminado()) {
    mostrarResultado();
  } else {
    mostrarPregunta();
  }
}

function volver() {
  test.volver();
  mostrarPregunta();
}

function mostrarResultado() {
  const carreras = test.resultado();
  textoResultado.textContent = carreras[0];
  textoSegundo.textContent = "También podría gustarte: " + carreras[1];
  textoSegundo.classList.toggle("oculto", carreras.length < 2);
  window.localStorage.setItem("ultimaCarrera", carreras[0]);
  mostrar("resultado");
}

function repetir() {
  mostrarUltimo();
  mostrar("inicio");
}

function mostrarUltimo() {
  const guardada = window.localStorage.getItem("ultimaCarrera");
  if (guardada) {
    textoUltimo.textContent = "Tu último resultado: " + guardada;
  }
  textoUltimo.classList.toggle("oculto", !guardada);
}
