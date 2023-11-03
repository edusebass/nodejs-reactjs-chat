# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación (incluyendo package.json y package-lock.json)
COPY backend/package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de tu aplicación
COPY ./backend/ .

# Comando para iniciar el servidor
CMD ["node", "index.js"]
