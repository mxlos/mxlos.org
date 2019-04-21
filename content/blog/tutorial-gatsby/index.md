---
title: "Introducción al desarrollo de sitios estáticos con Gatsby"
date: "2019-04-20"
author: jorgeatempa
path: 'blog/tutorial-gatsby'
description: 'En esta publicación se presenta una introducción al desarrollo de sitios estáticos con Gatsby'
---

Durante los últimos fines de semana algunos miembros de la comunidad de Mexicali Open Source, nos reunimos en las instalaciones de [La Playa Deluxe](https://www.facebook.com/LaPlayaDeLux/) (espacio de _Coworking_) con el objetivo de conocer e implementar los conceptos básicos de la herramienta de desarrollo ágil para sitios estáticos [Gatsby](https://www.gatsby.org/). 

Gatsby utiliza [ReactJS](https://reactjs.org/) como plataforma para su flujo de trabajo. Además contamos con una gama de diversos tipos de _plugins_ (librerías que proveen funcionalidad particular) para extender su funcionalidad. 

En esta publicación describiremos el proceso de desarrollo de sitios estáticos con Gatsby. Para fines del tutorial, cabe mencionar que el entorno de desarrollo utilizado fue el siguiente:

1. Sistema Operativo de Linux Ubuntu versión _18.04_.
2. NodeJS versión _10.15.3_.

### Instalación de NodeJS

Para comenzar con Gatsby es importante contar con una versión reciente o posterior a la _8.x_ de [NodeJS](https://nodejs.org) en nuestro Sistema Operativo. 

Para la instalación de NodeJS [[1]](https://linux4one.com/how-to-install-node-js-with-npm-on-ubuntu-18-04/) necesitamos agregar a la lista lista de repositorios, un enlace a la fuente que contiene la versión LTS (soporte de larga duración, por sus siglas en Inglés) más reciente de NodeJS.

    $ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

Actualizamos los repositorios locales con el siguiente comando.

    $ sudo apt update ; sudo apt upgrade

Procedemos con la instalación de NodeJS y el gestor de paquetes NPM.

    $ sudo apt install nodejs npm

Validamos la instalación de NodeJS y NPM con los siguientes comandos respectivamente.

    $ node -v
    $ npm -v

### Instalación de Gatsby

Antes de comenzar con la instalación, cabe destacar que es altamente recomendado utilizar el gestor de paquetes NPM como usuario regular, es decir, sin especificar el famoso comando _**sudo**_ el cuál nos otorgá privilegios de _super usuario_. Para este último propósito, podemos seguir los pasos recomendados en [[2]](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) y a continuación descritos.

El primer paso, consiste en crear un directorio oculto en el directorio HOME de nuestro sistema.

    $  mkdir ~/.npm-global

Después debemos exportar la variable de entorno que apunte al directorio creado anteriormente.

    $ export PATH=~/.npm-global/bin:$PATH

Actualizar las variables del sistema.

    $ source ~/.profile

Una vez realizado estos comandos, podemos comenzar la instalación de Gatsby utilizando el siguiente comando.

    $ npm install -g gatsby-cli

El prefijo `-g` permite contar con el interpréte de comandos de Gatsby en formato global, es decir, lo podemos ejecutar desde cualquier ubicación dentro de la Terminal.

### Como construir un blog con Gatsby

1. Instalar NodeJS.
2. Instala el CLI (interfaz de línea de comandos) de Gatsby. 
    ```
    npm install -g gatsby-cli
    ```
3. Crea un nuevo sitio
    ```
    gatsby new blog
    ```
4. Cambiate al directorio de tu sitio
    ```
    cd blog
    ```
### Referencias
   1. [How to install Node.js with npm on Ubuntu 18.04](https://linux4one.com/how-to-install-node-js-with-npm-on-ubuntu-18-04/)
   2. [Resolving EACCES permissions errors when installing packages globally](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)