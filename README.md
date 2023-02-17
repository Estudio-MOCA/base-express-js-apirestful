Base para proyectos de Node.js con Express.js Estudio MOCA
=================

## Instalación

```
npm install
```

## Ejecución

```
npm run start # para ejecutar en modo productivo
npm run dev # para ejecutar en modo desarrollo
npm run local # para ejecutar en modo local
npm run qa # para ejecutar en modo qa
```

## Descrición de estructura de carpetas

```
├── src
│   ├── bin
│   │   └── www.ts              # punto de entrada de la aplicación
│   ├── controllers             # controladores de la aplicación
│   ├── entities                # entidades de dominio de la aplicación, solo clases con propiedades sin metodos
│   ├── helpers                 # clases o funciones de ayuda
│   ├── middlewares             # middlewares de la aplicación, ej: validaciones, autenticación, etc.
│   ├── models                  # modelos de la aplicación, clases con propiedades y metodos generalmente relacionado a un ORM
│   ├── public                  # archivos estáticos públicos de la aplicación
│   ├── routes                  # rutas de la aplicación
│   │   └── api.ts              # rutas de la API
│   │   └── web.ts              # rutas de la aplicación web
│   ├── services                # servicios de la aplicación, clases con metodos que interactuan con los modelos o la base de datos o webservices
│   ├── views                   # vistas de la aplicación web o emailings
│   ├── app.ts                  # configuración de la aplicación
├── .env                        # archivo de configuración de variables de entorno
├── .env.dev                    # archivo de configuración de variables de entorno para desarrollo
├── .env.qa                     # archivo de configuración de variables de entorno para qa
├── .env.local                  # archivo de configuración de variables de entorno para local
├── .env.example                # archivo de ejemplo de configuración de variables de entorno
├── .gitignore                  # archivo de configuración de git
├── package.json                # archivo de configuración de npm
├── package-lock.json           # archivo de configuración de npm
├── README.md                   # archivo de ayuda
├── tsconfig.json               # archivo de configuración de typescript