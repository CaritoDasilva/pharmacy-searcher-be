# Cencosud API Test

# Links

| Plataforma | Links |
| ------ | ------ |
| GitHub | https://github.com/CaritoDasilva/pharmacy-searcher-be |
| EC2 Deploy | http://18.221.149.135/api/communes/7 |
| Heroku Deploy | https://pharmacy-searcher-be.herokuapp.com/api/communes/7 |
| Portafolio | https://www.caritodasilva.work/ |

*Se realizó un deploy adicional en Heroku para evitar el error de Cors Origin Blocked

# API Documentation:
  - /api/communes/7 => Trae farmacias de turno y comunas disponibles.
  Body response:

>       
        {
           "communes": [],
           "pharmacys": []
        }

## Implementación

> Se construyó una api que permite traer todas las farmacias que se encuentran en turno en una región y adicional se trae todas las comunas en las cuales esas farmacias pueden estar.
> Se implementó la solución consultando el endpoint que traía la información de esas farmacias, agregando una lógica aidcional que trae un arreglo de las comunas para evitar que el front hiciera iteraciones innecesarias o nuevas llamadas al backend.
> También se hizo una configuración inicial de a medición del coverage para un futuro desarrollo de test unitarios.
> Por último mencionar que se realizó el front end con React/NextJS, desde donde se consume este servicio.
>Se utilizo una arquitectura MVC para la estructura del proyecto.


### Instalación

Instalación de dependencias
```sh
$ npm install
```

Para correr el proyecto

```sh
$ node server.js || npm run start
```
