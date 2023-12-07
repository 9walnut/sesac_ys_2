import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2({ postId }) {
  // https://jsonplaceholder.typicode.com/posts/
  const [post, setPost] = useState();

  const fetchData = useCallback(async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const post = await res.json();
    setPost(post);
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <h3>useCallback 공부2</h3>
      <div>조회한 포스트 Id: {postId}</div>
      {post && (
        <div>
          <div>id : {post.Id}</div>
          <div>title : {post.title}</div>
          <div>body : {post.body}</div>
        </div>
      )}
    </>
  );
}
