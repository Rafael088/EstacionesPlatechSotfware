import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function TiempoRest() {
    const options = {
        responsive: true,
        scales: {
            y: {
              min: 0,
              max: 10,
            },
          },
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
        },
      };
    const labels = ['Vientos', 'Tormenta', 'Lluvia', 'Tormenta Electrica', 'Viento y Lluiva'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Agosto',
            data: [4, 2, 1, 5, 0.5],
            borderColor: 'rgba(149, 117, 205, 0.7)',
            backgroundColor: 'rgba(149, 117, 205, 0.7)',
          },
          {
            label: 'Julio',
            data: [2, 6, 4, 3.5, 1.5],
            borderColor: 'rgba(2, 115, 30, 0.7)',
            backgroundColor: 'rgba(2, 115, 30, 0.7)',
          },
        ],
      };
    return ( 
      <div className='tempRest'>
        <p>Horas</p>
        <Line options={options} data={data} />
      </div>
            
        
     );
}

export default TiempoRest;