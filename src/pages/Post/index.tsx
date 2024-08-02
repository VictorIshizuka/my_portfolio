import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import posts from "../../data/json/posts.json";

import { LayoutPost } from "../../components/LayoutPost";
import "./Post.css";

export const Post = (): JSX.Element => {
  const params = useParams();
  const post = posts.find(post => post.id === Number(params?.id));
  return (
    <>
      {!!post && (
        <LayoutPost
          banner={`../../../public/posts/${post.id}/capa.png`}
          title={post.title}
        >
          <div className="post-markdown-container">
            <ReactMarkdown>{post.text}</ReactMarkdown>
          </div>
        </LayoutPost>
      )}
    </>
  );
};
