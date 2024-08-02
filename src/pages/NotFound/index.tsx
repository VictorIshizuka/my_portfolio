import { useNavigate } from "react-router-dom";

import styles from "./NotFound.module.css";

import error404 from "../../assets/erro_404.png";

import { Button } from "../../components/Button";

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>Ops, página não encontrada!</h1>
        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>
        <div className={styles.buttonContainer}>
          <Button long="lg" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </div>
        <img
          className={styles.imageDog}
          src={error404}
          alt="imagem dog vestido usando óculos"
        />
      </div>
      <div className={styles.spaceBlank}></div>
    </>
  );
};
