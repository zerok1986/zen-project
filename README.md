# moksha  

Una app que pone en común a profesionales y usuarios de actividades como Yoga, Meditación o Taichí
¡La mejor app del mundo!

## Puntos principales 📦

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
| post   | /newActivity      | Crea nueva actividad (TEACHER)                       |
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

## APIs Info

- @react-google-maps/api
  - API key and API secret
  - npm package
  - quick access to GMaps API functionality
  - $300 credit for requests
- react-geocode
  - Google API Key
  - npm package
  - help us transform addresses to latitude and longitude coordinates

### APIs Info

- @react-google-maps/api: https://www.npmjs.com/package/@react-google-maps/api
- react-geocode: https://www.npmjs.com/package/react-geocode


## Comenzando 🚀

Mira **Despliegue** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_TODO_

### Instalación 🔧

`npm install` o `npm i` en el servidor y en el cliente

## Variables de entorno del servidor 📦

Crear un archivo .env en el servidor con los siguientes datos:

 - PORT=5000
 - ORIGIN=http://localhost:3000
 - SESS_SECRET=migatoeselmejorgato
 - DB_REMOTE=Ask us to get access to the DB!
 - CLOUDINARY_NAME=Your Cloudinary Name
 - CLOUDINARY_KEY=Your Clodinary Key
 - CLOUDINARY_SECRET=Your Cloudinary Secret

## Despliegue 📦

`npm run dev` en el servidor y `npm start` en el cliente

## Construido con 🛠️

- React
- NodeJS
- Express
- MongoDB
- Mongoose
- Vanilla JavaScript
- Material UI
- React Bootstrap
- CSS3
- @react-google-maps/api
- react-geocode

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores ✒️

- **Miguel Muñoz** - _IronHack_ - [mimues](#https://github.com/mimues)
- **Marcos Fernández** - _IronHack_ - [marferbl](#https://github.com/marferbl)
- **Miguel Angel Abad** - _IronHack_ - [zerok1986](#https://github.com/zerok1986)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

Con la inestimable ayuda de nuestros TAs y Lead Instructor:

Sara Mansori 🧠
Laura de Cos 🦆
Guille Concepción 👾
Teo López 🤓
