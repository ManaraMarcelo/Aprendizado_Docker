# Exercício 2 - Criando e Rodando um container interativo

## Descrição 
Inicie um container Ubuntu e interaja com o terminal dele. Teste um script Bash que imprime logs do sistema ou instala pacotes de forma interativa.

---

## 🐳 Comandos Docker utilizados
```bash
# Construção da imagem
docker build -t ubuntu:v1

# Execução de maneira interativa
docker run -it ubuntu bash

# Atualizo o ubuntu
apt-get upgdate && apt-get upgrade

# Instalo o editor de arquivos nano
apt-get install nano -y

# Crio um arquivo de texto aleatório e o leio
nano exercicio2.txt
cat exercicio2.txt
```
![Leitura arquivo txt](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex2/images/ubuntu-rodando.png)
