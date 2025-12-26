import React from "react";
import { Card, Typography, Avatar, Box } from "@mui/material";
import { Email, Phone, LocationOn, Business } from "@mui/icons-material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
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
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%)",
          p: 3,
          textAlign: "center",
        }}
      >
        <Box
          className="avatar-wrapper"
          sx={{
            mb: 2.5,
            transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mx: "auto",
              background: "linear-gradient(135deg, #2563eb 0%, #10b981 100%)",
              fontSize: "2rem",
              fontWeight: 700,
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.3)",
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
            fontSize: "1.1rem",
            letterSpacing: "-0.01em",
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
