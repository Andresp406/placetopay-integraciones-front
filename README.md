# PlacetopayFront

Este Proyecto usa [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Instalaciones neesarias

se debe instalar node de manera global descargandolo desde la pagina principal, ademas se debe instalar las dependencias de node_modules con el comando `npm install` luego se corre la aplicacion con el comando `ng serve -o`  

## Datos del sistemas

Este sistema consta de una estructura de directorios donde encontramos los component que es donde estan los componentes como modales footer y las card donde se visualizan los productos, ademas contiene la carpeta de guard para proteger las rutas de login y register, por otro lado contiene la carpeta de interfaces que son las que nos ayudan al tipado estricto de typescript, las pages que son las que hacen la aplicacion una SPA las cuales son home y orders, este sistema cuenta con variables de entorno para poder consumir los endpoint de manera correcto ademas tiene una carpeta de shared donde se encuentran las validaciones de los formularios y un componente que es el cierre de las modales, cada carpeta esta construida con su respectivo modulo para hacer la carga mas eficiente

## Servicios

para el desarrollo de esta aplicacion use 5 servicios que son los que tienen la comunicacion http rest y ademas hacen proceso globales como el guardado de la data del usuario logueado en el local storages

## Router

para el correcto funcionamiento de la SPA use el archivo routing para crear las rutas que se van a visualizar en la url base que es http://localhost:4200

## Modales

para el funcionamiento de las modales hay un componente base que es el base modal component que se encarga mediante un @ViewChild de redirigir a la modal correspondiente por medio de un string que es enviado desde el componente padre que contenga este, por medio de una variable llamada target luego viaja al basemodal.ts y asigna el valor a una propiedad llamada data que es de tipo any y luego esta se la asigna a la modal que corresponda en el target, ejemplo si la modal que se quiere abrir es la de signIn se pasa por referencia en el target el string 'signIn' este viaja a basemodal.ts y luego mediante el viewchild y un *ngIf pregunta si target es igual al componente que se desea abrir y de esa manera hace el funcionamiento

## Paquetes de terceros

los paquetes que use fueron ngx-toast, ngx-loader, ngx-bootstrap

