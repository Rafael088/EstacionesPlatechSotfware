
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
    const data = {
          datasets: [
            {
                label: 'Efectividad',
                data: scores,
                backgroundColor: 'rgba(65, 242, 142, 0.6)',
              },
              {
                label: 'Presicion',
                data: scores2,
                backgroundColor: 'rgba(4, 15, 217, 0.6)',
              },
              {
                label: 'Exactitud',
                data: scores3,
                backgroundColor: 'rgba(1, 3, 38, 0.6)',
              },
          ],
          labels,
        };
    return ( 
        <div className="contGraficaEPE">
          <p>%</p>
            <Bar data={data} options={options}/>
        </div>
     );
}

export default GraficaEPE;