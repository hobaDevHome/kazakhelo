import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function CardItem({ id, text, imgURL, videoURL, total }) {
  return (
    <Card
      sx={{
        marginBottom: 2,
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="kazakhelo" src="/images/avatar.jpg" />}
        title="Kazakhelo_"
      />

      <CardContent>
        <Typography
          variant="h5"
          color="black"
          sx={{ textAlign: "right", paddingBottom: 3 }}
        >
          {text}
        </Typography>

        <div>
          {imgURL && (
            <CardMedia
              component="img"
              alt={`Card ${id}`}
              height="140"
              src={imgURL}
            />
          )}
        </div>

        <div
          style={{
            width: "90%",
            display: "flex",
            margin: "0 auto",
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          {videoURL && <CardMedia component="video" controls src={videoURL} />}
        </div>
        <Typography
          variant="h5"
          color="black"
          sx={{ textAlign: "center", padding: 3 }}
        >
          {id} / {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardItem;
