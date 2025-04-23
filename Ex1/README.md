# Exercício 1 - Servidor NGINX com Docker

## Descrição
Criação de uma imagem personalizada usando Alpine com NGINX, servindo uma landing page estática contida na pasta `Landing-Page-master`. O Dockerfile também se encontra nessa mesma página.

---

## 🐳 Comandos Docker utilizados

```bash
# Construção da imagem
docker build -t nginx:v1 .

# Execução do container mapeando porta 3000 (host) → 80 (container nginx)
docker run -dp 3000:80 --name tangerina nginx:v1

![Página Rodando](arquivos-do-exercicio/PRINTS/Landing-page-rodando.png)
