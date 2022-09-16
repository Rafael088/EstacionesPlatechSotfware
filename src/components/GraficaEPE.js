import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function GraficaEPE() {
    const scores = [60, 70, 80];
    const scores2 = [40, 80, 90];
    const scores3 = [70, 60, 70];
    const labels = ['Junio', 'Julio', 'Agosto'];
    const options = {
        fill: true,
        scales: {
          y: {
            min: 0,
            max: 100,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      };
    const data = useMemo(function () {
        return {
          datasets: [
            {
                label: 'Dataset 1',
                data: scores,
                backgroundColor: 'rgba(149, 117, 205, 0.7)',
              },
              {
                label: 'Dataset 2',
                data: scores2,
                backgroundColor: 'rgba(83, 158, 232, 0.7)',
              },
              {
                label: 'Dataset 3',
                data: scores3,
                backgroundColor: 'rgba(2, 115, 30, 0.7)',
              },
          ],
          labels,
        };
      }, []);
    return ( 
        <div className="contGraficaEPE">
            <Bar data={data} options={options}/>
        </div>
     );
}

export default GraficaEPE;