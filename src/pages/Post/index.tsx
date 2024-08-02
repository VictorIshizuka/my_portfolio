import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import styles from "./Post.module.css";
import "./Post.css";

import posts from "../../data/json/posts.json";

import { LayoutBase } from "../Layout";
import { NotFound } from "../NotFound";

import { PostItem } from "../../components/PostItem";
import { LayoutPost } from "../../components/LayoutPost";

export const Post = (): JSX.Element => {
  const params = useParams();

  const post = posts.find(
    post => post.id === Number(params?.id)
  ) as unknown as {
    id: string;
    title: string;
    text: string;
  };

  const recommendedPosts = posts
    .filter(post => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  if (!post) return <NotFound />;

  return (
    <Routes>
      <Route path="*" element={<LayoutBase />}>
        <Route
          index
          element={
            <LayoutPost
              banner={`../../../public/posts/${post.id}/capa.png`}
              title={post.title}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>
              <h2 className={styles.titleOthersPosts}>
                Outros posts que você pode gostar:
              </h2>
              <ul className={styles.recommendedPosts}>
                {recommendedPosts.map((post, index) => (
                  <li key={index}>
                    <PostItem id={post.id} title={post.title} />
                  </li>
                ))}
              </ul>
            </LayoutPost>
          }
        />
      </Route>
    </Routes>
  );
};
