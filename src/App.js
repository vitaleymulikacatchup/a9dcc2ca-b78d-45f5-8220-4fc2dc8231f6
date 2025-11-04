import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import NewsSection from './components/NewsSection';
import EventsSection from './components/EventsSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickActions />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NewsSection />
        <EventsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;