# Catálogo de productos.

## Arquitectura del proyecto. 
0. Funcionalidad
    - Carrito de compras
        - Crear un producto
        - Mostrar el producto
        - Modificar el producto
        - Calculadora de precio
        - Eliminar el producto
        - Empaquetar productos 
    - Display de productos
        - Crear producto
        - Mostrar producto
        - Modificar producto
        - Reordenar productos
    - Creador de contenidos
        - CRUD sobre un producto
1. Stores
    - ProductStore -> API para recibir productos
2. Rutas y Views
    - / -> HOME -> Display de productos
    - /chart -> CHART -> Display de la compra 
    - /creator -> CREATOR -> Display de creación
3. Componentes
    - Product Card -> F: Añadir, ocultar, borrar
    - SearchBar -> F: Filtrar y reordenar
    - Header y Footer


## Objetos

### Producto
El objeto producto viene definido, desde el back, por la siguiente forma: 

```js
producto: {
    "id": Number,
    "name": String,
    "value": Number,
    "description": String,
    "image": String,
    "stock": Number,
    "quantity": Number
}
```