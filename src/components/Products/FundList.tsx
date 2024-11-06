import React from 'react';
import { Fund } from './types';
import { Star, TrendingUp, ArrowUpRight } from 'lucide-react';

interface FundListProps {
  funds: Fund[];
  sortBy: string;
  onSortChange: (value: string) => void;
  onFundSelect: (fundId: string) => void;
}

export default function FundList({ funds, sortBy, onSortChange, onFundSelect }: FundListProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Mutual Funds ({funds.length})
        </h1>
        
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="block w-40 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        >
          <option value="returns">Returns</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {funds.map((fund) => (
          <div
            key={fund.id}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow group cursor-pointer"
            onClick={() => onFundSelect(fund.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {fund.name}
                </h3>
                <p className="text-sm text-gray-500">{fund.category}</p>
              </div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium">{fund.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">
                    {fund.returns}% Returns
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">3 Year CAGR</p>
              </div>
              
              <button 
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-full text-blue-600 bg-blue-50 hover:bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onFundSelect(fund.id);
                }}
              >
                Invest
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}