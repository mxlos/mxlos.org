---
title: "Proyecto Calidad del Aire Mexicali"
date: "2019-04-29"
author: jorgeatempa
path: 'blog/proyecto-calidad-del-aire-mexicali'
description: 'Compartir datos de la calidad del aire en nuestra región a través del desarrollo de un proyecto OpenSource'
image: img/proyecto-calidad-aire-mexicali.jpg
---

### Introducción

En nuestra pasada reunión contamos con la participación de __________ quién nos invito a colaborar en un proyecto para la adquisición de datos sobre la calidad del aire en nuestra región. El proyecto tiene como objetivo __________

### ¿Qué puede hacer Mexicali Open Source?

Algunas de las actividades en las que se puede participar como comunidad son:

1. Construir sensores de calidad del aire.
2. Compartir conocimientos técnicos con la comunidad.
3. Establecer una red con grupos de la comunidad para fomentar la conciencia y la participación de los ciudadanos para mejorar las cosas.
4. Desarrollar y proporcionar métodos para la discusión comunitaria, el conocimiento y las noticias.

### Guía de construcción del sensor Luftdaten

#### Materiales

Para la construcción del dispositivo necesitamos los siguientes materiales:

1. Microcontrolador [NodeMCU ESP8266](https://www.nodemcu.com/index_en.html)
2. Sensor para la calidad del aire [SDS011](https://aqicn.org/sensor/sds011)
   
#### Ensamblaje

Para el ensamblaje tomamos como referencia el siguiente diagrama.

![Diagrama de conexion](img/diagrama-conexion.png)

Podemos construir o improvisar una cubierta al dispositivo para evitar su exposición.

![Case improvisado](img/simple-case.jpg)

### Conectividad

Para lograr la conectividad del dispositivo a través de Internet, lo primero que debemos hacer es buscar entre nuestras opciones de redes inalámbricas una conexión con el siguiente formato **_Feinstaubsensor-Device-ID_**, como se muestra en la imágen.
![Redes inalámbricas locales](img/wireless-options.png)

Posteriormente, debemos acceder desde el navegador a la siguiente dirección `http://192.168.4.1`. En esta ruta, se muestra un panel para la configuración de nuestro dispositivo con la red inalámbrica local, como se muestra a continuación.
![Panel de configuración](img/configuration-dashboard.png)
Nuestra red de área local es un puente de comunicación entre el dispositivo de adquisición de datos con Internet.