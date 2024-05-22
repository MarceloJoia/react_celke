

Corrigir erro na execução
👇 update npm to the latest version
### npm install -g npm@latest

👇 clean npm cache
### npm cache clean --force

👇 delete node modules and package-lock.json
### npm rm -rf node_modules && rm package-lock.json


👇 Criar o pacote
### npm init


👇 retry installing dependencies
### npm install


Look more here: https://sebhastian.com/npm-err-enoent/


O next JS é um Frameworck usado para criar sites otimizados para o SEO(Buscadores encontrar o site)
### next.config.mjs


Ler Listas é recomendado Aerofunction
### Contact = () => {
  ### return (
    <main>
     <h2>Sobre</h2>
    </main>
  ### );
### }
### export default Contact;




COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto React 
### npm run dev


SEQUENCIA PARA CRIAR O PROJETO
Criar o projeto React
### npx create-next-app

Acessar o diretório do projeto
### cd diretorio

Rodar o projeto React
### npm run dev


Instalação do React Icom
### npm install react-icons --save




---------------------------------------------
-----  Cadastrar o conteudo da mensagem -----
POST conteúdo para cadastrar no banco
1) No Insominia - Headers 
### Content-Type | application/json

2) No Body - Colocar json
### {
###   "name": "Marcelo Joia",
###   "email": "sitejoia@hotmail.com",
###   "subject": "Asunto da mensagem 2",
###   "content": "Conteúdo da mensagem 2"
### }

Colocar essa middleware no [app.js] após o [express()]
// Chamar a função express
### const app = express();

// Criar o middleware parar receber os dados do corpo da requisição
// Recebe o dados no formato de Objeto [json]
### app.use(express.json());





