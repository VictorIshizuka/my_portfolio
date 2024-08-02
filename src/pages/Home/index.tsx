import styles from "./Home.module.css";

import { IPost } from "../../types/post";

import posts from "../../data/json/posts.json";

import { PostItem } from "../../components/PostItem";

export const Home = (): JSX.Element => {
  return (
    <ul className={styles.posts}>
      {posts.map((post: IPost) => {
        return <PostItem id={post.id} title={post.title} />;
      })}
    </ul>
  );
};
