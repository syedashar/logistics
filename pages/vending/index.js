import { Grid } from "@mui/material";
import React from "react";
import { VendingMachine } from "components/global/pages";
import { getRequest } from "services/apiClient";
import { vending } from "constants/apiEndpoints";

const VendingMachines = (props) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <h1 className="text-[#422927]">Vending Machines</h1>
        <VendingMachine data={props?.response} />
      </Grid>
    </Grid>
  );
};

VendingMachines.getInitialProps = async () => {
  try {
  const data = await getRequest(vending);
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default VendingMachines;
