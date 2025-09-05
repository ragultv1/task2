import React, { useState } from 'react';
import Header from '../components/Header';
import FilterTabs from '../components/FilterTabs';
import ExtensionsGrid from '../components/ExtensionsGrid';

import extensionsData from '../../data.json';

type FilterType = 'all' | 'active' | 'inactive';
type Extension = {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionsPage: React.FC = () => {
  const initialExtensions: Extension[] = extensionsData.map((ext, index) => ({
    ...ext,
    id: (index + 1).toString()
  }));
  
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const handleRemove = (id: string) => {
    setExtensions(extensions.filter((ext: Extension) => ext.id !== id));
  };

  const handleToggle = (id: string) => {
    setExtensions(extensions.map((ext: Extension) =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    ));
  };

  const filteredExtensions = extensions.filter((ext: Extension) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'active') return ext.isActive;
    return !ext.isActive;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100  to-white transition-colors duration-200 p-4 space-y-6">
      
      <div className="max-w-7xl mx-auto px-4 py-6 ">
        <div className="mb-6">
            <Header />
        </div>
        <FilterTabs
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <ExtensionsGrid
          extensions={filteredExtensions}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default ExtensionsPage;
