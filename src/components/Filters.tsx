import React from 'react';

interface FiltersProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  selectedPriceRange: string;
  setSelectedPriceRange: (price: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Filters({
  selectedRegion,
  setSelectedRegion,
  selectedPriceRange,
  setSelectedPriceRange,
  searchQuery,
  setSearchQuery,
}: FiltersProps) {
  const regions = [
    'all',
    'Mountain',
    'West',
    'Northeast',
    'Southeast',
    'Midwest',
    'South',
    'Northwest',
    'Southwest',
    'Pacific',
  ];

  const priceRanges = ['all', '$', '$$', '$$$', '$$$$'];

  return (
    <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">
            Region
          </label>
          <select
            id="region"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <select
            id="price"
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {priceRanges.map((price) => (
              <option key={price} value={price}>
                {price === 'all' ? 'All Prices' : price}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700">
            Search
          </label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search DJs..."
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}