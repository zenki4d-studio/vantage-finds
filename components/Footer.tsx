import React from 'react';
import { DISCLAIMER_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-vantage-gray pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight uppercase mb-6">VANTAGE FINDS</h3>
            <p className="text-vantage-lightText max-w-sm mb-6 leading-relaxed">
              Elevating everyday life through minimalist design and functional aesthetics. 
              We curate the best contemporary furniture to help you build your sanctuary.
            </p>
            <div className="flex space-x-4">
               {/* Social placeholders */}
               <div className="w-8 h-8 bg-gray-300 rounded-full hover:bg-black transition-colors"></div>
               <div className="w-8 h-8 bg-gray-300 rounded-full hover:bg-black transition-colors"></div>
               <div className="w-8 h-8 bg-gray-300 rounded-full hover:bg-black transition-colors"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-vantage-lightText">
              <li><a href="#" className="hover:text-black hover:underline">Customer Service</a></li>
              <li><a href="#" className="hover:text-black hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:text-black hover:underline">My Orders</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Return Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About</h4>
            <ul className="space-y-3 text-sm text-vantage-lightText">
              <li><a href="#" className="hover:text-black hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Sustainability</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-black hover:underline">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} VANTAGE FINDS. All rights reserved.</p>
          <p className="text-center md:text-right max-w-2xl opacity-80">
            {DISCLAIMER_TEXT}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;