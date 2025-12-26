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
          width: { xs: "90%", md: "60%" },
          maxWidth: 500,
          boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 6px 20px rgba(0,0,0,0.5)' : '0 8px 30px rgba(102,126,234,0.12)',
          borderRadius: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 25,
            background: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255, 255, 255, 0.92)',
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.08)",
              transition: "border-color 0.2s ease",
            },
            "&:hover fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
            },
            "&.Mui-focused fieldset": {
              borderColor: "#764ba2",
              boxShadow: '0 6px 20px rgba(118,75,162,0.12)'
            },
            "& input::placeholder": {
              color: 'rgba(0,0,0,0.4)'
            }
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
