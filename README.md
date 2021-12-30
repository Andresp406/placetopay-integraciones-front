# PlacetopayFront

Este Proyecto usa [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Instalaciones neesarias

se debe instalar node de manera global descargandolo desde la pagina principal, ademas se debe instalar las dependencias de node_modules con el comando `npm install` luego se corre la aplicacion con el comando `ng serve -o`  

## Datos del sistemas

Este sistema consta de una estructura de directorios donde encontramos los component que es donde estan los componentes como modales footer y las card donde se visualizan los productos, ademas contiene la carpeta de guard para proteger las rutas de login y register, por otro lado contiene la carpeta de interfaces que son las que nos ayudan al tipado estricto de typescript, las pages que son las que hacen la aplicacion una SPA las cuales son home y orders, este sistema cuenta con variables de entorno para poder consumir los endpoint de manera correcto ademas tiene una carpeta de shared donde se encuentran las validaciones de los formularios y un componente que es el cierre de las modales, cada carpeta esta construida con su respectivo modulo para hacer la carga mas eficiente

## Paquetes de terceros

los paquetes que use fueron ngx-toast, ngx-loader, ngx-bootstrap

