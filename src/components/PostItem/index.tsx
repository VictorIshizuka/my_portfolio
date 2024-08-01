import styles from "./PostItem.module.css";

import { IPost } from "../../types/post";

export const PostItem = ({
  title,
  id,
}: Pick<IPost, "id" | "title">): JSX.Element => {
  return (
    <div className={styles.post}>
      <img
        className={styles.backgroundImage}
        src={`../../../public/posts/${id}/capa.png`}
        alt="Imagem de capa do post"
      />
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.buttonRead}>Ler</button>
    </div>
  );
};
