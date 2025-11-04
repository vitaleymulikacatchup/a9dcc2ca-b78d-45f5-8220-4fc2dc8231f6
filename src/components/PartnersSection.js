import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { name: 'Tallinna Tehnikaülikool', logo: '/images/partner-1.png' },
    { name: 'TalTech', logo: '/images/partner-2.png' },
    { name: 'Arhitektuurikool', logo: '/images/partner-3.png' },
    { name: 'Rae Ettevõtete Liit', logo: '/images/partner-4.png' },
    { name: 'Partner 5', logo: '/images/partner-5.png' }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Koostööpartnerid</h2>
      
      <div className="relative">
        <div className="flex items-center justify-between">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex-1 mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-rae-orange rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;