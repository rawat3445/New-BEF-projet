import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import collaborateImg from "../../assets/img/collaborateimg.jpg";

export default function Collaborate() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 320,
        margin: 2,
        textAlign: "center",
        backgroundColor: "#121212",
        color: "white",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 30px rgba(103, 58, 183, 0.8)",
        },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={collaborateImg}
        alt="Collaborate"
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          padding: 2,
        }}
      >
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
          Collaborate with Leaders
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Engage with top founders, government leaders, and tech investors
          steering India's digital future.
        </Typography>
      </CardContent>
    </Card>
  );
}
