import React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Box display="flex" justifyContent="center" mb={4}>
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          width: { xs: "90%", md: "60%" },
          boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 6px 20px rgba(0,0,0,0.5)' : '0 8px 30px rgba(102,126,234,0.12)',
          borderRadius: 3,
          "& .MuiOutlinedInput-root": {
            borderRadius: 25,
            background: "rgba(255, 255, 255, 0.92)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "#667eea",
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
            color: "#667eea",
            "&.Mui-focused": {
              color: "#764ba2",
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search sx={{ color: "#667eea" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
