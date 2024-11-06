import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import CTA from './components/CTA';
import FundDetails from './components/Products/FundDetails';
import Portfolio from './components/Portfolio';

type Page = 'home' | 'products' | 'fund-details' | 'portfolio';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedFundId, setSelectedFundId] = useState<string | null>(null);

  const handleFundSelect = (fundId: string) => {
    setSelectedFundId(fundId);
    setCurrentPage('fund-details');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <Stats />
            <CTA />
          </>
        );
      case 'products':
        return <Products onFundSelect={handleFundSelect} />;
      case 'fund-details':
        return <FundDetails fundId={selectedFundId} onBack={() => setCurrentPage('products')} />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className={currentPage !== 'home' ? 'pt-16' : ''}>
        {renderPage()}
      </main>
    </div>
  );
}