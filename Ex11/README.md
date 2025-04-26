# Exercício 11 - Analisar imagem Docker com Trivy

## Descrição 
Trivy é uma ferramenta open source para análise de vulnerabilidades em imagens Docker. Neste exercício, você irá analisar uma imagem pública, como python:3.9 ou node:16, em busca de vulnerabilidades conhecidas.
 Você deverá:
a.	Instalar o Trivy na sua máquina (via script ou pacote).
b.	Rodar trivy image python:3.9 para analisar.
c.	Identificar vulnerabilidades com severidade HIGH ou CRITICAL.
d.	Anotar os pacotes ou bibliotecas afetadas e sugerir possíveis ações (como atualização da imagem base ou substituição de dependências).
---

## ⚙️ Comandos para instalar o Trivy
```bash
sudo apt update
sudo apt upgrade

curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sudo sh -s -- -b /usr/local/bin
trivy --version
```

## 🐳 Comandos Docker utilizados
```bash
# Baixar uma imagem 
docker pull python:3.9

# Verificar vulnerabilidades na imagem com o Trivy
trivy image python:3.9
```

## Resumo das vulnerabilidades
```bash
Report Summary

┌────────────────────────────────────────────────────────────────────────────┬────────────┬─────────────────┬─────────┐
│                                   Target                                   │    Type    │ Vulnerabilities │ Secrets │
├────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ python:3.9 (debian 12.10)                                                  │   debian   │      1472       │    -    │
├────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/pip-23.0.1.dist-info/METADATA        │ python-pkg │        1        │    -    │
├────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/setuptools-58.1.0.dist-info/METADATA │ python-pkg │        2        │    -    │
├────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/wheel-0.45.1.dist-info/METADATA      │ python-pkg │        0        │    -    │
└────────────────────────────────────────────────────────────────────────────┴────────────┴─────────────────┴─────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


python:3.9 (debian 12.10)

Total: 1472 (UNKNOWN: 4, LOW: 709, MEDIUM: 638, HIGH: 116, CRITICAL: 5)
```
## Recomendações baseadas nas vulnerabilidades:

1. Trocar a imagem base: usar uma com menos dependências (alpine ou slim).
2. 

1. Trocar a imagem base
Use uma imagem com menos dependências e menor superfície de ataque, como python:3.9-slim ou python:3.9-alpine:

Dockerfile
```bash
FROM python:3.9-slim
Essas versões contêm menos pacotes do sistema, reduzindo drasticamente o número de vulnerabilidades.
```

2. Atualizar pacotes Python
Dentro do seu container, execute:

```bash
pip install --upgrade pip setuptools
Isso atualizará os pacotes para versões mais seguras (desde que compatíveis com o seu projeto).
```

3. Manter o sistema atualizado
Para reduzir vulnerabilidades do Debian:

```bash
RUN apt-get update && apt-get upgrade -y && apt-get clean
```

4. Rever dependências desnecessárias
Faça uma análise se todos os pacotes utilizados são realmente necessários.
