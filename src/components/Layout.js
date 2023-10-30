import React from "react";
import { Container, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { SideNav } from "./SideNav";

export const Layout = () => {
  return (
    <Container>
      <Grid container>
        <Grid>
          <SideNav />
        </Grid>
        <Grid>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
