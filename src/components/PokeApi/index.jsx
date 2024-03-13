import React, { useState, useEffect } from "react";

const PokeApi = () => {
  const [numberItens] = useState(10);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?offset=${numberItens}&limit=${numberItens}`
        );
        if (!response) throw new Error("Failed to fetch data");

        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>Pokemon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokeApi;
