---
title: "Hola Mundo"
date: "2019-03-09"
path: 'blog/hola-mundo'
description: 'Entrada inicial de ejemplo'
---

Esta es una página de ejemplo

Tu puedes crear entradas nuevas de blog

Haciendo un fork del repositorio [desde aquí](https://github.com/mxlOS/mxlos.org/fork)

Clonando el repositorio

```bash
git clone https://github.com/[user]/mxlos.org
cd mxlos.org
npm install
```

Agregando contenido en `src/blog/`

Creando un nuedo directorio ejemplo `titulo-de-la-entrada` y agregando un archivo `index.md`

```bash
blog/
└── titulo-de-la-entrada
    └── index.md
```

Contenido del archivo `titulo-de-la-entrada/index.md` 

```md
---
title: "Hola Mundo"
date: "2019-03-09"
path: 'blog/hola-mundo'
description: 'Entrada inicial de ejemplo'
---

Cuerpo de la entrada ...
```

Cuando el contenido este listo solo queda hacer commit y enviar un PR con los cambios.
