import React, { useState } from 'react';
import { X, Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const images = product.images || [product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Image Gallery Section */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col gap-4">
          {/* Main Image */}
          <div className="aspect-square w-full bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, index) => (
              <button 
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-vantage-orange' : 'border-transparent hover:border-gray-300'}`}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <div className="mb-1">
             <span className="text-xs font-bold text-vantage-orange uppercase tracking-wider">{product.category}</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center text-yellow-400">
              <Star size={18} fill="currentColor" />
              <span className="ml-1 text-sm font-bold text-gray-700">{product.rating}</span>
            </div>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">{product.soldCount} Sold</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-[#E53935]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
            )}
          </div>

          <div className="prose prose-sm text-gray-600 mb-8">
            <p>{product.description}</p>
            <p className="mt-4">
              Experience the perfect blend of style and functionality with the {product.name}. 
              Designed to elevate your living space, this item features high-quality materials 
              and a timeless aesthetic that complements any decor.
            </p>
          </div>

          <div className="mt-auto">
            <a 
              href={product.amazonLink || "https://www.amazon.com"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white text-lg font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98] shadow-lg shadow-orange-200"
            >
              Shop on Amazon
              <ShoppingBag size={20} />
            </a>
            <p className="text-center text-[10px] text-gray-400 mt-3">
              Secure transaction via Amazon.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
