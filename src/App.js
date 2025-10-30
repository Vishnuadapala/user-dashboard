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
        <Container sx={{ py: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
            User Directory
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
            <Grid container spacing={3} justifyContent="center">
              {filteredUsers.map((user) => (
                <Grid item key={user.id} xs={12} sm={6} md={4}>
                  <UserCard user={user} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
