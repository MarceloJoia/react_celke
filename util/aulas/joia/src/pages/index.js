import { useEffect, useState } from "react";

function Home() {

  const [productId, setProductId] = useState();
  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [dataProduct, setDataProduct] = useState({
    name: '',
    price: '',
  });

  function searchProduct() {
    // console.log('Buscar Produtos!');
    setProductId(7);
    setProductName("Curso de React");
    setProductPrice(947);

    // Setar um Objeto
    setDataProduct({
      name: "Curso de Node JS",
      price: 847,
    });
  }
  // Quando o usuário carregar a página executa esse useEffect() e Atualisa os dados
  useEffect(() => {
    searchProduct();
  }, [productId]);// Se acontecer alguma mudança no id Execute a função [productId]

  return (
    <main>
      <p>ID do Produto: {productId}</p>
      <p>Nome do Produto: {productName}</p>
      <p>Nome do Produto: {productPrice}</p><br/><br/>

      {/* Imprime Objeto */}
      <p>Nome: {dataProduct.name}</p>
      <p>Preço: {dataProduct.price}</p>
    </main>
  );
}

export default Home;