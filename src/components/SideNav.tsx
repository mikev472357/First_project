import React from "react";
import { Box, List, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SideNav = () => {
  const [sideNavColor, setSideNavColor] = React.useState("white");

  return (
    <div>
      <Box
        sx={{
          height: "90vh",
          width: 200,
          border: "1px black solid",
          backgroundColor: sideNavColor,
        }}
      >
        <Box component="div" sx={{ width: 200 }}>
          <List>
            <Link to="/home">
              <Button
                onClick={() => {
                  setSideNavColor("#d4a373");
                }}
              >
                <Typography sx={{ color: "Black" }}>Home</Typography>
              </Button>
            </Link>
          </List>
          <List>
            <Link to="/projects">
              <Button
                onClick={() => {
                  setSideNavColor("#C9B003");
                }}
              >
                <Typography sx={{ color: "Black" }}>Projects</Typography>
              </Button>
            </Link>
          </List>
          <List>
            <Link to="/resume">
              <Button
                onClick={() => {
                  setSideNavColor("white");
                }}
              >
                <Typography sx={{ color: "Black" }}>Resume</Typography>
              </Button>
            </Link>
          </List>
          <List>
            <Link to="/contact">
              <Button
                onClick={() => {
                  setSideNavColor("#ffff3f");
                }}
              >
                <Typography sx={{ color: "Black" }}>Contact</Typography>
              </Button>
            </Link>
          </List>
        </Box>
      </Box>
    </div>
  );
};
