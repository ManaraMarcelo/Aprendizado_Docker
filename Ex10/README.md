# Exercício 10 - Evitar execução como root

## Descrição 
Ao rodar containers com o usuário root, você expõe seu sistema a riscos maiores em caso de comprometimento. Neste exercício, você deverá criar um Dockerfile para uma aplicação simples (como um script Python ou um servidor Node.js) e configurar a imagem para rodar com um usuário não-root.
 Você precisará:
a.	Criar um usuário com useradd ou adduser no Dockerfile.
b.	Definir esse usuário como o padrão com a instrução USER.
c.	Construir a imagem e iniciar o container.
d.	Verificar se o processo está rodando com o novo usuário usando docker exec whoami.


---

## 🐳 Comandos Docker utilizados
```bash
# Construir a imagem do container
docker build -t exercicio10:v1 .

# Rodar o container
docker run -dp 3000:3000 --name Ex10 exercicio10:v1

# Verificar usuário
docker exec Ex10 whoami
```

## Página rodando
![pagina-rodando](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex10/images/pagina-rodando.png)

## Verificação do usuário
![verificacao-usuario](https://raw.githubusercontent.com/ManaraMarcelo/Aprendizado_Docker/refs/heads/main/Ex10/images/verificando-usuario.png)