import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function Grafik() {
  return (
    <BarChart
      xAxis={[{ 
        scaleType: 'band', 
        data: ['Türkçe', 'Sosyal', 'Matematik', 'Fen Bilgisi'],
        tickLabelStyle: { fill: 'white' },
        axisLine: { stroke: 'white' },
        gridLines: { stroke: 'white' }
      }]}
      yAxis={[{
        axisLine: { stroke: 'white' },
        tickLabelStyle: { fill: 'white' },
        gridLines: { stroke: 'white' }
      }]}
      series={[{ data: [22, 10, 18, 9] }, { data: [24, 11, 17, 13] }, { data: [24, 12, 23.5, 14] }, { data: [26, 14, 27, 16] }]}
      width={700}
      height={300}
      sx={{
        '.MuiChartsAxis-line': { stroke: 'white' },
        '.MuiChartsAxis-tick': { stroke: 'white' },
        '.MuiChartsAxis-tickLabel': { fill: 'white' },
        '.MuiChartsAxis-grid': { stroke: 'white', strokeWidth: 0.5 }
      }}
    />
  );    
}

export default Grafik