import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";

export const Projects = () => {
  return (
    <Container sx={{ backgroundColor: "#98c1d9" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="h1">Projects</Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "left" }}>
            Check out my GitHub because most of my projects are gonna be on
            their!
          </Typography>
        </Box>
        <Box style={{ textAlign: "left" }}>
          <Button variant="contained">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikev472357?tab=repositories"
            >
              Repositories
            </a>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
