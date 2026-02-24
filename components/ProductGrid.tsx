import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import CategoryBar from './CategoryBar';
import ProductModal from './ProductModal';
import { Product } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGridProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ITEMS_PER_PAGE = 8;

const ProductGrid: React.FC<ProductGridProps> = ({ selectedCategory, onSelectCategory }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid smoothly
    document.getElementById('shop-the-look')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <section id="shop-the-look" className="bg-white pt-12 pb-24 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Category Filter */}
        <CategoryBar selectedCategory={selectedCategory} onSelectCategory={onSelectCategory} />

        {/* Product Grid */}
        {currentProducts.length > 0 ? (
          <div>
              <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-vantage-black font-serif">
                    {selectedCategory === "All" ? "All Products" : `${selectedCategory} Collection`}
                  </h2>
                  <span className="text-sm text-gray-500">
                    Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} results
                  </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {currentProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={() => setSelectedProduct(product)}
                      />
                  ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <button 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-colors ${
                        currentPage === page 
                          ? 'bg-vantage-black text-white' 
                          : 'border border-gray-300 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
          </div>
        ) : (
            <div className="text-center py-20 text-gray-500">
                No products found in this category.
            </div>
        )}

        {/* Product Modal */}
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}

      </div>
    </section>
  );
};

export default ProductGrid;