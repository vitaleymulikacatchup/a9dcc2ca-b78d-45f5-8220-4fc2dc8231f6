import React from 'react';
import { ExternalLink } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { name: 'Tunniplan', href: '#', external: true },
    { name: 'Õpilasleht', href: '#' },
    { name: 'Koolikuma', href: '#' },
    { name: 'Koolipäevik', href: '#' },
    { name: 'Teili koolimüük', href: '#', external: true }
  ];

  return (
    <div className="bg-white py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((action) => (
            <a
              key={action.name}
              href={action.href}
              className="btn-primary flex items-center space-x-2"
            >
              <span>{action.name}</span>
              {action.external && <ExternalLink className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;