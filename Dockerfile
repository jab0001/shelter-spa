# Используем базовый образ Node.js
FROM node:14-alpine

# Установка рабочей директории внутри контейнера
WORKDIR /app

# Копирование зависимостей и установка их
COPY package*.json ./
RUN npm install

# Копирование исходного кода приложения в контейнер
COPY . .

# Сборка проекта
RUN npm run build

# Определение команды запуска приложения
CMD ["npm", "run", "serve"]