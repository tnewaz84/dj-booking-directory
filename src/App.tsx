import React, { useState } from 'react';
import { DJ } from './types/dj';
import djData from './data/djs.json';
import DJList from './components/DJList';
import Filters from './components/Filters';

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDJs = djData.djs.filter((dj: DJ) => {
    const matchesRegion = selectedRegion === 'all' || dj.location.region === selectedRegion;
    const matchesPriceRange = selectedPriceRange === 'all' || dj.priceRange === selectedPriceRange;
    const matchesSearch = dj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dj.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dj.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesRegion && matchesPriceRange && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">DJ Directory</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Filters
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <DJList djs={filteredDJs} />
        </div>
      </main>
    </div>
  );
}