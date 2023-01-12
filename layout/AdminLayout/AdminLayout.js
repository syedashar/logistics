import React from "react";
import Sidebar from "./Sidebar";
import { Grid, Container } from "@mui/material";
import Header from "./Header";

const AdminLayout = ({ children }) => {
  return (
    <Container>
      <Header />

      <Grid container spacing={1} className=" mt-[50px]">
        <Grid item xs={3} className="h-[100vh] shadow-lg rounded-lg ">
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
};
export default AdminLayout;
