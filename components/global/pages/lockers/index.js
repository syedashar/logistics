import { Box, Grid, TablePagination } from '@mui/material';
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
import React, { useEffect, useState } from "react";
import MapGL, { Marker } from "react-map-gl";
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
 const LockerList = ({data}) => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0)];
  const [details, setDetails] = useState(undefined);
  const [shipments , setShipments] = useState(undefined)
    const [viewport, setViewport] = React.useState({
        latitude: 33.7299,
        longitude: 73.0763,
        zoom: 12
      });
      const [rowsPerPage, setRowsPerPage] = useState(10);
      const [page, setPage] = useState(0);
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      console.log("details ==> ", details);

  return (
    <>
    <Grid container>
      <Grid item xs={12} md={4} sx={{ overflowY: "scroll", height: 300 }}>
      {data &&
                    data?.map((o, i) => {
                      return (
          <Card key= {i} sx={{ maxWidth: 345, padding: "0px" }}>
            <CardContent sx={{ padding: "0px 20px" }}>
              <Typography  gutterBottom variant="h5" component="div">
           {o.locker_name}
              </Typography>

              <Typography variant="body2">Address: {o.locker_address
}</Typography>
             
            </CardContent>
            <CardActions>
            </CardActions>
          </Card>
  );
})}
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

            {
              data && data.map((loc,i) => {
                let pattern = new RegExp("^-?([1-8]?[1-9]|[1-9]0)\\.{1}\\d{1,6}");
                if (loc.latitude === null || loc.longitude === null) {
                  return null;
                
                }

                if (pattern.test(loc.latitude) && pattern.test(loc.longitude)) {
       
                  // console.log("locations ==> ", locations);
                  return (
                    <Marker onClick={() => setDetails(loc)} key={i} longitude={loc.longitude} latitude={loc.latitude}>
                  <Image src="/pin.svg" width={30} height={30} />
                </Marker>
                  )
                }
              
              
              })
            }
               


          </MapGL>
        
        </Box>
      </Grid>
    </Grid>



  </>
  );
 };

export  default LockerList