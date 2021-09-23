import React, { useState } from "react";
import {
  SideBarContainer,
  SideBarWrapper,
  SideBarForm,
  InputContainer,
  ButtonsContainer,
  Btn,
  FilebaseContainer,
  Title,
} from "./SidebarElements";

import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Filebase from "react-file-base64";
import { validate } from "../../validate";

function Sidebar({ addPost, post, setPost, clearPost, replacePost }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (post.id === "") {
      const p = { ...post };
      p.id = Date.now().toString();
      addPost(p);
      clearPost();
    } else {
      replacePost(post);
    }
  };

  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarForm autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Title> Remainder </Title>
          <Typography variant="h5">Create a post</Typography>
          <InputContainer>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              fullWidth
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              value={post.title}
            />
          </InputContainer>

          <InputContainer>
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              fullWidth
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              value={post.description}
              sx={{
                marginBottom: "20px",
              }}
            />
          </InputContainer>

          <FilebaseContainer>
            <Filebase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPost({ ...post, image: base64 })}
            />
          </FilebaseContainer>
          <ButtonsContainer>
            <Btn
              variant="contained"
              type="submit"
              disabled={validate(post).length !== 0}
              color="success"
              size="large"
            >
              Submit
            </Btn>
            <Btn
              variant="contained"
              color="secondary"
              size="large"
              onClick={clearPost}
            >
              Clear
            </Btn>
          </ButtonsContainer>
        </SideBarForm>
      </SideBarWrapper>
    </SideBarContainer>
  );
}

export default Sidebar;
