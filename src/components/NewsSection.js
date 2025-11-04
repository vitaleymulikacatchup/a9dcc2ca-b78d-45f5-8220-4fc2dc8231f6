import React from 'react';
import { Calendar, User } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Euroopa suurim Mehhiko surnutepäeva altar on meie koolis',
      image: '/images/news-1.jpg',
      date: '31.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 2,
      title: 'Kuula podcasti vestlust välisriikidest tulnud õpetajatega',
      image: '/images/news-2.jpg',
      date: '31.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 3,
      title: 'Esimese õppeperioodi kokkuvõte õpilaste vaates',
      image: '/images/news-3.jpg',
      date: '28.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 4,
      title: 'Rae Gümnaasium linnulennult - vaata videot',
      image: '/images/news-4.jpg',
      date: '24.10.2025',
      author: 'Kirsti Pallum'
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Uudised</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {newsItems.map((item) => (
          <article key={item.id} className="card group cursor-pointer">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 line-clamp-3 group-hover:text-rae-orange transition-colors">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center">
        <button className="btn-secondary">
          Ära uudiseid
        </button>
      </div>
    </section>
  );
};

export default NewsSection;