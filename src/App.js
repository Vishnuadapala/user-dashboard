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
      primary: {
        main: "#2563eb",
        light: "#60a5fa",
        dark: "#1e40af",
      },
      secondary: {
        main: "#10b981",
        light: "#34d399",
        dark: "#059669",
      },
      success: {
        main: "#10b981",
      },
      warning: {
        main: "#f59e0b",
      },
      error: {
        main: "#ef4444",
      },
      ...(mode === "light" && {
        background: {
          default: "#f8fafc",
          paper: "#ffffff",
        },
        text: {
          primary: "#1e293b",
          secondary: "#64748b",
        },
      }),
      ...(mode === "dark" && {
        background: {
          default: "#0f172a",
          paper: "#1e293b",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#cbd5e1",
        },
      }),
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
      h4: {
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      },
      h6: {
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      body2: {
        lineHeight: 1.5,
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      "none",
      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    ],
  });

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(
          `${supabaseUrl}/functions/v1/get-users`,
          {
            headers: {
              Authorization: `Bearer ${anonKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <div data-theme={mode}>
        <Box sx={{ position: "absolute", top: 20, right: 20, zIndex: 1000 }}>
          <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        </Box>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                mb: 2,
                background: mode === "light"
                  ? "linear-gradient(135deg, #2563eb 0%, #10b981 100%)"
                  : "linear-gradient(135deg, #60a5fa 0%, #34d399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              User Directory
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "text.secondary" }}
            >
              Discover and connect with our community members
            </Typography>
          </Box>
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
