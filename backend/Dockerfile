# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de tu aplicación
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3001

# Comando para iniciar el servidor
CMD ["node", "index.js"]
