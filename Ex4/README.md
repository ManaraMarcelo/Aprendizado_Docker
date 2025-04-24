# Exercício 4 - Criando um Dockerfile para uma aplicação simples em Python

## Descrição 
Crie um Dockerfile para uma aplicação Flask que retorna uma mensagem ao acessar um endpoint, para isso utilize o projeto Docker Flask

---

## 🐳 Comandos Docker utilizados
```bash
# Criando a imagem
docker build -t flask-app .

# Rodando o container na porta 5000 
docker run -dp 5000:5000 --name Python flask-app
```

## Flask rodando: 
![programa rodando](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex4/images/flasck-rodando.png)