import { Box, Typography } from "@mui/material";
// import { ModelViewer } from "../components/ModelViewer";

export const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#d4a373",
        width: "1000000%",
        display: "flex",
        flexDirection: "column",
        height: "100%vh",
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
        {/* <ModelViewer
          src="/src/assets/eevee.glb"
          alt="Eevee 3D Model"
          camera-controls
        ></ModelViewer> */}
      </Box>
    </Box>
  );
};
