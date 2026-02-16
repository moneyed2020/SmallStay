import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { ListingItem, BoatListing } from '../types';
import { Search, MapPin, Calendar, Anchor, Ship } from 'lucide-react';

const BOAT_LISTINGS: ListingItem[] = [
  {
    id: 'b1', type: 'boat', title: '50ft Luxury Yacht', location: 'Lekki Waters', price: 800, rating: 5.0, reviews: 8,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop',
    category: 'Yacht', amenities: ['Deck', 'Cabin', 'AC', 'Kitchen'], capacity: 15, lengthFt: 50, crewIncluded: true,
    recentReview: "Best birthday party ever! The crew was amazing."
  },
  {
    id: 'b2', type: 'boat', title: 'Speed Boat GT', location: 'Five Cowries Creek', price: 200, rating: 4.7, reviews: 45,
    image: 'https://images.unsplash.com/photo-1564251261338-4e0e2277d338?q=80&w=800&auto=format&fit=crop',
    category: 'Speedboat', amenities: ['Safety Gear', 'Covered Seat'], capacity: 6, lengthFt: 22, crewIncluded: true,
    recentReview: "Fastest way to get to Tarkwa Bay."
  },
  {
    id: 'b3', type: 'boat', title: 'Party Barge', location: 'Lagoon', price: 400, rating: 4.8, reviews: 20,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    category: 'Barge', amenities: ['Music System', 'Grill', 'Cooler'], capacity: 30, lengthFt: 40, crewIncluded: true,
    recentReview: "Great for large groups."
  },
  {
    id: 'b4', type: 'boat', title: 'Sunset Catamaran', location: 'VI', price: 600, rating: 4.9, reviews: 15,
    image: 'https://images.unsplash.com/photo-1588622617637-2908f09959e1?q=80&w=800&auto=format&fit=crop',
    category: 'Catamaran', amenities: ['Lounge', 'Bar'], capacity: 12, lengthFt: 38, crewIncluded: true,
    recentReview: "The sunset cruise was magical."
  },
  {
    id: 'b5', type: 'boat', title: 'Jet Ski Duo', location: 'Landmark Beach', price: 100, rating: 4.6, reviews: 80,
    image: 'https://images.unsplash.com/photo-1582234078516-1f6b5b5b9f7a?q=80&w=800&auto=format&fit=crop',
    category: 'Jet Ski', amenities: ['Life Jacket'], capacity: 2, lengthFt: 10, crewIncluded: false,
    recentReview: "So much fun!"
  },
  {
    id: 'b6', type: 'boat', title: 'Fishing Trawler', location: 'Apapa', price: 300, rating: 4.5, reviews: 5,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop',
    category: 'Fishing Boat', amenities: ['Fishing Gear', 'Sonar'], capacity: 4, lengthFt: 25, crewIncluded: true,
    recentReview: "Caught a big one!"
  }
];

const Boats: React.FC = () => {
    const [filters, setFilters] = useState({
        category: 'all',
        capacity: 'all'
    });

    const filteredBoats = useMemo(() => {
        return BOAT_LISTINGS.filter(boat => {
            const b = boat as BoatListing;
            if (filters.category !== 'all' && b.category !== filters.category) return false;
            if (filters.capacity !== 'all') {
                if (b.capacity < parseInt(filters.capacity)) return false;
            }
            return true;
        });
    }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Boats Hero */}
      <div className="relative bg-blue-900 py-24">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1920&auto=format&fit=crop&grayscale&blur=2" className="w-full h-full object-cover opacity-30" alt="Boats" />
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Explore the Waterways</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">Rent luxury yachts, speedboats, and jet skis for unforgettable maritime experiences.</p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2">
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Departure Jetty" className="w-full outline-none text-gray-800" />
                 </div>
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <Calendar className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Date" className="w-full outline-none text-gray-800" onFocus={(e)=>e.target.type='date'} onBlur={(e)=>e.target.type='text'} />
                 </div>
                 <div className="w-full md:w-auto p-1">
                    <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center transition-colors">
                        <Search className="w-5 h-5 mr-2" /> Find Boats
                    </button>
                 </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Featured Vessels</h2>
                <p className="text-gray-500">From speedboats to luxury yachts.</p>
            </div>
             <div className="flex gap-3 mt-4 md:mt-0">
                <select 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                    <option value="all">All Categories</option>
                    <option value="Yacht">Yacht</option>
                    <option value="Speedboat">Speedboat</option>
                    <option value="Jet Ski">Jet Ski</option>
                    <option value="Barge">Barge</option>
                </select>
                <select 
                   className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                   onChange={(e) => setFilters({...filters, capacity: e.target.value})}
                >
                    <option value="all">Any Capacity</option>
                    <option value="5">5+ People</option>
                    <option value="10">10+ People</option>
                    <option value="20">20+ People</option>
                </select>
            </div>
        </div>

        {filteredBoats.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBoats.map(item => (
                <PropertyCard key={item.id} item={item} />
            ))}
            </div>
        ) : (
             <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-gray-500 text-lg">No boats found matching your criteria.</p>
                <button 
                    onClick={() => setFilters({category: 'all', capacity: 'all'})}
                    className="mt-4 text-primary-600 font-semibold hover:underline"
                >
                    Clear Filters
                </button>
            </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Boats;
