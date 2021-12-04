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
  - USER 
  - TEACHER 
  - GOD

## Endpoints

| Method | Path              | Description                                          |
| ------ | ----------------- | ---------------------------------------------------- |
| get    | /                 | Muestra el index                                     |
| get    | /users            | Muestra la lista de usuarios                         |
| get    | /users/:id        | Muestra los detalles de un usuario                   |
| get    | /users/:id/edit   | Editar usuario (Admin y propio usuario)              |
| post   | /users/:id/edit   | Edita en la BBDD el usuario                          |
| get    | /users/:id/delete | Borra usuario (Admin y propio usuario)               |
| get    | /auth/login       | Muestra formulario login                             |
| post   | /auth/login       | Envía formulario de login                            |
| get    | /auth/signup      | Muestra formulario de signup                         |
| post   | /auth/signup      | Guarda en la BBDD un usuario                         |
| get    | /auth/logout      | Cierra sesion usuario                                |
| get    | /comics           | Muestra resultados de la busqueda                    |
| get    | /comics/:id       | Muestra vista de detalles del comic                  |
| post   | /comics/:id       | Guarda el comic en el Array de comics de ese usuario |

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
