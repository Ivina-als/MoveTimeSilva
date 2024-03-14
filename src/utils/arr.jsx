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
    title: "Profissionais de musculação",
    description:
      "Esses profissionais planeja treinos focados em Musculação, orientando alunos e solucionando dúvidas referentes aos exercícios. Acompanha o desenvolvimento dos alunos e realiza avaliação física com foco em hipertrofia muscular ou emagrecimento saudável. São os profissionais mais indicados para exercícios anaeróbicos ",
    price: "R$ 350,00/mês",
    pictureUrl: gym,
  },
  {
    id: 2,
    title: "Profissionais para aulas Funcionais",
    description:
      "Conte com educadores físicos especializados treinos que se baseia nos movimentos naturais do ser humano, como pular, correr, puxar, agachar, girar e empurrar. O praticante ganha força, equilíbrio, flexibilidade, condicionamento, resistência e agilidade. São profissionais indicados para exercícios aeróbicos do tipo funcional e Hit  ",
    price: "R$ 200/mês",
    pictureUrl: funtional,
  },
  {
    id: 3,
    title: "Profissionais de danças populares",
    description:
      "Conte com professores de dança especializados em Zumba, FitDance, entre outros",
    price: "R$ 120,00/mês",
    pictureUrl: dancing,
  },
  {
    id: 4,
    title: "Profissionais Hit",
    description:
      "Conte com profissionais focados em treinos de Hit, que utilizam a musculação, com métodos de intensidade que fazem com que o exercício seja praticado até que o indivíduo alcance a exaustão máxima possível",
    price: "R$ 200,00/mês",
    pictureUrl: hit,
  },
];
