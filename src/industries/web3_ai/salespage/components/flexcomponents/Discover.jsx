import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import discoverImg from "../../assets/img/discover.png";

export default function Discover() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 320,
        margin: 2,
        textAlign: "center",
        backgroundColor: "#121212", // dark background
        color: "white", // white text
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 30px rgba(103, 58, 183, 0.8)", // purple glow
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={discoverImg}
        alt="Discover"
        style={{
          width: "100%",
          height: "160px", // half of card height
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
          Discover Emerging Trends
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Explore latest developments in AI, Web3, and emerging technologies
          shaping India’s tech ecosystem.
        </Typography>
      </CardContent>
    </Card>
  );
}
