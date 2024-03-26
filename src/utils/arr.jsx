import gym from "/gym.jpg";
import funtional from "/funcional.jpg";
import dancing from "/dance.jpg";
import hit from "/hit.jpg";

export const categorys = [
  {
    subtitile: "Aeróbicos",
    href: "#",
  },
  {
    subtitile: "Anaeróbicos",
    href: "X",
  },
  {
    subtitile: "Funcionais",
    href: "Y",
  },
  {
    subtitile: "Danças",
    href: "Z",
  },
];

export const stockItems = [
  {
    id: 1,
    category: "bodybuilding",
    title: "Profissionais de musculação",
    description:
      "Esses profissionais planeja treinos focados em Musculação, orientando alunos e solucionando dúvidas referentes aos exercícios. Acompanha o desenvolvimento dos alunos e realiza avaliação física com foco em hipertrofia muscular ou emagrecimento saudável. São os profissionais mais indicados para exercícios anaeróbicos ",
    price: "R$ 350,00/mês",
    pictureUrl: gym,
  },
  {
    id: 2,
    category: "functional",
    title: "Profissionais para aulas Funcionais",
    description:
      "Conte com educadores físicos especializados treinos que se baseia nos movimentos naturais do ser humano, como pular, correr, puxar, agachar, girar e empurrar. O praticante ganha força, equilíbrio, flexibilidade, condicionamento, resistência e agilidade. São profissionais indicados para exercícios aeróbicos do tipo funcional e Hit  ",
    price: "R$ 200/mês",
    pictureUrl: funtional,
  },
  {
    id: 3,
    category: "dance",
    title: "Profissionais de danças populares",
    description:
      "Conte com professores de dança especializados em Zumba, FitDance, entre outros",
    price: "R$ 120,00/mês",
    pictureUrl: dancing,
  },
  {
    id: 4,
    category: "hit",
    title: "Profissionais Hit",
    description:
      "Conte com profissionais focados em treinos de Hit, que utilizam a musculação, com métodos de intensidade que fazem com que o exercício seja praticado até que o indivíduo alcance a exaustão máxima possível",
    price: "R$ 200,00/mês",
    pictureUrl: hit,
  },
];

export const profissionalsDetail = [
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
];
