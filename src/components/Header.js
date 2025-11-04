import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { name: 'Avaleht', href: '#', active: true },
    { name: 'Õppetöö', href: '#', hasDropdown: true },
    { name: 'Koolielu', href: '#', hasDropdown: true },
    { name: 'Koolist', href: '#', hasDropdown: true },
    { name: 'Talendiotsing', href: '#', hasDropdown: true },
    { name: 'Vastuvõtt', href: '#', hasDropdown: true },
    { name: 'Koolimeedia', href: '#', external: true },
    { name: 'Kalender', href: '#', hasDropdown: true },
    { name: 'Kontaktid', href: '#', hasDropdown: true }
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-rae-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm font-medium">
                Rae Gümnaasium
              </div>
              <div className="text-white/80 text-sm italic">
                Avene. Õllata. Korda. Naudi.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">
                Juurdepääsetavus
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Otsing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/20 text-white placeholder-white/60 border border-white/30 rounded px-3 py-1 text-sm focus:outline-none focus:bg-white/30 w-48"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-rae-orange rounded grid grid-cols-3 gap-0.5 p-1">
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                  <div className="bg-white rounded-sm"></div>
                </div>
                <span className="text-rae-orange font-bold text-lg">Rae Gümnaasium</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`nav-link flex items-center space-x-1 ${
                    item.active ? 'active' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  {item.external && <span className="text-xs">↗</span>}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-rae-orange p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium ${
                  item.active
                    ? 'text-rae-orange bg-rae-orange/5'
                    : 'text-gray-700 hover:text-rae-orange hover:bg-gray-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;