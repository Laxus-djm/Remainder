import React from "react";
import { Container, Wrapper } from "./PostsElements";
import Post from "../post";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Posts({ posts, onPostClick }) {
  return (
    <Container>
      <TransitionGroup component={Wrapper}>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="transition">
            <Post post={post} onPostClick={onPostClick} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
}

export default Posts;
