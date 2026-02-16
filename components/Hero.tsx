import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Car, Ship, Home, Briefcase } from 'lucide-react';

type TabType = 'stays' | 'cars' | 'boats';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('stays');

  return (
    <div className="relative bg-primary-900 overflow-hidden pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={
            activeTab === 'stays' ? "https://picsum.photos/1920/1080?grayscale&blur=2" :
            activeTab === 'cars' ? "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop&grayscale&blur=2" :
            "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1920&auto=format&fit=crop&grayscale&blur=2"
          }
          alt="Background"
        />
        <div className="absolute inset-0 bg-primary-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Dynamic Headlines */}
        <div className="text-center mb-10 max-w-3xl">
           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            {activeTab === 'stays' && <span>Find your perfect <span className="text-accent-500">home</span></span>}
            {activeTab === 'cars' && <span>Move freely with <span className="text-accent-500">luxury</span></span>}
            {activeTab === 'boats' && <span>Cruise the <span className="text-accent-500">waves</span></span>}
          </h1>
          <p className="text-lg text-primary-100">
            {activeTab === 'stays' && "Discover apartments, hotels, and vacation homes verified for your comfort."}
            {activeTab === 'cars' && "Rent cars with verified drivers or self-drive options for your journey."}
            {activeTab === 'boats' && "Book private yachts and boats for leisure, parties, or transit."}
          </p>
        </div>

        {/* Tabbed Search Interface */}
        <div className="w-full max-w-5xl">
          {/* Tabs */}
          <div className="flex justify-center mb-0">
             <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-t-2xl border border-white/20 border-b-0">
                <button 
                  onClick={() => setActiveTab('stays')}
                  className={`flex items-center px-6 py-3 rounded-t-xl text-sm font-bold transition-all ${activeTab === 'stays' ? 'bg-white text-primary-900' : 'text-white hover:bg-white/10'}`}
                >
                  <Home className="w-4 h-4 mr-2" /> Stays
                </button>
                <button 
                  onClick={() => setActiveTab('cars')}
                  className={`flex items-center px-6 py-3 rounded-t-xl text-sm font-bold transition-all ${activeTab === 'cars' ? 'bg-white text-primary-900' : 'text-white hover:bg-white/10'}`}
                >
                  <Car className="w-4 h-4 mr-2" /> Cars
                </button>
                <button 
                  onClick={() => setActiveTab('boats')}
                  className={`flex items-center px-6 py-3 rounded-t-xl text-sm font-bold transition-all ${activeTab === 'boats' ? 'bg-white text-primary-900' : 'text-white hover:bg-white/10'}`}
                >
                  <Ship className="w-4 h-4 mr-2" /> Boats
                </button>
             </div>
          </div>

          {/* Search Box Container */}
          <div className="bg-white rounded-2xl rounded-tl-none shadow-2xl p-2 sm:p-3 relative z-10">
            <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
              
              {/* Location Input (Common) */}
              <div className="flex-1 px-4 py-3">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location</label>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder={activeTab === 'boats' ? "Departure Jetty or City" : "City, Area, or Property"}
                    className="w-full outline-none text-gray-900 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Dynamic Inputs based on Tab */}
              {activeTab === 'stays' && (
                <>
                  <div className="flex-1 px-4 py-3">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Check In - Check Out</label>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <input type="text" placeholder="Add dates" className="w-full outline-none text-gray-900 font-medium bg-transparent" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                    </div>
                  </div>
                  <div className="w-full lg:w-48 px-4 py-3">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Guests</label>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-400 mr-3" />
                      <input type="number" min="1" placeholder="1 Guest" className="w-full outline-none text-gray-900 font-medium" />
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'cars' && (
                <>
                  <div className="flex-1 px-4 py-3">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Pickup Date</label>
                     <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <input type="text" placeholder="Select Date" className="w-full outline-none text-gray-900 font-medium bg-transparent" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                    </div>
                  </div>
                  <div className="flex-1 px-4 py-3">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Car Type</label>
                    <div className="flex items-center">
                      <Car className="w-5 h-5 text-gray-400 mr-3" />
                       <select className="w-full outline-none text-gray-900 font-medium bg-transparent appearance-none">
                         <option>All Types</option>
                         <option>SUV</option>
                         <option>Sedan</option>
                         <option>Luxury Bus</option>
                       </select>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 'boats' && (
                <>
                  <div className="flex-1 px-4 py-3">
                     <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Date</label>
                     <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                      <input type="text" placeholder="Select Date" className="w-full outline-none text-gray-900 font-medium bg-transparent" onFocus={(e) => e.target.type='date'} onBlur={(e) => e.target.type='text'} />
                    </div>
                  </div>
                   <div className="flex-1 px-4 py-3">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Duration</label>
                    <div className="flex items-center">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                      <select className="w-full outline-none text-gray-900 font-medium bg-transparent appearance-none">
                         <option>Hourly</option>
                         <option>Full Day</option>
                         <option>Overnight</option>
                       </select>
                    </div>
                  </div>
                </>
              )}

              {/* Search Button */}
              <div className="p-2 lg:pl-4 flex items-center">
                <button className="w-full lg:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-0.5 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex items-center space-x-6 text-white/80 text-sm font-medium">
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-400 mr-2"></span> Verified Listings</span>
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span> Instant Confirmation</span>
            <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span> Secure Payment</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
