var preguntas = [
  { texto: "Un sabado libre, ¿que elegis?", opciones: [
    { texto: "Armar o desarmar algo", area: "tec" },
    { texto: "Ayudar a alguien que no se siente bien", area: "sal" },
    { texto: "Debatir sobre una noticia", area: "soc" },
    { texto: "Dibujar o grabar un video", area: "art" }
  ]},
  { texto: "En un trabajo grupal, vos sos quien...", opciones: [
    { texto: "Organiza los tiempos", area: "neg" },
    { texto: "Busca los datos", area: "exa" },
    { texto: "Explica el tema al resto", area: "edu" },
    { texto: "Cuida que sea justo para todos", area: "der" }
  ]},
  { texto: "Tu materia favorita seria...", opciones: [
    { texto: "Matematica o Fisica", area: "exa" },
    { texto: "Biologia", area: "sal" },
    { texto: "Historia", area: "soc" },
    { texto: "Plastica o Musica", area: "art" }
  ]},
  { texto: "Sale una app nueva. ¿Que pensas?", opciones: [
    { texto: "¿Como la programaron?", area: "tec" },
    { texto: "¿Como afecta a la gente?", area: "soc" },
    { texto: "¿Cuanto sale?", area: "neg" },
    { texto: "Me gustaria diseñar algo asi", area: "art" }
  ]},
  { texto: "En una serie, ¿que personaje te gusta mas?", opciones: [
    { texto: "El medico que salva el dia", area: "sal" },
    { texto: "El que organiza el plan", area: "neg" },
    { texto: "El que pelea por lo justo", area: "der" },
    { texto: "El que enseña al resto", area: "edu" }
  ]},
  { texto: "Seguirias un feed de...", opciones: [
    { texto: "Ciencia", area: "exa" },
    { texto: "Diseño o moda", area: "art" },
    { texto: "Noticias y politica", area: "der" },
    { texto: "Tecnologia", area: "tec" }
  ]},
  { texto: "Un amigo te cuenta un problema. Vos...", opciones: [
    { texto: "Lo escuchas y tratas de entenderlo", area: "soc" },
    { texto: "Le das consejos practicos", area: "neg" },
    { texto: "Le explicas otra forma de verlo", area: "edu" },
    { texto: "Te preocupas por su salud", area: "sal" }
  ]},
  { texto: "¿Que videos ves mas?", opciones: [
    { texto: "Tutoriales de tecnologia", area: "tec" },
    { texto: "Documentales de ciencia", area: "exa" },
    { texto: "Vlogs de viajes", area: "soc" },
    { texto: "Finanzas o negocios", area: "neg" }
  ]},
  { texto: "En una emergencia, vos...", opciones: [
    { texto: "Ayudas a calmar a los demas", area: "sal" },
    { texto: "Buscas una solucion rapida", area: "tec" },
    { texto: "Organizas que hacer", area: "neg" },
    { texto: "Cuidas que se sigan las reglas", area: "der" }
  ]},
  { texto: "¿Que actividad te gustaria probar?", opciones: [
    { texto: "Robotica", area: "tec" },
    { texto: "Teatro o arte", area: "art" },
    { texto: "Centro de estudiantes", area: "der" },
    { texto: "Dar apoyo escolar", area: "edu" }
  ]},
  { texto: "Se rompe algo en tu casa. Vos...", opciones: [
    { texto: "Intentas arreglarlo", area: "tec" },
    { texto: "Buscas quien lo arregle", area: "neg" },
    { texto: "Te preguntas por que paso", area: "exa" },
    { texto: "Pedis ayuda y aprendes mirando", area: "edu" }
  ]},
  { texto: "¿Que te daria mas orgullo?", opciones: [
    { texto: "Crear tu propia empresa", area: "neg" },
    { texto: "Ayudar a mejorar la vida de alguien", area: "sal" },
    { texto: "Diseñar algo que la gente use", area: "art" },
    { texto: "Descubrir algo nuevo", area: "exa" }
  ]},
  { texto: "En un debate familiar, vos...", opciones: [
    { texto: "Defendes tu postura con argumentos", area: "der" },
    { texto: "Tratas de entender a todos", area: "soc" },
    { texto: "Buscas datos concretos", area: "exa" },
    { texto: "Media para que no se pelee nadie", area: "edu" }
  ]},
  { texto: "¿Que problema te resulta entretenido?", opciones: [
    { texto: "Un acertijo de programacion", area: "tec" },
    { texto: "Organizar la plata de un evento", area: "neg" },
    { texto: "Por que pasa algo natural", area: "exa" },
    { texto: "Mejorar la convivencia de un grupo", area: "soc" }
  ]},
  { texto: "Darias una charla sobre...", opciones: [
    { texto: "El futuro de la tecnologia", area: "tec" },
    { texto: "Salud mental", area: "sal" },
    { texto: "Derechos humanos", area: "der" },
    { texto: "Creatividad y arte", area: "art" }
  ]},
  { texto: "En un viaje de egresados, vos...", opciones: [
    { texto: "Armas el presupuesto", area: "neg" },
    { texto: "Sacas fotos y videos", area: "art" },
    { texto: "Cuidas que todos esten bien", area: "sal" },
    { texto: "Investigas los lugares antes", area: "exa" }
  ]},
  { texto: "¿Que te da mas satisfaccion?", opciones: [
    { texto: "Que algo que armaste funcione", area: "tec" },
    { texto: "Que alguien entienda algo gracias a vos", area: "edu" },
    { texto: "Que se haga justicia", area: "der" },
    { texto: "Que un proyecto crezca", area: "neg" }
  ]},
  { texto: "Elegis una materia nueva...", opciones: [
    { texto: "Programacion", area: "tec" },
    { texto: "Filosofia", area: "soc" },
    { texto: "Anatomia", area: "sal" },
    { texto: "Economia", area: "neg" }
  ]},
  { texto: "¿Que frase te representa?", opciones: [
    { texto: "Investigo hasta entender todo", area: "exa" },
    { texto: "Siempre estoy ideando cosas nuevas", area: "art" },
    { texto: "Me gusta que otros aprendan de mi", area: "edu" },
    { texto: "No banco las injusticias", area: "der" }
  ]},
  { texto: "Por ultimo, ¿que te haria mas feliz?", opciones: [
    { texto: "Crear tecnologia", area: "tec" },
    { texto: "Cuidar y sanar", area: "sal" },
    { texto: "Entender a las personas", area: "soc" },
    { texto: "Liderar y emprender", area: "neg" }
  ]}
];

var carreras = {
  tec: "Ingenieria en Sistemas",
  sal: "Medicina",
  soc: "Psicologia",
  art: "Diseño Grafico",
  neg: "Administracion de Empresas",
  exa: "Quimica",
  edu: "Profesorado",
  der: "Abogacia"
};

var preguntaActual = 0;
var puntos = { tec: 0, sal: 0, soc: 0, art: 0, neg: 0, exa: 0, edu: 0, der: 0 };

var pantallaInicio = document.getElementById("pantalla-inicio");
var pantallaQuiz = document.getElementById("pantalla-quiz");
var pantallaResultado = document.getElementById("pantalla-resultado");
var textoPregunta = document.getElementById("texto-pregunta");
var contenedorOpciones = document.getElementById("opciones");
var contador = document.getElementById("contador");
var textoResultado = document.getElementById("texto-resultado");

document.getElementById("boton-empezar").addEventListener("click", function () {
  pantallaInicio.classList.add("oculto");
  pantallaQuiz.classList.remove("oculto");
  mostrarPregunta();
});

document.getElementById("boton-repetir").addEventListener("click", function () {
  preguntaActual = 0;
  puntos = { tec: 0, sal: 0, soc: 0, art: 0, neg: 0, exa: 0, edu: 0, der: 0 };
  pantallaResultado.classList.add("oculto");
  pantallaInicio.classList.remove("oculto");
});

function mostrarPregunta() {
  var pregunta = preguntas[preguntaActual];
  contador.textContent = (preguntaActual + 1) + "/" + preguntas.length;
  textoPregunta.textContent = pregunta.texto;

  contenedorOpciones.innerHTML = "";

  for (var i = 0; i < pregunta.opciones.length; i++) {
    var opcion = pregunta.opciones[i];
    var boton = document.createElement("button");
    boton.textContent = opcion.texto;
    boton.classList.add("opcion");
    boton.addEventListener("click", function (area) {
      return function () {
        elegirOpcion(area);
      };
    }(opcion.area));
    contenedorOpciones.appendChild(boton);
  }
}

function elegirOpcion(area) {
  puntos[area] = puntos[area] + 1;
  preguntaActual = preguntaActual + 1;

  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  var areaGanadora = "tec";
  var puntosMaximos = 0;

  for (var area in puntos) {
    if (puntos[area] > puntosMaximos) {
      puntosMaximos = puntos[area];
      areaGanadora = area;
    }
  }

  textoResultado.textContent = carreras[areaGanadora];

  pantallaQuiz.classList.add("oculto");
  pantallaResultado.classList.remove("oculto");
}
