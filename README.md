
**Proyecto Javascript: Calculadora de DPS y Evaluadora de Armas para Path of Exile**

Alumno: Alexis Mariano Paz
Curso: JavaScript

Buenos días, tardes, noches mi estimado Samuel. El proyecto esta incorporado a la web que habia hecho para el curso
de Desarrollo Web.

# HTML Calculadora: ./pages/calculator.html
* Consta de un formulario donde hay que introducir obligatoriamente un valor a la velocidad y los otros campos puede llenarse el que quieras (si queda vacio es igual a 0).
* Cada tipo de daño es calculado de la siguiente forma: El promedio del daño mínimo y máximo multiplicado por la velocidad.
* El daño elemental es la suma de fuego, hielo y rayo.
* El daño total es la suma de elemental, físico y caos.
* La clase del arma determina el dibujo que tendra la ficha y es un parámetro extra a la hora de evaluar dicha arma y asignarle un tier.


# Script: ./scripts/calculator.js  
* Se encarga del funcionamiento de la calculadora y la creación de fichas de las armas calculadas y su evaluación.
* El boton de calcular además de mostrar los resultados, crea una ficha que es guardada en el localStorage.
* El boton de mostrar armas carga desde el localStorage todas las fichas creadas.
* El boton de borrar armas vacía las fichas del localStorage, tambien cada ficha cuenta con un boton para borrarlas       individualmente.


# Script:  ./scripts/localization.js
* Esta fue mi idea para intentar hacer algo con Fetch, usa los 2 archivos dentro de ./localization (english.json y spanish.json) para guardar los textos de la calculadora en los 2 idiomas y que puedan ser cambiados en cualquier momento por los botones redondos en el comienzo del main.
* El ultimo idioma cambiado es guardado en el localStorage para que al recargar la página se conserve el idioma.


Bueno profe, espero no volverlo loco con un trabajo que creo que la complique de más y además por hacerlo sobre un tema tan raro para alguien que no juega ese juego.

