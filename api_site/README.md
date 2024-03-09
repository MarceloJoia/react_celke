COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto usando o node
### node app.js

Rodar o projeto usando o nodemon. Nodemon restarta o servidor automaticamente
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outra funcionalidades
-- Apos a instalação será criado o arquivo[package-lock.json] e o diretório:[node_modules]
### npm install --save express

Após a instalação do [express], precisa criar o arquivo [app.js] na raiz do site
### app.js

Instalar a dependência de forma global, "-g" significa globalmente. Executar o comando através do prompt de comando, executar somente se nunca instalou a dependência na maquina, após instalar, reiniciar o PC.
### npm install -g nodemon

Instalar a dependência como desenvolvedor para reiniciar o servidor sempre que houver alteração no código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon app.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080


Testar o método POST com INSOMINIA
### https://insomnia.rest/download

-----------*** || ***-----------

1) Comando para criar a base de dados)
### CREATE DATABASE joia CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

2) Sequelize é uma biblioteca Javascript que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

3) Instalação da dependência do MySQL2
### npm install --save mysql2

4) Sequelize-cli interface de linha de comando usada para criar modelos, configuraçãoes e arquivos de migração para bancos de dados
Installing the CLI
### npm install --save-dev sequelize-cli

5) Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init
Criar um diretório [db] e colocar dentro os diretórios: "config", "migrations", "models" e "seeders"
