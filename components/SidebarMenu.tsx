import React from 'react';
import { X, ChevronRight, User } from 'lucide-react';
import { SIDEBAR_CATEGORIES } from '../constants';

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isOpen, onClose, onSelectCategory }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[365px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
        
        {/* Header */}
        <div className="bg-[#232f3e] text-white p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">Menu</span>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="pb-8">
          {SIDEBAR_CATEGORIES.map((section, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <h3 className="px-6 text-lg font-bold text-[#111] mb-2">{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <button 
                      onClick={() => {
                        if (onSelectCategory) onSelectCategory(item);
                        onClose();
                      }}
                      className="w-full px-6 py-3 flex items-center justify-between text-sm text-[#111] hover:bg-gray-100 transition-colors group"
                    >
                      <span>{item}</span>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-[#111]" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
