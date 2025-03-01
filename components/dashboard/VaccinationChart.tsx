'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VaccinationChartProps {
  timeRange: string;
}

export default function VaccinationChart({ timeRange }: VaccinationChartProps) {
  // Sample data - in a real app, this would come from an API
  const getLabels = () => {
    if (timeRange === 'week') {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    } else if (timeRange === 'month') {
      return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    } else {
      return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
  };

  // Sample data for different metrics
  const getPolioData = () => {
    if (timeRange === 'week') {
      return [1200, 1350, 1100, 1420, 1550, 900, 850];
    } else if (timeRange === 'month') {
      return [4800, 5200, 4900, 5500];
    } else {
      return [12000, 13500, 14200, 13800, 15000, 16200, 15800, 16500, 17000, 16800, 17500, 18000];
    }
  };

  const getNutritionData = () => {
    if (timeRange === 'week') {
      return [800, 950, 750, 1020, 1150, 600, 550];
    } else if (timeRange === 'month') {
      return [3200, 3600, 3300, 3900];
    } else {
      return [8000, 8500, 9200, 9800, 10000, 11200, 10800, 11500, 12000, 11800, 12500, 13000];
    }
  };

  const getWashData = () => {
    if (timeRange === 'week') {
      return [500, 550, 450, 620, 750, 400, 350];
    } else if (timeRange === 'month') {
      return [1800, 2100, 1900, 2300];
    } else {
      return [5000, 5500, 6200, 5800, 6500, 7200, 6800, 7500, 8000, 7800, 8500, 9000];
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: 'Polio Vaccinations',
        data: getPolioData(),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
      },
      {
        label: 'Nutrition Assessments',
        data: getNutritionData(),
        borderColor: 'rgb(34, 197, 94)',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.3,
      },
      {
        label: 'WASH Services',
        data: getWashData(),
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.5)',
        tension: 0.3,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
