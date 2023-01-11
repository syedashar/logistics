
import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const Home = () => {
    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    const data = {
        datasets: [
            {
                label: "our vending machine service",
                data: Array.from({ length: 100 }, (element, index) => ({
                    x: index + Math.floor(Math.random() * 10),
                    y: index + Math.floor(Math.random() * 10),
                })),
                backgroundColor: "rgba(255, 99, 132, 1)",
            },
        ],
    };
    return (
      <>

        <Scatter options={options} data={data} />
      </>
    );
}
    export default Home;

