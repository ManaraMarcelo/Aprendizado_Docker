# Exercício 1 - Servidor NGINX com Docker

## Descrição
Criação de uma imagem personalizada usando Alpine com NGINX, servindo uma landing page estática contida na pasta `Landing-Page-master`. O `Dockerfile` também se encontra nessa mesma página.

---

## 🐳 Comandos Docker utilizados

```bash
# Construção da imagem
docker build -t nginx:v1 .

# Execução do container mapeando porta 3000 (host) → 80 (container nginx)
docker run -dp 3000:80 --name tangerina nginx:v1
```
## Antes de Rodar o container
![Página Vazia](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex1/arquivos-do-exercicio/PRINTS/Localhost-vazio.png)

## Container rodando sem customização, caso eu não tivesse usado a customização direto em meu `Dockerfile`
![Página Padrão Nginx](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex1/arquivos-do-exercicio/PRINTS/Welcome%20Nginx.png)

## Container rodando já a Landing Page
![Página Rodando](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex1/arquivos-do-exercicio/PRINTS/Landing-page-rodando.png)

