import React from 'react';
import { Product } from '../types';
import { Heart, ShoppingBag, Star, ImageOff } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const [imgError, setImgError] = React.useState(false);

  return (
    <div 
      className="group flex flex-col bg-white rounded-2xl p-4 transition-all hover:shadow-xl border border-transparent hover:border-gray-100 h-full cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-xl mb-4">
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-300">
            <ImageOff size={32} />
            <span className="text-[10px] mt-2">No Image</span>
          </div>
        )}
        
        {/* Top Right Action Icons - Reveal on Hover */}
        {/* Removed as per request for "Visual Catalog" simplicity */}
        
        {/* New Badge */}
        {product.isNew && (
             <div className="absolute top-3 left-3 bg-vantage-black text-white text-[10px] font-bold px-2 py-1 rounded">
                NEW
             </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-base font-bold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-[10px] text-gray-400 mb-3 line-clamp-2 leading-tight">{product.description}</p>
        
        {/* Price Row */}
        <div className="flex items-baseline gap-2 mb-3">
            <span className="text-sm font-bold text-[#E53935]">{product.price}</span>
            {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
            )}
        </div>

        {/* Shop Button */}
        <a 
          href="https://www.amazon.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-xs font-bold py-2 rounded-md flex items-center justify-center gap-2 transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Shop on Amazon
        </a>
      </div>
    </div>
  );
};

export default ProductCard;