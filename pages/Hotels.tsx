import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { ListingItem, StayListing } from '../types';
import { Search, MapPin, Calendar, Users, Filter } from 'lucide-react';

const HOTEL_LISTINGS: ListingItem[] = [
  {
    id: 'h1', type: 'stay', title: 'The Eko Grand Hotel', location: 'Victoria Island, Lagos', price: 450, rating: 4.8, reviews: 1200,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury Hotel', amenities: ['Pool', 'Spa', 'Gym', 'Restaurant'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "The breakfast buffet was world-class."
  },
  {
    id: 'h2', type: 'stay', title: 'Abuja Continental Suites', location: 'Central Business District, Abuja', price: 280, rating: 4.6, reviews: 850,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop',
    category: 'Business Hotel', amenities: ['Conference Room', 'Wifi', 'Bar'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "Perfect location for my business meetings."
  },
  {
    id: 'h3', type: 'stay', title: 'Ibadan Heritage Resort', location: 'Iyaganku, Ibadan', price: 120, rating: 4.4, reviews: 300,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop',
    category: 'Resort', amenities: ['Garden', 'Pool', 'Tennis Court'], guests: 4, bedrooms: 2, bathrooms: 2,
    recentReview: "A peaceful getaway from the city noise."
  },
  {
    id: 'h4', type: 'stay', title: 'Lekki Waterside Inn', location: 'Lekki Phase 1, Lagos', price: 150, rating: 4.3, reviews: 150,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop',
    category: 'Boutique Hotel', amenities: ['Wifi', 'Rooftop Bar'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "Small rooms but great vibe at the rooftop."
  },
  {
    id: 'h5', type: 'stay', title: 'Transcorp Hilton', location: 'Maitama, Abuja', price: 500, rating: 4.9, reviews: 2000,
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury Hotel', amenities: ['Pool', 'Casino', 'Golf', 'Spa'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "The gold standard for luxury in Abuja."
  },
  {
    id: 'h6', type: 'stay', title: 'Port Harcourt Presidential', location: 'GRA Phase 2, Port Harcourt', price: 200, rating: 4.2, reviews: 500,
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=800&auto=format&fit=crop',
    category: 'Hotel', amenities: ['Pool', 'Gym', 'Event Hall'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "Decent stay, friendly staff."
  }
];

const Hotels: React.FC = () => {
  const [filters, setFilters] = useState({
    priceRange: 'all',
    rating: 'all'
  });

  const filteredHotels = useMemo(() => {
    return HOTEL_LISTINGS.filter(hotel => {
      // Price Filter
      if (filters.priceRange !== 'all') {
        const price = hotel.price;
        if (filters.priceRange === 'budget' && price >= 200) return false;
        if (filters.priceRange === 'mid' && (price < 200 || price > 400)) return false;
        if (filters.priceRange === 'luxury' && price <= 400) return false;
      }
      // Rating Filter
      if (filters.rating !== 'all') {
         if (hotel.rating < parseFloat(filters.rating)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hotel Hero */}
      <div className="relative bg-primary-900 py-24">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="Hotel Lobby" />
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Stay in Comfort & Luxury</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">Discover top-rated hotels across Nigeria, from business suites to leisure resorts.</p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2">
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Where are you going?" className="w-full outline-none text-gray-800" />
                 </div>
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <Calendar className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Check-in - Check-out" className="w-full outline-none text-gray-800" onFocus={(e)=>e.target.type='date'} onBlur={(e)=>e.target.type='text'} />
                 </div>
                 <div className="w-full md:w-auto p-1">
                    <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center transition-colors">
                        <Search className="w-5 h-5 mr-2" /> Search
                    </button>
                 </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Recommended Hotels</h2>
                <p className="text-gray-500">Handpicked for quality and service.</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
                <select 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                    <option value="all">Any Price</option>
                    <option value="budget">Budget (Under $200)</option>
                    <option value="mid">Mid-Range ($200 - $400)</option>
                    <option value="luxury">Luxury ($400+)</option>
                </select>
                <select 
                   className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                   onChange={(e) => setFilters({...filters, rating: e.target.value})}
                >
                    <option value="all">Any Rating</option>
                    <option value="4.5">4.5+ Stars</option>
                    <option value="4.0">4.0+ Stars</option>
                </select>
            </div>
        </div>

        {filteredHotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map(item => (
                <PropertyCard key={item.id} item={item} />
            ))}
            </div>
        ) : (
             <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-gray-500 text-lg">No hotels found matching your criteria.</p>
                <button 
                    onClick={() => setFilters({priceRange: 'all', rating: 'all'})}
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

export default Hotels;
