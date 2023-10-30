import { Container, Box, Typography, Button } from "@mui/material";
import React from "react";

export const Contact = () => {
  return (
    <Container sx={{ backgroundColor: "#ade8f4" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box>
          <Typography variant="h1" align="center">
            Contact
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "left" }}>
            If you ever want to contact me about any questions or oppertunities
            you may have here are some ways you can do that!
          </Typography>
        </Box>
        <Box style={{ textAlign: "left" }}>
          <Button variant="contained">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:michaelvalderrama2006@gmail.com"
            >
              Email
            </a>
          </Button>
        </Box>
        <Box style={{ textAlign: "right" }}>
          <Button variant="contained">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mikev472357"
            >
              GitHub
            </a>
          </Button>
        </Box>
        <Box>
          <img
            src="https://media.tenor.com/0WkmuOC_W00AAAAC/waving-pikachu.gif"
            alt="PFP"
            style={{
              height: "50%",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};
