import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Post({ post, onPostClick }) {
  return (
    <Card sx={{ height: 300 }} onClick={() => onPostClick(post)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
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
    </Card>
  );
}

export default Post;
