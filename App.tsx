import React, { useState } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import SidebarMenu from './components/SidebarMenu';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
        onOpenSidebar={() => setIsSidebarOpen(true)}
      />
      
      <SidebarMenu 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onSelectCategory={setSelectedCategory}
      />

      <main className="flex-grow">
        <HeroCarousel />
        <ProductGrid selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;