// import { Container, Grid } from "@mui/material";
// import React from "react";

// export const Resume = () => {
//   return (
//     <Container>
//       <Grid>
//         <iframe
//           src="../assets/_High School Resume.pdf"
//           width="100%"
//           height="500px"
//         />
//       </Grid>
//     </Container>
//   );
// };
export const Resume = () => {
  const documentURL =
    "https://docs.google.com/document/d/17383l2ZkqVUe41odJKaJH4GZRSeFdU_XMZZD_KDY080/edit?usp=sharing";
  return (
    <div>
      <iframe src={documentURL} width="500%" height="1240px" />
    </div>
  );
};
