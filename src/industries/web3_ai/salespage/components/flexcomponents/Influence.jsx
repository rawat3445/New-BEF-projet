import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import influenceImg from "../../assets/img/influence.png";

export default function Influence() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 320,
        margin: 2,
        textAlign: "center",
        backgroundColor: "#121212", // black background
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
        flexDirection: "column",
      }}
    >
      <img
        src={influenceImg}
        alt="Influence"
        style={{
          width: "100%",
          height: "160px", // half of 320px card height
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
          Influence the Future
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Shape policy, innovation, and society by connecting with visionary
          changemakers and thought leaders.
        </Typography>
      </CardContent>
    </Card>
  );
}
