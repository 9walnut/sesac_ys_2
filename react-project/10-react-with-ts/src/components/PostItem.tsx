// PostItem 컴포넌트입니다.
import React from "react";
import { Post } from "../types/types";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const { post } = props;

  return (
    <div className="PostItem">
      <div>
        <span className="id">No. {post.id}</span>
        <span className="title">- {post.title}</span>
      </div>
      <p className="body">{post.body.slice(0, 120)}...</p>
    </div>
  );
};

export default PostItem;
