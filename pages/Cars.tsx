import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { ListingItem, CarListing } from '../types';
import { Search, MapPin, Calendar, Car, Gauge } from 'lucide-react';

const CAR_LISTINGS: ListingItem[] = [
  {
    id: 'c1', type: 'car', title: 'Toyota Land Cruiser Prado', location: 'Lagos & Abuja', price: 150, rating: 5.0, reviews: 40,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800&auto=format&fit=crop',
    category: 'SUV', amenities: ['AC', 'Bluetooth', 'Tinted Glass'], passengers: 5, transmission: 'Automatic', driverIncluded: true,
    recentReview: "Driver was very professional and punctual."
  },
  {
    id: 'c2', type: 'car', title: 'Mercedes Benz C300', location: 'Victoria Island', price: 200, rating: 4.8, reviews: 25,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury Sedan', amenities: ['AC', 'Leather', 'Sunroof'], passengers: 4, transmission: 'Automatic', driverIncluded: false,
    recentReview: "Smooth ride, car was in excellent condition."
  },
  {
    id: 'c3', type: 'car', title: 'Toyota Hiace Bus', location: 'Interstate', price: 180, rating: 4.6, reviews: 10,
    image: 'https://images.unsplash.com/photo-1625055696147-797544cf4d6b?q=80&w=800&auto=format&fit=crop',
    category: 'Bus', amenities: ['AC', 'USB Charging'], passengers: 14, transmission: 'Manual', driverIncluded: true,
    recentReview: "Great for our team retreat."
  },
  {
    id: 'c4', type: 'car', title: 'Lexus RX 350', location: 'Lekki', price: 120, rating: 4.9, reviews: 30,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    category: 'SUV', amenities: ['AC', 'Sunroof', 'Aux'], passengers: 5, transmission: 'Automatic', driverIncluded: true,
    recentReview: "Very comfortable for Lagos roads."
  },
  {
    id: 'c5', type: 'car', title: 'Mercedes Benz G-Wagon', location: 'Ikoyi, Lagos', price: 800, rating: 5.0, reviews: 12,
    image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop',
    category: 'Ultra Luxury', amenities: ['Bulletproof', 'Escort Available'], passengers: 4, transmission: 'Automatic', driverIncluded: true,
    recentReview: "Made a statement at the wedding."
  },
  {
    id: 'c6', type: 'car', title: 'Toyota Camry 2020', location: 'Ikeja, Lagos', price: 80, rating: 4.5, reviews: 60,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3968e3bb?q=80&w=800&auto=format&fit=crop',
    category: 'Sedan', amenities: ['AC', 'Economy'], passengers: 4, transmission: 'Automatic', driverIncluded: false,
    recentReview: "Fuel efficient and reliable."
  }
];

const Cars: React.FC = () => {
    const [filters, setFilters] = useState({
        type: 'all',
        driver: 'all'
    });

    const filteredCars = useMemo(() => {
        return CAR_LISTINGS.filter(car => {
             const c = car as CarListing;
             if (filters.type !== 'all' && c.category !== filters.type) return false;
             if (filters.driver !== 'all') {
                 const needsDriver = filters.driver === 'yes';
                 if (c.driverIncluded !== needsDriver) return false;
             }
             return true;
        });
    }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Cars Hero */}
      <div className="relative bg-gray-900 py-24">
         <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop&grayscale&blur=2" className="w-full h-full object-cover opacity-30" alt="Cars" />
         </div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Drive Your Adventure</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">Premium car rentals for every occasion. Choose self-drive or chauffeur-driven options.</p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2">
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <MapPin className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Pick-up Location" className="w-full outline-none text-gray-800" />
                 </div>
                 <div className="flex-1 px-4 py-2 flex items-center border-b md:border-b-0 md:border-r border-gray-100">
                    <Calendar className="text-gray-400 w-5 h-5 mr-3" />
                    <input type="text" placeholder="Pick-up Date" className="w-full outline-none text-gray-800" onFocus={(e)=>e.target.type='date'} onBlur={(e)=>e.target.type='text'} />
                 </div>
                 <div className="w-full md:w-auto p-1">
                    <button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center transition-colors">
                        <Search className="w-5 h-5 mr-2" /> Find Cars
                    </button>
                 </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                <h2 className="text-2xl font-bold text-gray-900">Available Vehicles</h2>
                <p className="text-gray-500">Select the perfect ride for your journey.</p>
            </div>
             <div className="flex gap-3 mt-4 md:mt-0">
                <select 
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                  onChange={(e) => setFilters({...filters, type: e.target.value})}
                >
                    <option value="all">All Types</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Luxury Sedan">Luxury Sedan</option>
                    <option value="Bus">Bus</option>
                </select>
                <select 
                   className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
                   onChange={(e) => setFilters({...filters, driver: e.target.value})}
                >
                    <option value="all">Any Driver Option</option>
                    <option value="yes">With Driver</option>
                    <option value="no">Self Drive</option>
                </select>
            </div>
        </div>

        {filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(item => (
                <PropertyCard key={item.id} item={item} />
            ))}
            </div>
        ) : (
             <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-gray-500 text-lg">No cars found matching your criteria.</p>
                <button 
                    onClick={() => setFilters({type: 'all', driver: 'all'})}
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

export default Cars;
