import React from 'react';
import { HERO_IMAGES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-24 pb-8 md:pt-32 md:pb-12 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        
        {/* Main Large Banner */}
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden group bg-[#F5F5F0]">
          <img
            src={HERO_IMAGES.main}
            alt="Main Hero - Minimalist Living Room"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
          
          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 max-w-sm">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-md">
              Elevate your lifestyle with VANTAGE
            </h2>
            <p className="text-white/90 mb-6 text-lg font-light drop-shadow-sm">
              From furniture to electronics, find everything for your home.
            </p>
            <button className="bg-[#4A4E69] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#333] transition-colors shadow-lg">
              SHOP ALL
            </button>
          </div>
        </div>

        {/* Right Side Stacked Banners */}
        <div className="md:col-span-1 flex flex-col gap-6">
          
          {/* Top Right Card */}
          <div className="flex-1 relative rounded-3xl overflow-hidden bg-[#EBEBEB] group">
            <img
               src={HERO_IMAGES.sideTop}
               alt="Aesthetic Chair"
               className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
               <span className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2">Special Offer</span>
               <h3 className="text-2xl font-bold text-white mb-4 leading-tight drop-shadow-md">New lower price for selected Product</h3>
               <button className="bg-[#4A4E69] text-white px-6 py-2 rounded-md text-xs font-bold hover:bg-[#333] transition-colors">
                  SHOP NOW
               </button>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="flex-1 relative rounded-3xl overflow-hidden bg-[#E3D5CA] group">
             <img
               src={HERO_IMAGES.sideBottom}
               alt="Warm Interior Detail"
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute inset-0 p-8 flex flex-col justify-center items-start text-white">
               <h3 className="text-2xl font-bold mb-4 drop-shadow-md">Buy 2 Get 1 for Free</h3>
               <button className="bg-[#4A4E69] text-white px-6 py-2 rounded-md text-xs font-bold hover:bg-[#333] transition-colors">
                  SHOP NOW
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;