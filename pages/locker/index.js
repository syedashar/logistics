import { Grid,Card } from "@mui/material";
import React from "react";
import { LockersListing } from "components/global/pages";
import { getRequest } from "services/apiClient";
import { locker } from "constants/apiEndpoints";
const Lockers = (props) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <h1 >Lockers</h1>
          <LockersListing data={props?.response?.lockers} />
      </Grid>
    </Grid>
  );
};

Lockers.getInitialProps = async () => {
  try {
    const data = await getRequest(locker);
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
};
export default Lockers;
