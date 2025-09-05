import React from 'react';

interface FilterTabsProps {
  activeFilter: 'all' | 'active' | 'inactive';
  onFilterChange: (filter: 'all' | 'active' | 'inactive') => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="mb-6">
      {/* Mobile Layout */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <h2 className="text-[#1E293B] text-3xl font-bold">Extensions List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors   ${
              activeFilter === 'all'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('active')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeFilter === 'active'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => onFilterChange('inactive')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeFilter === 'inactive'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center">
        <h2 className="text-white dark:text-gray-900 text-2xl font-bold mb-4">Extensions List</h2>
        <div className="flex gap-2">
          <button
            onClick={() => onFilterChange('all')}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => onFilterChange('active')}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
              activeFilter === 'active'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => onFilterChange('inactive')}
            className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
              activeFilter === 'inactive'
                ? 'bg-[#E11D48] text-white'
                : 'bg-[#1E293B] dark:bg-gray-100 text-gray-400 dark:text-gray-600 hover:bg-[#334155] dark:hover:bg-gray-200'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
