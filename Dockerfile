# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del directorio actual al contenedor en /app
COPY . /app

# Instala las dependencias de la aplicación
RUN npm install

# Expone el puerto 3000 para que la aplicación pueda ser accedida desde fuera del contenedor
EXPOSE 3000

# Comando para iniciar la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]

