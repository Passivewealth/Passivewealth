import React from 'react';
import { Shield, TrendingUp, Users, BarChart2 } from 'lucide-react';

const features = [
  {
    name: 'Expert Management',
    description: 'Portfolios curated and managed by seasoned investment professionals',
    icon: Users,
  },
  {
    name: 'Research-Backed',
    description: 'Data-driven investment strategies based on extensive market research',
    icon: BarChart2,
  },
  {
    name: 'Wealth Protection',
    description: 'Risk management strategies to protect and grow your investments',
    icon: Shield,
  },
  {
    name: 'Superior Returns',
    description: 'Track record of delivering above-market returns consistently',
    icon: TrendingUp,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Mutual Funds
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Experience the difference of professional portfolio management
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative p-6 bg-white rounded-lg border border-gray-100 group-hover:border-transparent transition duration-300">
                <feature.icon className="h-8 w-8 text-blue-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}