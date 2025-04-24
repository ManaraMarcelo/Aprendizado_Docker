# Etapa 1 - Build
FROM golang:1.20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /Ex6

# Copia os arquivos da aplicação Go
COPY . .

# Compila o projeto, gerando um binário chamado gsping
RUN go build -o gsping

# Etapa 2 - Imagem final
FROM alpine:latest

# Define o diretório de trabalho da imagem final
WORKDIR /Ex6

# Copia o binário gerado na etapa anterior
COPY --from=builder /Ex6/gsping .

# Expõe a porta utilizada pela aplicação
EXPOSE 8080

# Comando para executar a aplicação
CMD ["./gsping"]
