# Étape 1 : build du projet avec Node
FROM node:20-alpine AS build

WORKDIR /app

# Copier les fichiers nécessaires
COPY package*.json ./
RUN npm install

# Copier le reste du projet et builder
COPY . .
RUN npm run build

# Étape 2 : servir avec Nginx
FROM nginx:alpine

# Supprimer la config par défaut et copier la tienne (optionnel)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build du projet dans le dossier web de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port par défaut de Nginx
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]