<div align="center">
    <img src=".github/banner.png" alt="header auth node"/>
</div>

<div align="center">
    <a href="https://github.com/Gustavo-Henrique-br" >
        <img src="https://img.shields.io/badge/author-Gustavo%20Henrique-blue?style=for-the-badge" alt="author - Gustavo Henrique" />
    </a>
    <a href="https://github.com/Gustavo-Henrique-br/Auth-node/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Gustavo-Henrique-br/Auth-node?style=for-the-badge"></a>
</div>

<div align="center">
    <a href="https://github.com/Gustavo-Henrique-br/Auth-node/">
        <img height="30" src="https://img.shields.io/static/v1?label=&message=PT-BR&color=blue&style=for-the-badge" alt="language - English" />
    </a>
</div>

<div align="center">
    <h1>Auth-node</h1>
    <p>Um simples sistema de autenticação construído com node.js e typescript</p>
</div>

<hr>

<div align="center">
    <h2>🎉 Auth-node 1.0 🚀 Pronto! 🎉</h2>
</div>

Tabela de conteúdos
=================
<!--ts-->
   * [Rodando](#rodando)
   * Como usar
      * [Pré-requisitos](#pre-requisitos)
      * [Instalando](#install)
   * [Techs](#techs)
<!--te-->

<div id="rodando" align="center">
    <h1>🎲 Rodando</h1>
</div>

<div id="pre-requisitos" align="center">
    <h4>Pré-requisitos</h4>
</div>

> Antes de começar, você precisa ter instalado na sua máquina:
[Git](https://git-scm.com), [Node.js (npm)](https://nodejs.org/en/) and [Docker-compose](https://docs.docker.com/compose/install/).
> Além disso, é bom ter um editor para trabalhar no código, como o [VSCode](https://code.visualstudio.com/).

<div id="install" align="center">
    <h4>
        Siga esses passos para instalar:
    </h4>
</div>

```bash
# clone o repositório na sua máquina
$ git clone https://github.com/Gustavo-Henrique-br/Auth-node.git

# Instale as dependências:
$ yarn
# ou
$ npm install

# Configurar banco de dados
$ docker-compose up

# Renomeie o arquivo .env.example para .env

# Opcional: gere chaves públicas e privadas
$ openssl genrsa -out rsa.private 1024
$ openssl rsa -in rsa.private -out rsa.public -pubout -outform PEM
# Copie o conteúdo dos arquivos para .env, veja exemplos em .env.example

# Rodando em modo dev
$ yarn dev
# ou
$ npm run dev

# Apenas dando build
$ yarn build
# ou
$ npm run build
```

<div id="techs" align="center">
    <h1>🛠 Tecnologias</h1>
</div>

- [Nodejs](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/introduction)
- [Joi](https://joi.dev/api/)
- [node-postgres](https://node-postgres.com/)