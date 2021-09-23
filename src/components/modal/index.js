import React from "react";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Btn } from "./modalElements";

const style = {
  margin: "20px auto",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
};

function PostModal({ post, open, handleClose, onDelete, onEdit }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ overflowY: "scroll" }}
    >
      <Card sx={style}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={
              post.image
                ? post.image
                : "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Btn
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#38b000",
              "&:hover": {
                backgroundColor: "#38b000",
              },
            }}
            onClick={() => onEdit(post)}
          >
            Edit
          </Btn>
          <Btn
            size="small"
            variant="contained"
            sx={{
              backgroundColor: "#ba0001",
              "&:hover": {
                backgroundColor: "#ba0001",
              },
            }}
            onClick={() => onDelete(post)}
          >
            Delete
          </Btn>
        </CardActions>
      </Card>
    </Modal>
  );
}

export default PostModal;
