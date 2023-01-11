import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "maplibre-gl/dist/maplibre-gl.css";

const TOKEN =
  "pk.eyJ1IjoiaHVjaGVuc2NiIiwiYSI6ImNqdHpnbGZ5ejFneXEzeW81a3B3anJkZGoifQ.RjMCIQBbS0dlzTl85EogQw";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
 const VendingMachineList = ({ data }) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
  const [details, setDetails] = useState(undefined);
  const [viewport, setViewport] = React.useState({
    latitude: 33.7299,
    longitude: 73.0763,
    zoom: 12,
  });

  console.log("details ==> ", details);
  const VMProducts = async (vm) => {
    let result = await axios.get(
      `http://115.186.185.229:5001/vending-machines/products/${vm}`
    );
    setDetails(result.data.response);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ overflowY: "scroll", height: 300, padding: "10px" }}
        >
          <Grid container spacing={2}>
            {data &&
              data?.map((o, i) => {
                return (
                  <Grid item xs={12} key={i}>
                    <Card sx={{ maxWidth: 345, padding: "0px" }}>
                      <CardContent sx={{ padding: "0px 20px" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {o.businessName}
                        </Typography>

                        <Typography variant="body2">
                          Address: {o.businessAddress}
                        </Typography>
                        <Typography variant="body2">
                          Vm Name: {o.vendingMachineName}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              width: 800,
              height: 300,
              padding: "0px",
            }}
          >
            <MapGL
              mapStyle="mapbox://styles/mapbox/streets-v9"
              {...viewport}
              width="100%"
              height="100%"
              onViewportChange={(viewport) => setViewport(viewport)}
              mapboxAccessToken={TOKEN}
            >
              {data &&
                data?.map((locker,i) => {
                  let pattern = new RegExp(
                    "^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}"
                  );
                  if (locker.latitude === null || locker.longitude === null) {
                    return null;
                  }

                  if (
                    pattern.test(locker.latitude) &&
                    pattern.test(locker.longitude)
                  ) {
                    return (
                      <Marker
                        onClick={() => VMProducts(locker.vendingMachineId)}
                        longitude={locker.longitude}
                        latitude={locker.latitude}
                        key = {i}
                      >
                        <div style={{ cursor: "pointer" }}>
                          <Image
                            src="https://cdn-icons-png.flaticon.com/512/2776/2776067.png"
                            width={30}
                            height={30}
                          />
                        </div>
                      </Marker>
                    );
                  }
                })}
            </MapGL>
          </Box>
        </Grid>
      </Grid>

      {details && (
        <Grid mt={5} container spacing={2}>
          <Typography ml={3} variant="h4">
            Inventory Details
          </Typography>
          {/* <Grid item md={6}>
        Origin{" "}
      </Grid> */}
          {/* <Grid item md={6}>
        Destination
      </Grid> */}
          <Grid item md={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Product Name
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Max Quantity
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      Available Quantity
                    </TableCell>

                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      SKU
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      selling Price
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {details?.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{row.productName}</TableCell>
                      <TableCell align="left">{row.maxQuantity}</TableCell>
                      <TableCell align="left">
                        {row.availableQuantity}
                      </TableCell>
                      <TableCell align="left">{row.productSku}</TableCell>
                      <TableCell align="left">
                        {row.productSellingPrice}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default VendingMachineList;
