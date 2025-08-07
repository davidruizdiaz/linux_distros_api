# Documentación de la API de Distros

Bienvenido a la API de Distros!
Esta API te permite consultar una lista de distribuciones de Linux.

-----

## Endpoints Disponibles

### 1\. Obtener todas las distros

`GET /distros`

  - **Descripción:** Retorna un array JSON con todas las distribuciones.

### 2\. Filtrar distros por propiedades

`GET /search`

  - **Descripción:** Filtra las distribuciones por parámetros de consulta de forma case-insensitive.
  - **Ejemplo:** `/search?name=ubuntu&category=desktop`
      - Esto devolverá todas las distros que coincidan con los filtros.



### Ejemplo de Retorno

```json
[
  {
    "id": "e0e3b62f-7f9e-4c70-9831-299f18a80d4f",
    "identifier": "ubuntu",
    "name": "Ubuntu",
    "description": "Una distribución de Linux popular y fácil de usar, basada en Debian.",
    "distrowatch_page": "https://distrowatch.com/ubuntu",
    "image_path": "/images/ubuntu.webp",
    "homepage": "https://ubuntu.com/",
    "light_badge_path": "/badges/ubuntu-light.svg",
    "dark_badge_path": "/badges/ubuntu-dark.svg"
  },
  // ... más objetos de distribución
]
```
