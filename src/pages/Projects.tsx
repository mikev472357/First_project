import { Box, Typography, Button, Link } from "@mui/material";

export const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#C9B003",
        width: "100000%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography variant="h1">Projects</Typography>
      </Box>
      <Box>
        <Typography sx={{ textAlign: "left" }}>
          Check out my GitHub because most of my projects are gonna be on their!
        </Typography>
      </Box>
      <Box style={{ textAlign: "left" }}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mikev472357?tab=repositories"
        >
          <Button variant="contained">
            <Typography sx={{ color: "#C9B003" }}>Repositories</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
