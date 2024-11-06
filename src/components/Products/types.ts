export interface Fund {
  id: string;
  name: string;
  category: string;
  returns: number;
  rating: number;
  aum: number;
  risk: 'Low' | 'Moderate' | 'High';
}

export interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}

export interface Filter {
  id: string;
  name: string;
  options: FilterOption[];
}