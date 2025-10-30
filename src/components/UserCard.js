import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { Email, Phone, LocationOn, Business } from "@mui/icons-material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
        transition: "0.3s",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mx: "auto",
            mb: 2,
            bgcolor: "#667eea",
            fontSize: "2rem",
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
