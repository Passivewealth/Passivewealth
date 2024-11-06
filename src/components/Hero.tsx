import React from 'react';
import { ArrowRight } from 'lucide-react';
import PerformanceChart from './PerformanceChart';

export default function Hero() {
  return (
    <>
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 tracking-tight">
              <span className="block">Expert-Managed</span>
              <span className="block text-blue-600">Mutual Fund Portfolios</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Access institutional-grade investment strategies designed by experts. Start your wealth creation journey with research-backed portfolios.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700">
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-b from-blue-50 to-white h-32"></div>
      </div>
      <PerformanceChart />
    </>
  );
}