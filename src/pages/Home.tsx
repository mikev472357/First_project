import { Container, Box, Typography } from "@mui/material";
// import { ModelViewer } from "../components/ModelViewer";

export const Home = () => {
  return (
    <Container sx={{ backgroundColor: "#d4a373" }}>
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
            Welcome
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ textAlign: "left" }}>
            My name is Michael Valderrama and I am a senior at Berkner High
            School. I am pursuing a career in Computer Science and I hope you
            enjoy the rest of my website!
          </Typography>
        </Box>
        <Box
          style={{
            height: "500%",
          }}
        >
          <model-viewer
            src="/src/assets/eevee.glb"
            alt="Eevee 3D Model"
            camera-controls
          ></model-viewer>
        </Box>
      </Box>
    </Container>
  );
};
