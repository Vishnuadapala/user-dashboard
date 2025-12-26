import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, ThemeProvider, createTheme } from "@mui/material";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "dark" && {
        background: {
          default: "#121212",
          paper: "#1e1e1e",
        },
        text: {
          primary: "#ffffff",
          secondary: "#b0b0b0",
        },
      }),
    },
  });

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch user data.");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <div data-theme={mode}>
        <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1000 }}>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>
        <Container sx={{ py: 5, position: "relative", zIndex: 1 }}>
          {/* decorative blurred blobs */}
          <div className="decor-bg" style={{ width: 260, height: 260, left: -80, top: -40, background: "radial-gradient(circle at 30% 30%, #ffb86b, transparent 40%)" }} />
          <div className="decor-bg" style={{ width: 340, height: 340, right: -120, bottom: -80, background: "radial-gradient(circle at 70% 70%, #8a67e6, transparent 40%)" }} />

          <Typography variant="h4" align="center" gutterBottom className="title-gradient">
            User Directory
          </Typography>
          <Typography variant="subtitle1" align="center" sx={{ color: "text.secondary", mb: 3 }}>
            Browse and search sample users — polished with subtle animations and theme support.
          </Typography>
          <SearchBar search={search} setSearch={setSearch} />

          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
              <div className="custom-spinner"></div>
            </Box>
          ) : error ? (
            <Typography color="error" align="center">
              {error}
            </Typography>
          ) : (
            filteredUsers.length === 0 ? (
              <Box className="no-results">
                <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="0" y="0" width="160" height="120" rx="12" fill="rgba(255,255,255,0.05)" />
                  <g transform="translate(20,20)" fill="rgba(255,255,255,0.85)">
                    <circle cx="20" cy="20" r="18" fill="#667eea" />
                    <rect x="48" y="6" width="72" height="10" rx="4" />
                    <rect x="48" y="28" width="52" height="8" rx="4" />
                  </g>
                </svg>
                <Typography variant="h6" sx={{ mt: 2 }}>No users found</Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>Try a different name or clear the search.</Typography>
              </Box>
            ) : (
              <Grid container spacing={3} justifyContent="center">
                {filteredUsers.map((user) => (
                  <Grid item key={user.id} xs={12} sm={6} md={4}>
                    <UserCard user={user} />
                  </Grid>
                ))}
              </Grid>
            )
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
