import gym from "/gym.jpg";
import funtional from "/funcional.jpg";
import dancing from "/dance.jpg";
import hit from "/hit.jpg";
import cassandra from "/cassandra.webp";
import yasmin from "/yasmin.jpg";
import atos from "/atos.jpg";
import cora from "/cora.jpg";
import mateus from "/mateus.png";
import moises from "/moises.jpg";
import y from "/mulher.webp";

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
    id: 1,
    category: "bodybuilding",
    name: "Rossandra Alexa",
    especialidade: "Musculação/hipertrofia",
    pictureUrl: yasmin,
    descricao:
      "Licenciatura em educação física, Atuou 15 anos com fisiculturismo, especilista em ganho de massa magra e hipertrofia",
    disponibilidade: 2,
    investimento: 350,
  },
  {
    id: 2,
    category: "bodybuilding",
    name: "Atos Santos",
    especialidade: "Hipertrofia/Emagrecimento",
    pictureUrl: atos,
    descricao:
      "Bacharelado em educação física, 7 anos de experiência com consultoria para emagrecimento saudável",
    disponibilidade: 3,
    investimento: 350,
  },
  {
    id: 3,
    category: "functional",
    name: "Cora Lina",
    especialidade: "Emagrecimento saudável",
    pictureUrl: cora,
    descricao:
      "Bacharelado em educação física, mestrado em fisiologia, atua há 6 anos  com aulas funcionais com foco em emagrecimento saudável e definição",
    disponibilidade: 2,
    investimento: 200,
  },
  {
    id: 4,
    category: "dance",
    name: "Mateus Solano",
    especialidade: "Dança contemporânea",
    pictureUrl: mateus,
    descricao:
      "Bacharelado dança, com 5 anos de experiência em coreografias contemporâneas e músicas populares",
    disponibilidade: 4,
    investimento: 120,
  },
  {
    id: 5,
    category: "hit",
    name: "Moisés Arcuíro",
    especialidade: "hit de alto desempenho",
    pictureUrl: moises,
    descricao:
      "Bacharelado educação física, especialista em nutrição esportiva, com 15 anos de experiência em consultoria de hit para alto desempenho e perda de peso",
    disponibilidade: 3,
    investimento: 200,
  },
  {
    id: 6,
    category: "hit",
    name: "Cassandra Douglas",
    pictureUrl: cassandra,
    especialidade: "hit para perda de gordura",
    descricao:
      "Bacharelado educação física, especialista High Intensity Interval Training, com 8 anos de experiência em consultoria de hit para alto diminuição de percentual de gordura",
    disponibilidade: 2,
    investimento: 200,
  },
  {
    id: 7,
    category: "dance",
    name: "Yasmin Brunet",
    especialidade: "Dança",
    pictureUrl: y,
    descricao:
      "Bacharelado dança, com 5 anos de experiência em auxiliar alunos a se expressarem através da dança",
    disponibilidade: 8,
    investimento: 120,
  },
];
