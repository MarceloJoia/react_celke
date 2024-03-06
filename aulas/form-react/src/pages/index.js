import Head from 'next/head';
import { useState } from 'react';

export default function Home() {

  // Declara uma nova variavel dados com state e atribui o objeto 
  const [data, setDate] = useState({
    nameUser: '',
    emailUser: '',
  });

  // Recebe os dados do campo do formulario. Os (...) siignica (Pega o que já tem dentro de data) e acrecenta o nalor nome
  const valueInput = e => setDate({ ...data, [e.target.name]: e.target.value });

  // Executar a função quando o usuário clicar no botão do formulario
  const addUser = (e) => {
    // e.preventDefault() --> Para impedir de recarregar a página 
    e.preventDefault();

    // Manipular os dados recebidos, por exemplo, envia os dados para API
    // Concatena e imprime uzando +
    console.log("Nome: " + data.nameUser);
    console.log("Email: " + data.emailUser);

    // Concatenar usando template string
    console.log(`Nome: ${data.nameUser}`);
    console.log(`Email: ${data.emailUser}`);
  };


  return (
    <>
      <Head>
        <title>Joia Marketin - Formulário</title>
        <meta name='description' content='Site de estudo sobre o desenvolvimento com React' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Cadastrar</h1>

        {/* onSubmit={addUser} Identifica quando o usuário clicou no botão. Então chama a função {addUser} */}
        <form onSubmit={addUser}>
          <label>Nome: </label>
          <input type='text' name='nameUser' placeholder='Nome do cliente' onChange={valueInput} /><br /><br />

          <label>E-mail: </label>
          <input type='email' name='emailUser' placeholder='Email do cliente' onChange={valueInput} /><br /><br />

          <button type='submit'>Cadastrar</button>
        </form>

      </main>
    </>
  );
}
