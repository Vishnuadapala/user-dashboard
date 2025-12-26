import React from "react";
import { Card, Typography, Avatar, Box } from "@mui/material";
import { Email, Phone, LocationOn, Business } from "@mui/icons-material";

const UserCard = ({ user }) => {
  return (
    <Card
      className="user-card"
      sx={{
<<<<<<< HEAD
        borderRadius: 2,
        overflow: "hidden",
        "&:hover": {
          "& .avatar-wrapper": {
            transform: "scale(1.05) translateY(-2px)",
          },
          "& .info-item": {
            transform: "translateX(4px)",
          },
        },
=======
        borderRadius: 3,
        boxShadow: 3,
        "&:hover": { boxShadow: 8, transform: "translateY(-6px) scale(1.02)" },
        transition: "transform 240ms ease, box-shadow 240ms ease",
        backgroundColor: (theme) => (theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(255, 255, 255, 0.95)"),
        backdropFilter: "blur(8px)",
        border: (theme) => (theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255, 255, 255, 0.2)"),
>>>>>>> feature/ui-polish
      }}
    >
      <Card
        className="user-card"
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 3,
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 8,
          },
          transition: "transform 240ms ease, box-shadow 240ms ease",
          backgroundColor: (theme) => (theme.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "#ffffff"),
          border: (theme) => (theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(226,232,240,0.6)"),
        }}
      >
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Box
            className="avatar-wrapper"
            sx={{
              mb: 2.5,
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              textAlign: 'center'
            }}
          >
            <Avatar
              sx={{
                width: 88,
                height: 88,
                mx: "auto",
                backgroundImage: "linear-gradient(135deg,#667eea,#764ba2)",
                color: "#fff",
                fontSize: "2rem",
                fontWeight: 700,
                boxShadow: "0 6px 18px rgba(102,126,234,0.16)",
              }}
            >
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 0.5,
              fontSize: "1.05rem",
              letterSpacing: "-0.01em",
              textAlign: 'center'
            }}
          >
            {user.name}
          </Typography>
            fontSize: "1.1rem",
            letterSpacing: "-0.01em",
=======
            width: 88,
            height: 88,
            mx: "auto",
            mb: 2,
            bgcolor: "transparent",
            backgroundImage: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "#fff",
            fontSize: "2rem",
            boxShadow: 2,
>>>>>>> feature/ui-polish
          }}
        >
          {user.name}
        </Typography>

        <Box sx={{ mt: 2.5, display: "flex", flexDirection: "column", gap: 1.2 }}>
          <Box
            className="info-item"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "transform 0.2s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "rgba(37, 99, 235, 0.1)",
              }}
            >
              <Email sx={{ fontSize: "1.1rem", color: "#2563eb" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
              }}
            >
              {user.email}
            </Typography>
          </Box>

          <Box
            className="info-item"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "transform 0.2s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "rgba(37, 99, 235, 0.1)",
              }}
            >
              <Phone sx={{ fontSize: "1.1rem", color: "#2563eb" }} />
            </Box>
            <Typography variant="body2">{user.phone}</Typography>
          </Box>

          <Box
            className="info-item"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "transform 0.2s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "rgba(16, 185, 129, 0.1)",
              }}
            >
              <LocationOn sx={{ fontSize: "1.1rem", color: "#10b981" }} />
            </Box>
            <Typography variant="body2">
              {user.address.city}, {user.address.street}
            </Typography>
          </Box>

          <Box
            className="info-item"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              transition: "transform 0.2s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                borderRadius: "8px",
                background: "rgba(16, 185, 129, 0.1)",
              }}
            >
              <Business sx={{ fontSize: "1.1rem", color: "#10b981" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
              }}
            >
              {user.company.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default UserCard;
