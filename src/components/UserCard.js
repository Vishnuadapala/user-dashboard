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
        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "#ffffff"),
        border: (theme) => (theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(226,232,240,0.6)"),
      }}
    >
      <CardContent sx={{ textAlign: "center", p: 3 }}>
        <Avatar
          sx={{
            width: 88,
            height: 88,
            mx: "auto",
            mb: 2,
            backgroundImage: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: 700,
            boxShadow: "0 6px 18px rgba(102,126,234,0.16)",
          }}
        >
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </Avatar>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          {user?.name || "Unknown"}
        </Typography>

        <Box sx={{ mt: 2.5, display: "flex", flexDirection: "column", gap: 1.2 }}>
          <Box
            className="info-item"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <Box sx={{ width: 32, height: 32, borderRadius: 1, display: "grid", placeItems: "center", background: "rgba(37, 99, 235, 0.08)" }}>
              <Email sx={{ fontSize: "1.05rem", color: "#2563eb" }} />
            </Box>
            <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
              {user?.email}
            </Typography>
          </Box>

          <Box className="info-item" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 1, display: "grid", placeItems: "center", background: "rgba(37, 99, 235, 0.08)" }}>
              <Phone sx={{ fontSize: "1.05rem", color: "#2563eb" }} />
            </Box>
            <Typography variant="body2">{user?.phone}</Typography>
          </Box>

          <Box className="info-item" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 1, display: "grid", placeItems: "center", background: "rgba(16, 185, 129, 0.08)" }}>
              <LocationOn sx={{ fontSize: "1.05rem", color: "#10b981" }} />
            </Box>
            <Typography variant="body2">{user?.address?.city}, {user?.address?.street}</Typography>
          </Box>

          <Box className="info-item" sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, borderRadius: 1, display: "grid", placeItems: "center", background: "rgba(16, 185, 129, 0.08)" }}>
              <Business sx={{ fontSize: "1.05rem", color: "#10b981" }} />
            </Box>
            <Typography variant="body2" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1 }}>
              {user?.company?.name}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
