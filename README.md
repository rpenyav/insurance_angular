

# Proyecto de Aplicación para Seguros

Este proyecto es una aplicación para la gestión de seguros, desarrollada por [Rafa Peña](mailto:rafa@rafapenya.com).

## Instrucciones

Antes de levantar esta aplicación, asegúrate de seguir estos pasos para levantar el backend:

1. Clona el repositorio del backend desde GitHub: `git clone https://github.com/rpenyav/nest_backend.git`
2. Instala las dependencias del backend: `yarn install`
3. Rellena y renombra el archivo `.env.template` a `.env` para configurar la conexión a la base de datos.
4. Levanta los contenedores de Docker y la base de datos MySQL localmente: `docker-compose up -d`
5. Inicia el backend en modo desarrollo: `start:dev:docker`

Una vez hayas configurado y levantado el backend, puedes proceder a levantar esta aplicación siguiendo las instrucciones previamente proporcionadas.


### Ejecución del frontend
Para ejecutar la aplicación, sigue los siguientes pasos:

1. Clona el repositorio desde GitHub: `git clone https://github.com/rpenyav/insurance_angular.git`
2. Instala las dependencias: `npm install`
3. Renombra el archivo `.env.template` a `.env` y configura las variables de entorno necesarias.

### Build
Para compilar el proyecto, utiliza el siguiente comando: `ng build`. Los archivos compilados se guardarán en la carpeta `dist/`.

### Test
Los test unitarios se realizan con Karma. Para ejecutar los tests, utiliza el siguiente comando: `ng test`.


## Documentación

Este proyecto utiliza [Compodoc](https://compodoc.app/) para generar la documentación del código. Puedes acceder a la documentación en el path: [Documentación](/documentation dentro del proyecto).

## ESlint

El proyecto utiliza ESlint para mantener un código limpio y consistente. Las reglas de linting se encuentran configuradas en el archivo `.eslintrc.js`.

## Renovate

Renovate es una herramienta que automatiza las actualizaciones de dependencias en el proyecto. Ayuda a mantener las dependencias actualizadas con las últimas versiones disponibles, lo que mejora la seguridad y la estabilidad del proyecto.

## Docker

Este proyecto está dockerizado y preparado para el despliegue. Puedes construir la imagen de Docker utilizando el archivo `Dockerfile` y luego ejecutar la aplicación en un contenedor.

Si tienes alguna pregunta o sugerencia, no dudes en contactarme o abrir un problema en el repositorio de GitHub. ¡Gracias por tu interés en este proyecto!
