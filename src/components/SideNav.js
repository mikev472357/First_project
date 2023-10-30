import React from "react";
import { Box, List, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

export const SideNav = () => {
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  // const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ height: "90vh", width: 200, border: "1px black solid" }}>
        <Box component="div" sx={{ width: 200 }}>
          <List>
            <Button>
              <Link to="/home">Home</Link>
            </Button>
          </List>
          <List>
            <Button>
              <Link to="/projects">Projects</Link>
            </Button>
          </List>
          <List>
            <Button>
              <Link to="/resume">Resume</Link>
            </Button>
          </List>
          <List>
            <Button>
              <Link to="/contact">Contact</Link>
            </Button>
          </List>
        </Box>
      </Box>
    </div>
  );
};
