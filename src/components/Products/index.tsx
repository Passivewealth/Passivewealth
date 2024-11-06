import React, { useState, useMemo } from 'react';
import Filters from './Filters';
import FundList from './FundList';
import { Fund, Filter } from './types';
import { initialFunds, initialFilters } from './data';

interface ProductsProps {
  onFundSelect: (fundId: string) => void;
}

export default function Products({ onFundSelect }: ProductsProps) {
  const [funds] = useState<Fund[]>(initialFunds);
  const [filters, setFilters] = useState<Filter[]>(initialFilters);
  const [sortBy, setSortBy] = useState<string>('returns');

  const handleFilterChange = (filterId: string, optionId: string) => {
    setFilters(currentFilters =>
      currentFilters.map(filter => {
        if (filter.id === filterId) {
          return {
            ...filter,
            options: filter.options.map(option => ({
              ...option,
              selected: option.id === optionId ? !option.selected : option.selected
            }))
          };
        }
        return filter;
      })
    );
  };

  const filteredFunds = useMemo(() => {
    return funds.filter(fund => {
      // Check if any filters are selected
      const hasActiveFilters = filters.some(filter => 
        filter.options.some(option => option.selected)
      );

      // If no filters are selected, show all funds
      if (!hasActiveFilters) return true;

      // Check each filter category
      return filters.every(filter => {
        const selectedOptions = filter.options.filter(option => option.selected);
        
        // If no options are selected in this category, it passes
        if (selectedOptions.length === 0) return true;

        switch (filter.id) {
          case 'category':
            return selectedOptions.some(option => 
              fund.category.toLowerCase().includes(option.label.toLowerCase())
            );
          case 'risk':
            return selectedOptions.some(option => 
              fund.risk === option.label.split(' ')[0]
            );
          case 'rating':
            return selectedOptions.some(option => {
              const ratingValue = parseInt(option.label.split(' ')[0]);
              return fund.rating >= ratingValue;
            });
          default:
            return true;
        }
      });
    });
  }, [funds, filters]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const sortedFunds = useMemo(() => {
    return [...filteredFunds].sort((a, b) => {
      if (sortBy === 'returns') return b.returns - a.returns;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [filteredFunds, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <Filters filters={filters} onFilterChange={handleFilterChange} />
        </aside>
        <main className="flex-1">
          <FundList 
            funds={sortedFunds} 
            sortBy={sortBy} 
            onSortChange={handleSortChange}
            onFundSelect={onFundSelect}
          />
        </main>
      </div>
    </div>
  );
}