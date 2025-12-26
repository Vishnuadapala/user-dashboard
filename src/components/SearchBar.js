import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Box display="flex" justifyContent="center" mb={6} sx={{ animation: "fadeInUp 0.4s ease-out" }}>
      <TextField
        placeholder="Search by name..."
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: "100%",
          maxWidth: 500,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            transition: "all 0.2s ease",
            fontSize: "0.95rem",
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.08)",
              transition: "border-color 0.2s ease",
            },
            "&:hover fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
              boxShadow: "0 0 0 3px rgba(37, 99, 235, 0.1)",
            },
          },
          "& .MuiInputLabel-root": {
            transition: "all 0.2s ease",
            "&.Mui-focused": {
              color: "#2563eb",
            },
          },
          "& .MuiOutlinedInput-input::placeholder": {
            opacity: 0.5,
            color: "currentColor",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "#2563eb", fontSize: "1.2rem" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
