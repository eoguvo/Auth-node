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
    <a href="https://github.com/Gustavo-Henrique-br/Auth-node/blob/master/LEIAME.md">
        <img height="30" src="https://img.shields.io/static/v1?label=&message=PT-BR&color=blue&style=for-the-badge" alt="language - Português" />
    </a>
</div>

<div align="center">
    <h1>Auth-node</h1>
    <p>An simple authentication app built with node.js and typescript</p>
</div>

<hr>

<div align="center">
    <h2>🎉 Auth-node 1.0 🚀 Ready! 🎉</h2>
</div>

Table of contents
=================
<!--ts-->
   * [Running](#rodando)
   * How to use
      * [Prerequisites](#pre-requisitos)
      * [Installing](#install)
   * [Techs](#techs)
<!--te-->

<div id="rodando" align="center">
    <h1>🎲 Running</h1>
</div>

<div id="pre-requisitos" align="center">
    <h4>Prerequisites</h4>
</div>

> Before start, you need have installed in your machine:
[Git](https://git-scm.com), [Node.js (npm)](https://nodejs.org/en/) and [Docker-compose](https://docs.docker.com/compose/install/).
> In addition, it is good to have an editor to work on the code, such as [VSCode](https://code.visualstudio.com/).

<div id="install" align="center">
    <h4>
        follow those steps to install:
    </h4>
</div>

```bash
# clone the repository in your machine
$ git clone https://github.com/Gustavo-Henrique-br/Auth-node.git

# Install the dependencies:
$ yarn
# or
$ npm install

# Setup database
$ docker-compose up

# Rename the file .env.example to .env

# Optional: generate public and private keys
$ openssl genrsa -out rsa.private 1024
$ openssl rsa -in rsa.private -out rsa.public -pubout -outform PEM
# Copy the content of the files to .env, see examples in .env.example

# Running in dev mode
$ yarn dev
# or
$ npm run dev

# Just building
$ yarn build
# or
$ npm run build
```

<div id="techs" align="center">
    <h1>🛠 Technologies</h1>
</div>

- [Nodejs](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/introduction)
- [Joi](https://joi.dev/api/)
- [node-postgres](https://node-postgres.com/)