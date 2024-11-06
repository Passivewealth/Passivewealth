import React from 'react';

const stats = [
  { label: 'Assets Under Management', value: '₹1000+ Cr' },
  { label: 'Happy Investors', value: '50,000+' },
  { label: 'Annual Returns', value: '15%+' },
  { label: 'Expert Advisors', value: '20+' },
];

export default function Stats() {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}