FROM node:12-alpine 
# Папка где будет хрониться весь наш проект в докере
WORKDIR /devel
# Скопировать pasckage.json в создваемый образ
COPY package.json .
# Скопировать pasckage.json в создваемый образ
COPY package-lock.json .
#Установить все зависимости и не отображать предупреждения
RUN npm install --non-interactive
# Скопировать все файлы из текущей дериктории
COPY . .

RUN npm run build