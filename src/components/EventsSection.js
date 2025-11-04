import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const EventsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sündmused</h2>
      
      <div className="card p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="bg-rae-orange text-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">07</div>
              <div className="text-sm">NOV 2025</div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Filmiõõ</h3>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>19:00 - 23:59</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Rae Gümnaasium</span>
              </div>
            </div>
            
            <button className="btn-secondary">
              Vaata kõiki sündmusi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;