COMO RODAR O PROJETO BAIXADO

1) Instalar todas as dependencias indicada pelo package.json
### npm install

2) Criar a base de dados "celke" no MySQL
3) Alterar as credencias do banco de dados no arquivo ".env"

4) Executar as migrations
### npx sequelize-cli db:migrate

5) Executar a SEEDER
### npx sequelize-cli db:seed:all

6) Rodar o projeto usando o nodemon. Nodemon restarta o servidor automaticamente
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

1) Comando para criar a base de dados
### CREATE DATABASE celke CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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


ENV  https://www.npmjs.com/package/dotenv
Manipular variáveis de ambente
### npm install dotenv --save


Crias a Migrations https://sequelize.org/docs/v6/other-topics/migrations/
sequelize migration [MIGRATE CLI]
Criar o arquivo  (.sequelizerc) na raiz do projeto

const path = require('path');

module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};



Acrescentar a coluna imageTop
### npx sequelize-cli migration:generate --name create-homes-tops

Criar a migrate da página home do conteúdo do topo
### npx sequelize-cli migration:generate --name alter-homes-tops-add-imagetop

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - permite que seja desfeito a migration, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:migrate:undo --name nome-da-migration
Exemplo1: npx sequelize-cli db:migrate:undo --name 20240314004005-alter-homes-tops-add-imagetop.js
Exemplo2: npx sequelize-cli db:migrate:undo --name 20240314001833-create-homes-tops.js


Exemplo de ALTER TABLE
<!-- 
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Acrescentar nova coluna na tabela HomesTops
    await queryInterface.addColumn('HomesTops', 'imageTop', {
      type: Sequelize.DataTypes.STRING,
      after: "textBtnTop"
    });
  },

  // Executar down - rollback - permite que seja desfeito a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.removeColumn('HomesTops', 'imageTop');
  }
};
 -->


Criar a Model da página home do conteúdo do topo
* Referencia: "npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string".
### npx sequelize-cli model:generate --name HomesTops --attributes titleOneTop:string,titleTwoTop:string,titleThreeTop:string,titleBtnTop:string,textBtnTop:string,imageTop:string



Criar SEEDERS 
* Referencia Documentação: "npx sequelize-cli seed:generate --name demo-user"
### npx sequelize-cli seed:generate --name demo-homestops

Executar a SEEDER
### npx sequelize-cli db:seed:all

Executar uma ÙNICA SEEDER
Comando: "npx sequelize-cli db:seed --seed nome_da_seed.js"
### npx sequelize-cli db:seed --seed 20240315021454-demo-homestops.js

Executar a ROOLBACK
Executar down - roolback -- Permite que seja desfeito todas as seed, permitindo a gestão das alterações do banco de dados e versionamento.
### npx sequelize-cli db:seed:undo

Executar a ROOLBACK uma ÚNUCA SEED
Executar down - roolback -- Permite que seja desfeito uma única seed, permitindo a gestão das alterações do banco de dados e versionamento.
* Referência documentação: "npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data"
### npx sequelize-cli db:seed:undo --seed 20240315021454-demo-homestops.js

Rollback de todas as seed
### npx sequelize-cli db:seed:undo:all


<!-- Terefo delegada pela empresa -->
Criar a Models da página home do conteúdo dos serviços 
### npx sequelize-cli model:generate --name HomesServices --attributes servTitle:string,servIconOne:string,servTitleOne:string,servDescOne:string,servIconTwo:string,servTitleTwo:string,servDescTwo:string,servIconThree:string,servTitleThree:string,servDescThree:string


Desenvolvimento de sistema história de usuário
- Check list
#### 1) Criar a Model, a Migrations é criada automaticamente.
#### 2) Migrations implementar os atributos da migration.
#### 3) Criar a Seeders e cadastrar o conteúdo.
#### 4) Controller, recuperar as informações do banco de dados.

Criar a Models da página home do conteúdo do serviço premium 
### npx sequelize-cli model:generate --name HomesPremiums --attributes premTitle:string,premSubtitle:string,premDesc:text,premBtnText:string,premBtnLink:string,premImage:string

Criar a tabela no banco de dados
### npx sequelize-cli db:migrate

Criar a Seeders
### npx sequelize-cli seed:generate --name demo-homespremiums

Executar uma Seed
### npx sequelize-cli db:seed --seed 20240321183908-demo-homespremiums.js


Criar a Model da Situação 
### npx sequelize-cli model:generate --name SituationsAbouts --attributes nameSituation:string

Criar a seeders
### npx sequelize-cli seed:generate --name demo-situationsabouts


