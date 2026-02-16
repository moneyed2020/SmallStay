import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';
import AIChat from '../components/AIChat';
import { ListingItem, StayListing } from '../types';
import { ArrowRight, ShieldCheck, Clock, Headphones, Search, CreditCard, Smile } from 'lucide-react';

// Enhanced Mock Data with Reviews
const FEATURED_STAYS: ListingItem[] = [
  {
    id: '1', type: 'stay', title: 'Luxury Ocean View Penthouse', location: 'Victoria Island, Lagos', price: 350, rating: 4.9, reviews: 128,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury', amenities: ['Pool', 'Wifi', 'Sea View'], guests: 4, bedrooms: 2, bathrooms: 2,
    recentReview: "Absolutely stunning views! The concierge service was top notch. Will definitely be back."
  },
  {
    id: '2', type: 'stay', title: 'Modern Studio Wuse 2', location: 'Wuse 2, Abuja', price: 85, rating: 4.7, reviews: 85,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop',
    category: 'Studio', amenities: ['Wifi', 'Kitchen'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "Perfect for my business trip. Fast internet and very clean."
  },
  {
    id: '3', type: 'stay', title: 'Family Villa with Garden', location: 'Lekki Phase 1, Lagos', price: 420, rating: 4.95, reviews: 54,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
    category: 'Villa', amenities: ['Pool', 'Garden', 'Security'], guests: 8, bedrooms: 4, bathrooms: 4,
    recentReview: "Great for the kids. The pool was well maintained and security was tight."
  },
  {
    id: '4', type: 'stay', title: 'The Art Loft', location: 'Bodija, Ibadan', price: 60, rating: 4.5, reviews: 12,
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop',
    category: 'Apartment', amenities: ['Wifi', 'Art'], guests: 2, bedrooms: 1, bathrooms: 1,
    recentReview: "A very creative space. Loved the decor."
  }
];

const FEATURED_CARS: ListingItem[] = [
  {
    id: 'c1', type: 'car', title: 'Toyota Land Cruiser Prado', location: 'Lagos & Abuja', price: 150, rating: 5.0, reviews: 40,
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=800&auto=format&fit=crop',
    category: 'SUV', amenities: ['AC', 'Bluetooth'], passengers: 5, transmission: 'Automatic', driverIncluded: true,
    recentReview: "Driver was very professional and punctual."
  },
  {
    id: 'c2', type: 'car', title: 'Mercedes Benz C300', location: 'Victoria Island', price: 200, rating: 4.8, reviews: 25,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop',
    category: 'Luxury Sedan', amenities: ['AC', 'Leather'], passengers: 4, transmission: 'Automatic', driverIncluded: false,
    recentReview: "Smooth ride, car was in excellent condition."
  },
  {
    id: 'c3', type: 'car', title: 'Toyota Hiace Bus', location: 'Interstate', price: 180, rating: 4.6, reviews: 10,
    image: 'https://images.unsplash.com/photo-1625055696147-797544cf4d6b?q=80&w=800&auto=format&fit=crop',
    category: 'Bus', amenities: ['AC'], passengers: 14, transmission: 'Manual', driverIncluded: true
  },
  {
    id: 'c4', type: 'car', title: 'Lexus RX 350', location: 'Lekki', price: 120, rating: 4.9, reviews: 30,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop',
    category: 'SUV', amenities: ['AC', 'Sunroof'], passengers: 5, transmission: 'Automatic', driverIncluded: true
  }
];

const FEATURED_BOATS: ListingItem[] = [
  {
    id: 'b1', type: 'boat', title: '50ft Luxury Yacht', location: 'Lekki Waters', price: 800, rating: 5.0, reviews: 8,
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop',
    category: 'Yacht', amenities: ['Deck', 'Cabin'], capacity: 15, lengthFt: 50, crewIncluded: true,
    recentReview: "Best birthday party ever! The crew was amazing."
  },
  {
    id: 'b2', type: 'boat', title: 'Speed Boat GT', location: 'Five Cowries Creek', price: 200, rating: 4.7, reviews: 45,
    image: 'https://images.unsplash.com/photo-1564251261338-4e0e2277d338?q=80&w=800&auto=format&fit=crop',
    category: 'Speedboat', amenities: ['Safety Gear'], capacity: 6, lengthFt: 22, crewIncluded: true
  },
  {
    id: 'b3', type: 'boat', title: 'Party Barge', location: 'Lagoon', price: 400, rating: 4.8, reviews: 20,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop',
    category: 'Barge', amenities: ['Music', 'Grill'], capacity: 30, lengthFt: 40, crewIncluded: true
  },
  {
    id: 'b4', type: 'boat', title: 'Sunset Catamaran', location: 'VI', price: 600, rating: 4.9, reviews: 15,
    image: 'https://images.unsplash.com/photo-1588622617637-2908f09959e1?q=80&w=800&auto=format&fit=crop',
    category: 'Catamaran', amenities: ['Lounge'], capacity: 12, lengthFt: 38, crewIncluded: true
  }
];

interface SectionProps {
  title: string;
  subtitle: string;
  items: ListingItem[];
  color?: 'white' | 'gray';
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, items, color = 'white', children }) => (
  <section className={`py-16 ${color === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
           <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
           <p className="text-gray-500 text-sm max-w-xl">{subtitle}</p>
        </div>
        <div className="mt-4 md:mt-0">
             {children}
        </div>
      </div>
      
      {items.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <PropertyCard key={item.id} item={item} />
            ))}
          </div>
      ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-500">No properties match your filters.</p>
          </div>
      )}

      <div className="mt-8 text-center sm:hidden">
         <button className="text-primary-600 font-bold text-sm">View All Listings</button>
      </div>
    </div>
  </section>
);

const HowItWorks: React.FC = () => (
    <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <span className="text-accent-500 font-bold text-sm uppercase tracking-wider">Simple Process</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">How SmallStay Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>
                
                <div className="text-center">
                    <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center">
                            <Search className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">1. Search & Discover</h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-6">Filter by location, price, and amenities to find your perfect match among our verified listings.</p>
                </div>

                <div className="text-center">
                    <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center">
                            <CreditCard className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2. Book Securely</h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-6">Pay instantly with our secure gateway. Your funds are protected until you check in.</p>
                </div>

                <div className="text-center">
                    <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                         <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center">
                            <Smile className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">3. Enjoy Your Stay</h3>
                    <p className="text-gray-500 text-sm leading-relaxed px-6">Experience comfort and quality. Our concierge team is just a message away.</p>
                </div>
            </div>
        </div>
    </section>
);

const Home: React.FC = () => {
  // Filter State
  const [filters, setFilters] = useState({
      priceRange: 'all',
      bedrooms: 'all',
      amenity: 'all'
  });

  // Filter Logic
  const filteredStays = useMemo(() => {
      return FEATURED_STAYS.filter(stay => {
          const s = stay as StayListing;
          
          // Price Filter
          if (filters.priceRange !== 'all') {
              const price = s.price;
              if (filters.priceRange === 'under100' && price >= 100) return false;
              if (filters.priceRange === '100-300' && (price < 100 || price > 300)) return false;
              if (filters.priceRange === 'over300' && price <= 300) return false;
          }

          // Bedrooms Filter
          if (filters.bedrooms !== 'all') {
              if (s.bedrooms < parseInt(filters.bedrooms)) return false;
          }

          // Amenity Filter
          if (filters.amenity !== 'all') {
              if (!s.amenities.some(a => a.toLowerCase().includes(filters.amenity.toLowerCase()))) return false;
          }

          return true;
      });
  }, [filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilters(prev => ({
          ...prev,
          [e.target.name]: e.target.value
      }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <Section 
        title="Trending Shortlets" 
        subtitle="Popular apartments and homes selected for you this week."
        items={filteredStays}
      >
          {/* Filters UI */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              <select 
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-primary-500"
              >
                  <option value="all">Any Price</option>
                  <option value="under100">Under $100</option>
                  <option value="100-300">$100 - $300</option>
                  <option value="over300">Over $300</option>
              </select>

              <select 
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-primary-500"
              >
                  <option value="all">Any Bedrooms</option>
                  <option value="1">1+ Bedroom</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
              </select>

              <select 
                  name="amenity"
                  value={filters.amenity}
                  onChange={handleFilterChange}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-primary-500"
              >
                  <option value="all">All Amenities</option>
                  <option value="pool">Pool</option>
                  <option value="wifi">Wifi</option>
                  <option value="sea">Sea View</option>
                  <option value="garden">Garden</option>
              </select>
          </div>
      </Section>

      <HowItWorks />

      <Section 
        title="Move in Style" 
        subtitle="Reliable car rentals with verified drivers for your inter-city trips or daily commute."
        items={FEATURED_CARS}
        color="gray"
      />

      <Section 
        title="Maritime Experiences" 
        subtitle="Explore the waterways with our premium selection of boats and yachts."
        items={FEATURED_BOATS}
      />

      {/* Value Props */}
      <section className="bg-primary-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">The SmallStay Standard</h2>
            <p className="text-primary-200">We don't just list properties; we curate experiences. Safety, quality, and comfort are our non-negotiables.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-colors">
              <div className="w-16 h-16 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Physically Verified</h3>
              <p className="text-primary-100 text-sm leading-relaxed">Our agents visit every property, inspect every car, and vet every boat crew before they go live.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-colors">
               <div className="w-16 h-16 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Concierge Support</h3>
              <p className="text-primary-100 text-sm leading-relaxed">Need a private chef? Airport pickup? Our support team handles special requests 24/7.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/20 transition-colors">
               <div className="w-16 h-16 bg-white text-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Transactions</h3>
              <p className="text-primary-100 text-sm leading-relaxed">We hold payments in escrow until you check in, ensuring you get exactly what you paid for.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIChat />
    </div>
  );
};

export default Home;
