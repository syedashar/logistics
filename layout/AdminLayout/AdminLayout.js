import React from 'react';
import Sidebar from './Sidebar'
import { Grid,Container } from "@mui/material";
const  AdminLayout = ({ children }) => {

  return (
    <Container>
      <h1 className="my-[20px]">Tabsera</h1>

      <Grid container spacing={1} className=" mt-[50px]">
        <Grid item xs={4} className="h-[100vh] shadow-lg rounded-lg ">
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
export default AdminLayout;