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
        <Container maxWidth="lg" sx={{ py: 8, position: "relative", zIndex: 1 }}>
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
