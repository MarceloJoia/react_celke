import { useState } from "react";


function Home() {

  const [name, setName] = useState('Marcelo Joia');

  return (
    <main>
      <p>{name}</p>
      <button onClick={() => setName('Telma Viscaino')}>Alterar</button>
    </main>
  );
}

export default Home;