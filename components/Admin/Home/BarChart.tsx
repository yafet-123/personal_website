'use client'
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

export default function BarChart ({work ,news ,exhibition ,user}) {
  const chartRef = useRef(null);
  console.log(work)
  useEffect(() => {
    // Register linear scale
    Chart.register(...registerables);

    // Create the chart
    const ctx = chartRef.current.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Work', 'User', 'Exhibition' , 'News'], // Replace with your own labels
        datasets: [
          {
            label: 'Data',
            data: [work, user, exhibition,news], // Replace with your own data
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Replace with desired background color
            borderColor: 'rgba(75, 192, 192, 1)', // Replace with desired border color
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup on unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};