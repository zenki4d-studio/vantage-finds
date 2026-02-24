import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowRight } from 'lucide-react';

interface CategoryBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full mb-12">
      <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`flex-shrink-0 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide transition-all ${
              selectedCategory === cat
                ? 'bg-[#6B705C] text-white shadow-md'
                : 'bg-[#F0F0F0] text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
        <button className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E5E5E5] flex items-center justify-center text-gray-500 hover:bg-gray-300 transition-colors">
            <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;