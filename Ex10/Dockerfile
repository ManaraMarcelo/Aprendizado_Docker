FROM node:18-alpine
WORKDIR /Ex10
COPY package*.json ./
RUN npm install
COPY . .

# Cria usuário e grupo não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Usa o novo usuário
USER appuser

EXPOSE 3000
CMD ["npm", "start"]
