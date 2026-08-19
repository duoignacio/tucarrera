# tucarrera

Este es un trabajo que hicimos para armar un test vocacional simple. Le hace 20 preguntas al usuario y al final le dice una carrera que podria gustarle.

## Que archivos tiene

Son 3 archivos, cada uno hace una cosa distinta:

- **index.html**: es donde esta todo el contenido de la pagina (los textos y los botones).
- **style.css**: es donde pusimos los colores y como se ve todo.
- **script.js**: es donde esta toda la programacion, lo que hace que la pagina funcione.

## Como lo pensamos

Primero pensamos que la pagina iba a tener 3 pantallas nomas:

1. Una pantalla de inicio con un boton que dice "Empezar".
2. Una pantalla donde aparecen las preguntas, una por una.
3. Una pantalla final que muestra la carrera que te toco.

Para que se vea una sola pantalla por vez, hicimos que las otras dos queden escondidas. Eso lo hacemos con una clase que se llama "oculto", que en el css tiene puesto que no se muestre. Despues con la programacion vamos sacando y poniendo esa clase segun en que parte del test estas.

## Como armamos las preguntas

Hicimos una lista con las 20 preguntas. Cada pregunta tiene su texto y 4 opciones para elegir. A cada opcion le pusimos una "letra" que representa un area, por ejemplo "tec" es tecnologia y "sal" es salud. Despues hicimos otra lista que dice que carrera le corresponde a cada area, por ejemplo tec es Ingenieria en Sistemas.

## Como funciona el puntaje

Arrancamos con todas las areas en 0. Cada vez que elegis una opcion, le sumamos 1 punto al area de esa opcion. Al terminar las 20 preguntas, nos fijamos cual area quedo con mas puntos y esa es la carrera que mostramos al final.

## Los botones

Cada vez que aparece una pregunta, armamos un boton por cada opcion. Cuando tocas un boton, se suma el punto y pasa a la siguiente pregunta, hasta que se acaban y muestra el resultado. Tambien hay un boton de "Repetir" que vuelve todo a cero por si querés hacerlo de nuevo.

## Cosas que le podriamos agregar

- Mas preguntas.
- Que se acuerde el resultado aunque cierres la pagina.
- Sumar informacion de universidades donde estudiar cada carrera.
