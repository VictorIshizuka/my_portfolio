import styles from "./LayoutPost.module.css";

export const LayoutPost = ({
  banner,
  title,
  children,
}: {
  banner: string;
  title: string;
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <article className={styles.postContainer}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContentContainer}>{children}</div>
    </article>
  );
};
