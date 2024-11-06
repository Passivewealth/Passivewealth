import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, BarChart2, PieChart, Clock, Shield, ArrowUpRight } from 'lucide-react';
import { Fund } from './types';
import { initialFunds } from './data';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface FundDetailsProps {
  fundId: string | null;
  onBack: () => void;
}

const timelineData = {
  '1W': Array.from({ length: 7 }, (_, i) => ({
    date: new Date(Date.now() - (6 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 5
  })),
  '1M': Array.from({ length: 30 }, (_, i) => ({
    date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 10
  })),
  '3M': Array.from({ length: 90 }, (_, i) => ({
    date: new Date(Date.now() - (89 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 15
  })),
  '6M': Array.from({ length: 180 }, (_, i) => ({
    date: new Date(Date.now() - (179 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 20
  })),
  '1Y': Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 25
  })),
  '3Y': Array.from({ length: 1095 }, (_, i) => ({
    date: new Date(Date.now() - (1094 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 40
  })),
  '5Y': Array.from({ length: 1825 }, (_, i) => ({
    date: new Date(Date.now() - (1824 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 60
  })),
  'All': Array.from({ length: 3650 }, (_, i) => ({
    date: new Date(Date.now() - (3649 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    value: 100 + Math.random() * 80
  }))
};

type TimelineOption = '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | 'All';

export default function FundDetails({ fundId, onBack }: FundDetailsProps) {
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineOption>('1Y');
  const fund = initialFunds.find(f => f.id === fundId);
  
  if (!fund) return null;

  const currentData = timelineData[selectedTimeline];
  const latestValue = currentData[currentData.length - 1].value;
  const startValue = currentData[0].value;
  const returns = ((latestValue - startValue) / startValue * 100).toFixed(2);
  const isPositive = parseFloat(returns) >= 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Funds
      </button>

      {/* Fund Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{fund.name}</h1>
            <p className="text-gray-600">{fund.category}</p>
          </div>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            Invest Now
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-green-600 mb-2">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="font-semibold">{fund.returns}%</span>
            </div>
            <p className="text-sm text-gray-600">3Y Returns</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-blue-600 mb-2">
              <PieChart className="h-5 w-5 mr-2" />
              <span className="font-semibold">₹{(fund.aum/1000).toFixed(1)}K Cr</span>
            </div>
            <p className="text-sm text-gray-600">Fund Size</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-purple-600 mb-2">
              <Shield className="h-5 w-5 mr-2" />
              <span className="font-semibold">{fund.risk}</span>
            </div>
            <p className="text-sm text-gray-600">Risk Level</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center text-orange-600 mb-2">
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-semibold">5+ Years</span>
            </div>
            <p className="text-sm text-gray-600">Min. Investment Period</p>
          </div>
        </div>
      </div>

      {/* Fund Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Analysis */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Performance Analysis</h2>
                  <div className="mt-2">
                    <div className="text-2xl font-bold">₹{latestValue.toFixed(2)}</div>
                    <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {isPositive ? '+' : ''}{returns}% {selectedTimeline}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {(['1W', '1M', '3M', '6M', '1Y', '3Y', '5Y', 'All'] as TimelineOption[]).map((timeline) => (
                    <button
                      key={timeline}
                      onClick={() => setSelectedTimeline(timeline)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTimeline === timeline
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {timeline}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentData}>
                    <XAxis 
                      dataKey="date"
                      tickFormatter={(value) => {
                        const date = new Date(value);
                        return date.toLocaleDateString('en-US', { 
                          month: 'short',
                          day: 'numeric'
                        });
                      }}
                      stroke="#9CA3AF"
                    />
                    <YAxis 
                      domain={['dataMin - 1', 'dataMax + 1']}
                      stroke="#9CA3AF"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        padding: '8px'
                      }}
                      formatter={(value: number) => [`₹${value.toFixed(2)}`, 'NAV']}
                      labelFormatter={(label) => {
                        const date = new Date(label);
                        return date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        });
                      }}
                    />
                    <Line 
                      type="monotone"
                      dataKey="value"
                      stroke="#2563EB"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Holdings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-6">Top Holdings</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="font-medium">Company {i}</h3>
                    <p className="text-sm text-gray-500">Sector {i}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{(Math.random() * 10).toFixed(2)}%</p>
                    <p className="text-sm text-gray-500">Weight</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fund Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-6">Fund Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Fund Manager</p>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Expense Ratio</p>
                <p className="font-medium">0.45%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Min Investment</p>
                <p className="font-medium">₹5,000</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">NAV</p>
                <p className="font-medium">₹45.67</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-6">Risk Metrics</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Alpha</p>
                <p className="font-medium">2.45</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Beta</p>
                <p className="font-medium">0.95</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Sharpe Ratio</p>
                <p className="font-medium">1.23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}