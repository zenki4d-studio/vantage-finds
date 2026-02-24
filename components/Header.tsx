import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Globe } from 'lucide-react';

interface HeaderProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ selectedCategory, onSelectCategory, onOpenSidebar }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (category: string) => {
    onSelectCategory(category);
    // Scroll to product grid if needed
    const productSection = document.getElementById('shop-the-look');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        isScrolled ? 'py-3 shadow-sm' : 'py-5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
          {/* Sidebar Trigger (Mobile & Desktop) */}
          <button 
            className="flex items-center gap-2 text-vantage-darkGray hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            onClick={onOpenSidebar}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('All')}>
            <h1 className="text-2xl font-extrabold tracking-tight text-[#4A4E69] uppercase">
              VANTAGE FINDS
            </h1>
          </div>
        </div>

        {/* Desktop Nav - Removed as per request */}
        <div className="hidden lg:flex flex-1"></div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Language Selector - Static */}
            <div className="flex items-center text-xs font-medium text-gray-600 cursor-pointer hover:text-black">
                EN
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;