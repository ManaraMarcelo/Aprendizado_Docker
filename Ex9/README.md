# Exercício 9 - Criando uma imagem personalizada com um servidor web e arquivos estáticos

## Descrição 
Construa uma imagem baseada no Nginx ou Apache, adicionando um site HTML/CSS estático. Utilize a landing page do Creative Tim para criar uma página moderna hospedada no container.

---

## 🐳 Comandos Docker utilizados
```bash
# Construir a imagem do container
docker build -t exercicio9:v1 .

# Rodar o container
docker run -dp 5000:80 --name Ex9 exercicio9:v1
```

## Página rodando
![paginaRodando](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex9/images/pagina%20rodando.png)