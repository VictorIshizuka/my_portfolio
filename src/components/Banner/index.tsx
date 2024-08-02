import styles from "./Banner.module.css";

import coloredCircle from "../../assets/circulo_colorido.png";
import myImage from "../../assets/circulo_colorido.png";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>Bem vindo!</h1>

        <p className={styles.paragraph}>
          Eu sou Victor Ishizuka, desenvolvedor forntend júnior. Aqui
          compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          alt=""
          aria-hidden={true}
        />

        <img
          className={styles.myImage}
          src={myImage}
          alt="Foto do Antônio Evaldo sorrindo"
        />
      </div>
    </div>
  );
}
