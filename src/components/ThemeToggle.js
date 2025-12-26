import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = ({ mode, toggleTheme }) => {
  return (
    <Tooltip title={mode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          background: "rgba(37, 99, 235, 0.1)",
          color: "#2563eb",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "rgba(37, 99, 235, 0.2)",
            transform: "rotate(20deg)",
          },
        }}
      >
        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
