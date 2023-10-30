import React from "react";
import { Container, Box, Typography } from "@mui/material";
// import ModelViewer from "../components/ModelViewer";

export const Home = () => {
  return (
    <Container sx={{ backgroundColor: "#caf0f8" }}>
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
        <Box>
          {/* <ModelViewer
            src="/src/assets/uploads_files_4725876_Emoticon+40.glb"
            alt="PFP"
            // // style={{
            // //   height: "50%",
            // //   borderRadius: "50%",
            // }}
          /> */}
        </Box>
      </Box>
    </Container>
  );
};
