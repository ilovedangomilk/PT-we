import React from 'react';
import TopBar from './TopBar';
import { Line } from '@ant-design/charts';
import './Analytics.css';

const Analytics: React.FC = () => {
  // Sample data for the charts
  const data1 = [
    { date: '01-09-24', value: 10 },
    { date: '02-09-24', value: 15 },
    { date: '03-09-24', value: 12 },
    { date: '04-09-24', value: 18 },
    { date: '05-09-24', value: 20 },
    // ... more data points
  ];

  const data2 = [
    { date: '01-09-24', value: 7 },
    { date: '02-09-24', value: 2 },
    { date: '03-09-24', value: 45 },
    { date: '04-09-24', value: 12 },
    { date: '05-09-24', value: 54 },
    // ... more data points
  ];

  const data3 = [
    { date: '01-09-24', value: 123 },
    { date: '02-09-24', value: 346 },
    { date: '03-09-24', value: 43 },
    { date: '04-09-24', value: 1 },
    { date: '05-09-24', value: 0 },
    // ... more data points
  ];

  const data4 = [
    { date: '01-09-24', value: 321 },
    { date: '02-09-24', value: 2564 },
    { date: '03-09-24', value: 451 },
    { date: '04-09-24', value: 2 },
    { date: '05-09-24', value: 51 },
    // ... more data points
  ];

  // Configuration for the line charts
  const chartConfig = (data: any[], title: string) => ({
    data,
    xField: 'date',
    yField: 'value',
    smooth: true,
    height: 125, // Adjust height as needed
    autoFit: true,
    padding: 'auto',
    tooltip: {
      showMarkers: true,
    },
    interactions: [{ type: 'marker-active' }],
    meta: {
      date: { alias: 'Date' },
      value: { alias: title },
    },
  });

  return (
    <div className="analytics-page">
      <TopBar title="Analytics" />
      <div className="analytics-content">
        <div className="chart-container">
          <h3>Chart 1: Metric One</h3>
          <Line {...chartConfig(data1, 'Metric One')} />
        </div>
        <div className="chart-container">
          <h3>Chart 2: Metric Two</h3>
          <Line {...chartConfig(data2, 'Metric Two')} />
        </div>
        <div className="chart-container">
          <h3>Chart 3: Metric Three</h3>
          <Line {...chartConfig(data3, 'Metric Three')} />
        </div>
        <div className="chart-container">
          <h3>Chart 4: Metric Four</h3>
          <Line {...chartConfig(data4, 'Metric Four')} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
