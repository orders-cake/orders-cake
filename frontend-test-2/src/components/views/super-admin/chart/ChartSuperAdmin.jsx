import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

const ChartSuperAdmin = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='chart-order'>
            <BarChart
                sx={{ width: "80%" }}
                height={300}
                series={[
                    { data: pData, label: 'pv', id: 'pvId' },
                    { data: uData, label: 'uv', id: 'uvId' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'band' }]}
            />
        </div>
    );
}

export default ChartSuperAdmin;
