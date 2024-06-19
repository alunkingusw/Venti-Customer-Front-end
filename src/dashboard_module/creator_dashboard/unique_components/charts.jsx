/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export function Charts() {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'April', 'May', 'June', 'Jully', 'August'],
                datasets: [{
                    label: '# of Views',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}
