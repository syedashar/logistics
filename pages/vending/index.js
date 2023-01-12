import { Grid } from "@mui/material";
import React from "react";
import { VendingMachine } from "components/global/pages";
import { getRequest } from "services/apiClient";
import { vending } from "constants/apiEndpoints";

const VendingMachines = (props) => {
  let response = [
    {
      userProfileId: 353,
      userId: 601,
      subscriptionDate: "2022-08-10T11:06:48.675Z",
      businessName: "Tabsera",
      bussinessDescription: "Test",
      businessEmail: "tabsera.dev@yopmail.com",
      businessPhone: "+928007897987",
      businessAddress: "Islamabad",
      postalCode: "44000",
      operatorId: 601,
      vendingMachineId: 190,
      vendingMachineName: "October 25 VM",
      vendingMachineLogoUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666692151229.jpg",
      vendingMachineArtworkUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666692150567.jpg",
      VedingmachineStatusId: 1,
      vendingMachineModeId: 1,
      chargePlanId: 11,
      hostId: 643,
      features: ["Cooling", "CCTV"],
      vmStatus: "Online",
      slotDepth: "15",
      defaultSlotTypId: 2,
      longitude: 73.0883234,
      latitude: 33.7328221,
    },
    {
      userProfileId: 353,
      userId: 601,
      subscriptionDate: "2022-08-10T11:06:48.675Z",
      businessName: "Tabsera",
      bussinessDescription: "Test",
      businessEmail: "tabsera.dev@yopmail.com",
      businessPhone: "+928007897987",
      businessAddress: "Islamabad",
      postalCode: "44000",
      operatorId: 601,
      vendingMachineId: 170,
      vendingMachineName: "VM-1",
      vendingMachineLogoUrl: "VM1.jpg_1658819043084.jpg",
      vendingMachineArtworkUrl: "art-work-1",
      VedingmachineStatusId: 1,
      vendingMachineModeId: 1,
      chargePlanId: 11,
      hostId: 608,
      features: ["Cooling", "Water Proof", "CCTV"],
      vmStatus: "Online",
      slotDepth: null,
      defaultSlotTypId: 2,
      longitude: 73.0892,
      latitude: 33.7368,
    },
    {
      userProfileId: 353,
      userId: 645,
      subscriptionDate: "2022-10-28T12:00:14.498Z",
      businessName: "Tabsera",
      bussinessDescription: "Test",
      businessEmail: "tabsera.dev@yopmail.com",
      businessPhone: "+928007897987",
      businessAddress: "Islamabad",
      postalCode: "44000",
      operatorId: 645,
      vendingMachineId: 191,
      vendingMachineName: "October 28 Standard VM 2",
      vendingMachineLogoUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666954801591.jpg",
      vendingMachineArtworkUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666954800965.jpg",
      VedingmachineStatusId: 1,
      vendingMachineModeId: 1,
      chargePlanId: null,
      hostId: 646,
      features: ["Water Proof", "CCTV"],
      vmStatus: "Online",
      slotDepth: "12",
      defaultSlotTypId: 2,
      longitude: 73.0882954,
      latitude: 33.7327933,
    },
    {
      userProfileId: 353,
      userId: 645,
      subscriptionDate: "2022-10-28T12:00:14.498Z",
      businessName: "Tabsera",
      bussinessDescription: "Test",
      businessEmail: "tabsera.dev@yopmail.com",
      businessPhone: "+928007897987",
      businessAddress: "Islamabad",
      postalCode: "44000",
      operatorId: 645,
      vendingMachineId: 192,
      vendingMachineName: "October 28 VM 3",
      vendingMachineLogoUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666958010689.jpg",
      vendingMachineArtworkUrl:
        "Merchant-MEDIA-6-Combi-Hi-Res.jpg_1666958009708.jpg",
      VedingmachineStatusId: 1,
      vendingMachineModeId: 1,
      chargePlanId: null,
      hostId: 646,
      features: ["Cooling", "Water Proof"],
      vmStatus: "Online",
      slotDepth: "12",
      defaultSlotTypId: 2,
      longitude: 73.0882954,
      latitude: 33.7327933,
    },
  ];
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <h1 className="text-[#422927]">Vending Machines</h1>
        <VendingMachine data={response} />
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

