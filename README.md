
# T3-API BEDU

Equipo T3

  

## Descripción

Api que sigue standard REST para realizar publicaciones sobre diferentes temas.

  

## Enlace al proyecto

[t3-api](https://t3-api-bedu.herokuapp.com/)

  

## Historias de usuario

1. Como super usuario de t3-api quiero poder visualizar todas las publicaciones realizadas por los demás usuarios para poder moderar las publicaciones.

2. Como super usuario de t3-api quiero poder borrar cualquier publicación realizada por los demás usuarios en caso de que infrinjan las reglas del api para garantizar un entorno seguro para todos.

3. Como escritor de t3-api quiero poder crear mis propias publicaciones para compartir mis ideas con los demás.

4. Como usuario de t3-api quiero poder dar un me gusta a cualquiera de las publicaciones hechas por los demás usuarios para manifestar mi aprobación de sus publicaciones.

5. Como escritor de t3-api quiero poder editar mis publicaciones para corregir algún posible error en mi publicación.

6. Como escritor de t3-api quiero poder borrar cualquiera de mis publicaciones en caso de que me retracte de cualquier publicación que haya hecho en el pasado.

  

## Rutas Usuarios

- GET /api/v1/user : Esta ruta solo saluda

- POST /api/v1/user/signup : Esta ruta te permite registrate los datos que debera tener son:
	- email
	- password
	- firstName
	- lastName
	- userName

- POST /api/v1/user/login : Esta ruta te permite ingresar como usario

- GET /api/v1/user/getuser : Regresa un usuario, es solo para pruebas

## Rutas publicaciones

- POST /api/v1/post : Te permite crear publicaciones
  - TOKEN de autenticación
  - title
  - text

- GET /api/v1/post/<id> : Te permite obtener una publicacion por su ID

- GET /api/v1/post/ : te permite obtener un listado paginado de las publicaciones

- PATCH /api/v1/post/<id> : Te permite actualizar parcial o totalmente una publicacion