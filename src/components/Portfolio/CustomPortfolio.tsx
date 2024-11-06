import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Download, TrendingUp } from 'lucide-react';

interface CustomPortfolioProps {
  riskScore: number;
}

const getPortfolioAllocation = (score: number) => {
  if (score <= 25) {
    return [
      { name: 'Debt', value: 70 },
      { name: 'Indian Equity', value: 20 },
      { name: 'Gold', value: 10 }
    ];
  }
  if (score <= 50) {
    return [
      { name: 'Debt', value: 50 },
      { name: 'Indian Equity', value: 40 },
      { name: 'Gold', value: 10 }
    ];
  }
  if (score <= 75) {
    return [
      { name: 'Indian Equity', value: 60 },
      { name: 'Debt', value: 30 },
      { name: 'Gold', value: 10 }
    ];
  }
  return [
    { name: 'Indian Equity', value: 80 },
    { name: 'Debt', value: 15 },
    { name: 'Gold', value: 5 }
  ];
};

const COLORS = ['#60A5FA', '#34D399', '#FBBF24'];

export default function CustomPortfolio({ riskScore }: CustomPortfolioProps) {
  const allocation = getPortfolioAllocation(riskScore);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Custom Portfolio</h1>
          <p className="text-gray-600">Tailored allocation based on your risk profile</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {allocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            {allocation.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: COLORS[index] }}
                  ></div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended Funds</h2>
        <div className="space-y-4">
          {allocation.map((category) => (
            <div key={category.name} className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-4">{category.name} Funds</h3>
              <div className="space-y-4">
                {[1, 2].map((fund) => (
                  <div key={fund} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Fund {fund}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                        <span>12.5% (3Y returns)</span>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                      Invest
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50">
        <Download className="mr-2 h-5 w-5" />
        Download Portfolio Report
      </button>
    </div>
  );
}