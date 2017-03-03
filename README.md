# Hola Mundo de la arquitectura MVP

Este ejemplo usa la base de datos *test* en mongo, y pretende hacer un CRUD de
*recicladores* bajo el esquema Model-viewer-presenter

# API
| Metodo | Ruta            | recibe                                        | Descripcion                                    |
|--------+-----------------+-----------------------------------------------+------------------------------------------------|
| GET    | /reciclador     |                                               | Devuelve lista Json con todos los recicladores |
| POST   | /reciclador     | { id: String, name: String, lastname: String} | Agrega un Reciclador a la DB                   |
| PUT    | /reciclador/:id | { name: String, lastname: String}             | Modifica datos de un Reciclador dado su id     |
| DELETE | /reciclador/:id |                                               | Elimina un Reciclador dado su id               |
