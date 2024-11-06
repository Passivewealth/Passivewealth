import React from 'react';
import { Filter } from './types';
import { ChevronDown } from 'lucide-react';

interface FiltersProps {
  filters: Filter[];
  onFilterChange: (filterId: string, optionId: string) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      {filters.map((filterGroup) => (
        <div key={filterGroup.id} className="mb-6 last:mb-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-700">{filterGroup.name}</h3>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          
          <div className="space-y-2">
            {filterGroup.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-3 text-sm cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={option.selected}
                  onChange={() => onFilterChange(filterGroup.id, option.id)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className={`group-hover:text-gray-900 ${
                  option.selected ? 'text-gray-900' : 'text-gray-600'
                }`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {filters.some(filter => filter.options.some(option => option.selected)) && (
        <button
          onClick={() => filters.forEach(filter => 
            filter.options.forEach(option => 
              option.selected && onFilterChange(filter.id, option.id)
            )
          )}
          className="mt-4 w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}