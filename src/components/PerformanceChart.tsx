import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2004', strategy: 150, benchmark: 150 },
  { year: '2006', strategy: 220, benchmark: 180 },
  { year: '2008', strategy: 180, benchmark: 140 },
  { year: '2010', strategy: 240, benchmark: 180 },
  { year: '2012', strategy: 280, benchmark: 220 },
  { year: '2014', strategy: 350, benchmark: 250 },
  { year: '2016', strategy: 450, benchmark: 280 },
  { year: '2018', strategy: 480, benchmark: 320 },
  { year: '2020', strategy: 550, benchmark: 350 },
];

export default function PerformanceChart() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
      <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-4 h-0.5 bg-blue-400 mr-2"></div>
              <span className="text-white">Multi-Factor Strategy</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-0.5 bg-pink-400 mr-2"></div>
              <span className="text-white">STOXX Global 1800</span>
            </div>
          </div>
          <div className="text-gray-400 text-sm">Source: STOXX</div>
        </div>
        
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="year" 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#374151' }}
              />
              <YAxis 
                stroke="#6B7280"
                tick={{ fill: '#6B7280' }}
                axisLine={{ stroke: '#374151' }}
                tickFormatter={(value) => value.toString()}
              />
              <Line 
                type="monotone" 
                dataKey="strategy" 
                stroke="#60A5FA" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="benchmark" 
                stroke="#F472B6" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}