import React from "react";

export const CartContext = React.createContext([
  {
    category: "bodybuilding",
    name: "Rossandra Alexa",
    especialidade: "Musculação/hipertrofia",
    descrição:
      "Licenciatura em educação física, Atuou 15 anos com fisiculturismo, especilista em ganho de massa magra e hipertrofia",
    disponibilidade: 2,
  },
  {
    category: "bodybuilding",
    name: "Atos Santos",
    especialidade: "Hipertrofia/Emagrecimento",
    descrição:
      "Bacharelado em educação física, 7 anos de experiência com consultoria para emagrecimento saudável",
    disponibilidade: 3,
  },
  {
    category: "funtional",
    name: "Cora Lina",
    especialidade: "Emagrecimento saudável",
    descrição:
      "Bacharelado em educação física, mestrado em fisiologia, atua há 17 anos  com aulas funcionais com foco em emagrecimento saudável e definição",
    disponibilidade: 2,
  },
  {
    category: "dance",
    name: "Mateus Solano",
    especialidade: "Dança contemporânea",
    descrição:
      "Bacharelado dança, com 5 anos de experiência em coreografias contemporâneas e músicas populares",
    disponibilidade: 4,
  },
  {
    category: "hit",
    name: "Moisés Arcuíro",
    especialidade: "hit de alto desempenho",
    descrição:
      "Bacharelado educação fífica, especialista em nutrição esportiva, com 15 anos de experiência em consultoria de hit para alto desempenho e perda de peso",
    disponibilidade: 3,
  },
]);
