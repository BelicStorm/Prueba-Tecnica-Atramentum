
# Prueba técnica

Prueba técnica realizada para el proceso de selección de la empresa Atramentum.

La prueba técnica se a realizado bajo la condición de listar clientes, poder ver en detalle su contenido y actualizarlo.




## Puesta en marcha
Para poder arrancar en local el proyecto hay que clonarlo y modificar el fichero example-env y cambiar los siguientes apartados:

NEXTAUTH_SECRET=[Cadena aleatoria en base64 ]
URL_BASE= [url base de las peticiones]

Para generar el secreto recomiendo usar el siguiente comando: 
```
openssl rand -base64 32
```

Una vez modificado el fichero, simplemente arrancamos el Next con el siguiente comando:
```
npm run dev
```
## Tecnologías
El proyecto ha sido realizado con:

- Next 13.2
- Next Auth 4.20.1
- Tailwind 3.3.0
- React 18.2.0
- Typescript 5.0.2
## Diseño

El diseño ha intentado seguir la tendencia Brutalista, que aunque no casa con lo que a acabado siendo la aplicación, se observará en el Figma la intención que se tenía con el diseño incial:

- Diseño: https://www.figma.com/community/file/1225464281212192010