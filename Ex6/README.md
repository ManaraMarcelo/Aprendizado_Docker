# Exercício 2 - Criando e Rodando um container interativo

## Descrição 
Utilize um multi-stage build para otimizar uma aplicação Go, reduzindo o tamanho da imagem final. Utilize para praticar o projeto GS PING desenvolvido em Golang.

---

## 🐳 Comandos Docker utilizados
```bash
# Construir a imagem do container
docker build -t gsping .

# Rodar o container na porta 8080 com o nome 'maracuja'
docker run -dp 8080:8080 --name maracuja gsping
```

![Codigo Go Funcionando](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex6/images/codigo-go-funcionando.png)