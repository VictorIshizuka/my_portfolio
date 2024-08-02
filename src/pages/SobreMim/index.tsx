import styles from "./SobreMim.module.css";

import { LayoutPost } from "../../components/LayoutPost";

import banner from "./../../assets/sobre_mim_capa.png";
import imageSobreMim from "./../../assets/circulo_colorido.png";

export const SobreMim = (): JSX.Element => {
  return (
    <LayoutPost banner={banner} title="Sobre mim">
      <h3 className={styles.subtitle}>Olá, eu sou Victor</h3>
      <img
        src={imageSobreMim}
        alt="Foto do usuario"
        className={styles.imageSobreMim}
      />
      <p className={styles.paragraph}>
        Oi, tudo bem? Eu sou desenvolvedor front-end júnior e estou feliz de te
        ver por aqui.
      </p>
      <p className={styles.paragraph}>
        Minha história com programação começou na Secretária da Justiça de
        Rondônia (SEJUS-RO) em 06/2022 como estágioario, quando tive meu
        primeiro contato com programação de fato mesmo que estivesse cursando
        Gestao de Tecnologia da Informação. Eu comecei a desenvolver a lógica de
        programação através da linguagem de programação PHP, junto das
        lingiagens de marcação e de estilização, HTML E CSS, mas sem aprofundar
        muito em cada uma delas. Eu sempre tive dificuldae para aprender mas
        nunca desisti e até hoje sigo estudando na área após ter concluido o
        tecnolólogoo, mas na época não fazia ideia do ramo que estava tomando
        por ser muito leigo. Estive apenas très meses em contato com a área da
        programação e quando terminei o estágio devido uma viagem de última hora
        me senti perdido para tentar continuar. Uma hora ou outra via algo sobre
        html e css, mas apenas em setembro de 2023 que comecei a desenvolver
        minhas habilidades já tendo uma base mesmo que fraca e com luta venho
        buscando aprender mais ate os dias atuais deste post (01/08/2024)
      </p>
      <p className={styles.paragraph}>
        No ensino superior, eu nao escolhi cursar GTI, foi minha vó que me
        forçou mesmo que fosse um EAD. Durante o curso sempre fiz tudo muito
        mediano sem o mínimo interesse a não ser quando tinha história sobre a
        evolução dos computadores. No final do meu curso adisquiri mais
        interesse pela área e eu tinha tudo para ficar triste com o tempo não
        aproveitado, mas venho buscoando recompensar cada dia que faltei com
        meus estudos. Na empresa Facile Sistemas venho aprendendo e me
        desenvolvendo a cada dia e sou grato por terem o carinho de me receber
        mesmo fraco nas skills desejadas.
      </p>
      <p className={styles.paragraph}>
        Com isso tive minha experiência de dev mais próxima da realidade, com
        prazos de implementação para o site, e aprendi muito enquanto
        codificava.
      </p>
      <p className={styles.paragraph}>
        Minhas habilidades atuais como júnior são: GIT, GITHUB, HTML, CSS,
        Javascript, React.js, Node.js, Typescript, Docker, MySQL, MongoDB,
        SQLite, Postgre, Sequelize, Prisma,Nest, Express, Postman, testes unit
        (Jest) e e2e (Cypress), Kanban (GIT)
      </p>
      <p className={styles.paragraph}>
        Desde então, tem sido aprenas aprendizados atrás de aprendizados. A
        Facile Sistemas não é só uma empresa, mas uma família que busca ajudar
        seus colaboradores sempre que possível. Hoje sou muito feliz de fazer
        parte do time e seguir desenvolvendo cada dia mais. Espero que aprendaer
        bastante!
      </p>
    </LayoutPost>
  );
};
