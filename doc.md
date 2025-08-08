# Documentación de la API de Distros

Esta es una API RESTful diseñada para interactuar con un conjunto de datos de distribuciones de Linux. Provee un punto de acceso HTTP para recuperar, filtrar y manipular información de forma programática. La API está construida sobre una arquitectura sin estado, utiliza JSON como formato de intercambio de datos y adhiere a principios REST para una interoperabilidad eficiente y escalable.

### URL Base

La URL base para todos los endpoints es: `https://linux-distros-api.onrender.com`

-----

## Endpoints Disponibles

### 1\. Obtener todas las distros

`GET /distros`

  - **Descripción:** Retorna un array JSON con todas las distribuciones disponibles en la base de datos.

  - **Ejemplo de Retorno:**

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
      }
    ]
    ```

  - **Ejemplo de Uso:**

    **Usando cURL (desde la terminal):**

    ```bash
    curl "https://linux-distros-api.onrender.com/distros"
    ```

    **Usando JavaScript (con `fetch`):**

    ```javascript
    fetch('https://linux-distros-api.onrender.com/distros')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    ```

-----

### 2\. Filtrar distros por propiedades

`GET /search`

  - **Descripción:** Filtra las distribuciones por parámetros de consulta (`query parameters`) de forma **case-insensitive**. Se pueden usar uno o varios filtros a la vez.

  - **Parámetros:** Cualquier propiedad del objeto distro, como `name`, `identifier` o `description`.

  - **Ejemplo de Uso:**

    **URL de Ejemplo:**
    `https://linux-distros-api.onrender.com/search?name=[nombre de la distribución]`

    o

    `https://linux-distros-api.onrender.com/search?name=[nombre de la distribución]&description=[parte de la descripción]`

    **Usando cURL (desde la terminal):**

    ```bash
    curl "https://linux-distros-api.onrender.com/search?name=ubuntu"
    ```

    **Usando JavaScript (con `fetch`):**

    ```javascript
    const url = 'https://linux-distros-api.onrender.com/search?name=ubuntu';

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    ```
