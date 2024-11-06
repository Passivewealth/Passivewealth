import { Fund, Filter } from './types';

export const initialFunds: Fund[] = [
  {
    id: '1',
    name: 'ICICI Prudential Bluechip Fund',
    category: 'Large Cap',
    returns: 15.8,
    rating: 4.5,
    aum: 35000,
    risk: 'Moderate'
  },
  {
    id: '2',
    name: 'Axis Small Cap Fund',
    category: 'Small Cap',
    returns: 22.4,
    rating: 4.8,
    aum: 12000,
    risk: 'High'
  },
  {
    id: '3',
    name: 'SBI Balanced Advantage Fund',
    category: 'Hybrid',
    returns: 12.6,
    rating: 4.2,
    aum: 18000,
    risk: 'Low'
  },
  {
    id: '4',
    name: 'Mirae Asset Emerging Bluechip',
    category: 'Large & Mid Cap',
    returns: 18.9,
    rating: 4.7,
    aum: 25000,
    risk: 'Moderate'
  },
  {
    id: '5',
    name: 'Parag Parikh Flexi Cap Fund',
    category: 'Flexi Cap',
    returns: 19.2,
    rating: 4.6,
    aum: 28000,
    risk: 'Moderate'
  },
  {
    id: '6',
    name: 'Kotak Small Cap Fund',
    category: 'Small Cap',
    returns: 21.5,
    rating: 4.4,
    aum: 15000,
    risk: 'High'
  }
];

export const initialFilters: Filter[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { id: 'large-cap', label: 'Large Cap', selected: false },
      { id: 'mid-cap', label: 'Mid Cap', selected: false },
      { id: 'small-cap', label: 'Small Cap', selected: false },
      { id: 'flexi-cap', label: 'Flexi Cap', selected: false },
      { id: 'hybrid', label: 'Hybrid', selected: false }
    ]
  },
  {
    id: 'risk',
    name: 'Risk Level',
    options: [
      { id: 'low', label: 'Low Risk', selected: false },
      { id: 'moderate', label: 'Moderate Risk', selected: false },
      { id: 'high', label: 'High Risk', selected: false }
    ]
  },
  {
    id: 'rating',
    name: 'Rating',
    options: [
      { id: '5-star', label: '5 Star', selected: false },
      { id: '4-star', label: '4 Star', selected: false },
      { id: '3-star', label: '3 Star', selected: false }
    ]
  }
];