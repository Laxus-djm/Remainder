import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import Posts from "../components/posts";
import PostModal from "./../components/modal/index";
import { Container, Main } from "./homeElements";

function Home() {
  const [posts, setPosts] = useState(
    localStorage.posts ? JSON.parse(localStorage.posts) : []
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    image: "",
  });

  const [selectedPost, setselectedPost] = useState({});
  const [open, setOpen] = useState(false);

  const pushPost = (post) => {
    let oldPosts = [...posts];
    oldPosts.push(post);
    setPosts(oldPosts);
  };

  const handlePostClick = (post) => {
    setOpen(true);
    setselectedPost(post);
  };

  const handleDelete = (post) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((p) => p.id === post.id);
    newPosts.splice(index, 1);
    setPosts(newPosts);
    handleClose();
  };
  const handleEdit = (post) => {
    setPost(post);
    setOpen(false);
  };

  const handleClear = () => {
    setPost({ id: "", title: "", description: "", image: "" });
  };

  const handleClose = () => {
    setOpen(false);
    handleClear();
  };

  const handleReplacePost = (post) => {
    const newPosts = [...posts];
    const index = newPosts.findIndex((p) => p.id === post.id);
    newPosts.splice(index, 1, post);
    setPosts(newPosts);
    handleClear();
  };

  return (
    <Container>
      <Sidebar
        addPost={pushPost}
        post={post}
        setPost={setPost}
        clearPost={handleClear}
        replacePost={handleReplacePost}
      />

      <Main>

        <Posts posts={posts} onPostClick={handlePostClick} />
      </Main>
      <PostModal
        post={selectedPost}
        open={open}
        handleClose={handleClose}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Container>
  );
}

export default Home;
