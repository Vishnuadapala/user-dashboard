import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Email, Phone, LocationOn, Business } from "@mui/icons-material";

const UserCard = ({ user }) => {
  return (
    <Card
      className="user-card"
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 8, transform: "translateY(-6px) scale(1.02)" },
        transition: "transform 240ms ease, box-shadow 240ms ease",
        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255, 255, 255, 0.95)"),
        backdropFilter: "blur(8px)",
        border: (theme) => (theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255, 255, 255, 0.2)"),
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          sx={{
            width: 88,
            height: 88,
            mx: "auto",
            mb: 2,
            bgcolor: "transparent",
            backgroundImage: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontSize: "2rem",
            boxShadow: 2,
          }}
        >
          {user.name.charAt(0)}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {user.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <Email sx={{ mr: 1, color: "#667eea" }} />
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <Phone sx={{ mr: 1, color: "#667eea" }} />
          <Typography variant="body2" color="text.secondary">
            {user.phone}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
          <LocationOn sx={{ mr: 1, color: "#667eea" }} />
          <Typography variant="body2" color="text.secondary">
            {user.address.city}, {user.address.street}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Business sx={{ mr: 1, color: "#667eea" }} />
          <Typography variant="caption" color="text.secondary">
            {user.company.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
