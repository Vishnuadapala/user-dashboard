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
          width: "60%",
          "& .MuiOutlinedInput-root": {
            borderRadius: 25,
            background: "rgba(255, 255, 255, 0.9)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "#667eea",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#764ba2",
            },
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
