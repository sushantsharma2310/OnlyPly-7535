import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

const AnalyticsCard = ({ title, data, type = 'line', timeRange = '7d' }) => {
  const getOption = () => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      return format(new Date(Date.now() - i * 24 * 60 * 60 * 1000), 'MMM dd');
    }).reverse();

    const baseOption = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: { color: '#fff' }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: dates,
        axisLabel: {
          color: '#666'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#666'
        }
      }
    };

    if (type === 'line') {
      return {
        ...baseOption,
        series: [{
          data: data,
          type: 'line',
          smooth: true,
          symbolSize: 8,
          itemStyle: {
            color: '#0284c7'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(2, 132, 199, 0.3)'
              }, {
                offset: 1,
                color: 'rgba(2, 132, 199, 0.05)'
              }]
            }
          }
        }]
      };
    }

    return baseOption;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-dark-100 rounded-lg shadow-sm p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <select
          className="bg-gray-100 dark:bg-dark-200 rounded-lg px-3 py-1 text-sm"
          defaultValue={timeRange}
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>
      <ReactECharts option={getOption()} style={{ height: '300px' }} />
    </motion.div>
  );
};

export default AnalyticsCard;