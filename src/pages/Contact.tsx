import { Container, Box, Typography, Button, Link } from "@mui/material";
import { ModelViewer } from "../components/ModelViewer";

export const Contact = () => {
  return (
    <Container sx={{ backgroundColor: "#ffff3f" }}>
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
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:michaelvalderrama2006@gmail.com"
          >
            <Button variant="contained">
              <Typography style={{ color: "yellow" }}>Email</Typography>
            </Button>
          </Link>
        </Box>
        <Box style={{ textAlign: "right" }}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mikev472357"
          >
            <Button variant="contained">
              <Typography style={{ color: "yellow" }}>GitHub</Typography>
            </Button>
          </Link>
        </Box>
        {/* <Box>
          <img
            src="https://media.tenor.com/0WkmuOC_W00AAAAC/waving-pikachu.gif"
            alt="PFP"
            style={{
              height: "50%",
              borderRadius: "50%",
            }}
          />
        </Box> */}
        <Box>
          <ModelViewer
            src="/src/assets/jolteon.glb"
            alt="Jolteon Pokemon"
            // // style={{
            // //   height: "50%",
            // //   borderRadius: "50%",
            // }}
          />
        </Box>
      </Box>
    </Container>
  );
};
