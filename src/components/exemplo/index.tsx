import React from "react";
import { useEffect, useState } from "react";

const Exemplo = () => {
  // uma promisse que resolve uma array de produtos em 3 segundos
  // 3: pendente, completa ou rejeitada = carregando, resolvido, erro
  // hook para o estado de pendente/carregando, um hook para o estado de resolvido e um hook para o estado de erro
  // hook que usa: useEffect()

  const [loading, setLoading] = useState(true); // esse é o estado de pendente
  const [products, setProducts]: any = useState([]); // esse é o estado de resolvido
  const [error, setError]: any = useState(null); // esse é o estado de falha

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const temErro = Math.random() < 0.5;
        if (temErro) {
          throw new Error("Falha ao buscar os produtos");
        }
        const productsPromisse = new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                id: "1",
                name: "Camisa do Flamengo",
                description: "Camisa de jogo do Flamengo",
                stock: 20,
              },

              {
                id: "2",
                name: "Camisa do Vasco",
                description: "Camisa de jogo do Vasco",
                stock: 5,
              },

              {
                id: "3",
                name: "Camisa do Bahia",
                description: "Camisa de jogo do Bahia",
                stock: 10,
              },
            ]);
          }, 3000);
        });

        const productData = await productsPromisse;

        setProducts(productData);
        setLoading(false);
      } catch (error) {
        setError("Houve um erro na busca dos dados dos produtos.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading && <p>Carregando, aguarde um momento...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              <p> Id: {product.id}</p>
              <p> Nome: {product.name}</p>
              <p> Descrição: {product.description}</p>
              <p> Quantidade: {product.stock}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Exemplo;
