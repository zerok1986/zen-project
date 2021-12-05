# ZEN project   

Una app que pone en común a profesionales y usuarios de actividades ZEN como Yoga, Meditación o Taichí

## Puntos principales 📦

1. Planificación de server
    - Lista de endpoints en .md
    - Lista de modelos con cada propiedad y tipo de dato
2. Planificación de cliente
    - Lista de componentes, planificando props.
    - Planificar de cada uno su estado y props, siempre que sea posible
    - Opcional: planificar un mockup por cada uno.
3. Desarrollo de server
    - Desarrollo de endpoints siguiendo el punto 1.a
    - Testeo de endpoints con Postman
4. Desarrollo de cliente
Desarrollo de componentes siguiendo punto 2.a
5. Escalabilidades, por cada una
    - Viabilidad: estudiar la relación coste/valor de la escalabilidad mediante el cálculo de tiempo, dificultad y valor que añade a la aplicación
    - Planificar escalabilidad de lado de servidor siguiendo puntos 1
    - Planificar escalabilidad de lado de cliente siguiendo puntos 2
    - Desarrollo servidor siguiendo puntos 3
    - Desarrollo cliente siguiendo puntos 4

- Usuarios y Privilegios:
  - USER -> usuario estándar de la app. Puede crear citas y matchearlas con actividades de su interés en su zona/horario elegidas
  - TEACHER -> Puede crear actividades con horario y zona definida. Puede determinar nº de participantes minimo y puede confirmar actividad completa
  - GOD -> Puede editar/eliminar usuarios, teachers, actividades, cita, y reviews.

## Endpoints

| Method | Path              | Description                                          |
| ------ | ----------------- | ---------------------------------------------------- |
| get    | /                 | Muestra la Home con Login/Signup                     |
| get    | /allActivities    | Muestra la lista de actividades en la Home loggeada  |
| get    | /activity/:id     | Muestra detalles de una actividad                    |
| post   | /new Activity     | Crea nueva actividad (TEACHER)                       |
| put    | /editActivity/:id | Edita en la BBDD la actividad (GOD)                  |
| delete | /deleteAct/:id    | Borra la actividad (TEACHER, GOD)                    |
| get    | /allAppointments  | Muestra la lista de citas en la Home loggeada        |
| post   | /newAppointment   | Crea nueva cita (USER)                               |
| delete | /deleteApp:id     | Borra la cita (USER, GOD)                            |
| get    | /profile/:id      | Muestra detalles del perfil (USER, TEACHER)          |
| put    | /editProfile/:id  | Edita el perfil (USER, TEACHER, GOD)                 |
| delete | /deleteProf/:id   | Borra al usuario (GOD)                               |
| post   | /signup           | Guarda el nuevo usuario                              |
| post   | /login            | Guarda la nueva sesión de usuario loggeado           |
| get    | /logout           | Borra la sesión de usuario loggeado                  |
| get    | /isloggedin       | Middleware que comprueba si hay usuario loggeado     |

## Project Info

- ComicVine API:
  - JSON
  - API Key
  - 200 request/day
  - Busqueda a través de querys
- Marvel API
  - JSON
  - API Key unica tras registro
  - 3000 request/day
  - md5 digest para generar un hash

### BONUS

- Recomendaciones
- Nivel
- Rol de Moderador

### APIs Info

- ComicVine API info and base-endpoint: https://comicvine.gamespot.com/api
- Marvel API doc: https://developer.marvel.com/documentation/generalinfo
- Marvel base-endpoint: http://gateway.marvel.com/v1/public

## Comenzando 🚀

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_TODO_

### Instalación 🔧

`npm install` o `npm i`

## Despliegue 📦

`npm run start`

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

- NodeJS
- Express
- MongoDB
- Mongoose
- ComicVine API
- Vanilla JavaScript

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

- **Fulanito Detal** - _Documentación_ - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- etc.
