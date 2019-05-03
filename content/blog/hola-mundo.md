---
title: "Hola Mundo"
date: "2019-03-09"
path: 'blog/hola-mundo'
description: 'Entrada inicial de ejemplo'
author: jmolivas
image: '../assets/hello-world.jpg'
---

Esta es una página de ejemplo

Tu puedes crear entradas nuevas al blog

Haciendo un fork del repositorio [desde aquí](https://github.com/mxlOS/mxlos.org/fork)

Clonando el repositorio

```bash
git clone https://github.com/[user]/mxlos.org
cd mxlos.org
npm install
```

Agregando contenido en `content/blog/`

Creando un nuevo archivo Markdown, ejemplo `titulo-de-la-entrada.md`

```bash
blog/
└── titulo-de-la-entrada.md
```

Contenido del archivo `titulo-de-la-entrada.md` 

```md
---
title: "Hola Mundo"
date: "2019-03-09"
path: 'blog/hola-mundo'
description: 'Entrada inicial de ejemplo'
author: author-id
image: '../assets/imagen-referencia'
---

Cuerpo de la entrada ...
```

#### NOTAS
1. El valor de `author-id` debe ser idéntico al valor del campo _**author**_ registrado en el archivo `content/data/author.yaml`. 
2. El directorio `content/assets/` mantiene las imagenes utilizadas en la publicación, así como la imagen de referencia en el archivo `.md`, es decir, el valor de `image: '../assets/imagen-referencia'`.

Cuando el contenido este listo solo queda hacer commit y enviar un PR con los cambios.
