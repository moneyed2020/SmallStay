import React from 'react';
import { Star, Heart, MapPin, Users, Anchor, Gauge, BedDouble, MessageCircle } from 'lucide-react';
import { ListingItem, StayListing, CarListing, BoatListing } from '../types';

interface PropertyCardProps {
  item: ListingItem;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ item }) => {
  
  const renderSpecs = () => {
    if (item.type === 'stay') {
        const stay = item as StayListing;
        return (
            <>
                <div className="flex items-center space-x-1"><Users className="w-3 h-3" /> <span>{stay.guests} Guests</span></div>
                <span>•</span>
                <div className="flex items-center space-x-1"><BedDouble className="w-3 h-3" /> <span>{stay.bedrooms} Beds</span></div>
            </>
        )
    } else if (item.type === 'car') {
        const car = item as CarListing;
        return (
            <>
                <div className="flex items-center space-x-1"><Users className="w-3 h-3" /> <span>{car.passengers} Seats</span></div>
                <span>•</span>
                <div className="flex items-center space-x-1"><Gauge className="w-3 h-3" /> <span>{car.transmission}</span></div>
            </>
        )
    } else if (item.type === 'boat') {
        const boat = item as BoatListing;
        return (
            <>
                <div className="flex items-center space-x-1"><Users className="w-3 h-3" /> <span>{boat.capacity} Capacity</span></div>
                <span>•</span>
                <div className="flex items-center space-x-1"><Anchor className="w-3 h-3" /> <span>{boat.lengthFt}ft</span></div>
            </>
        )
    }
  }

  const getPriceUnit = () => {
    switch (item.type) {
        case 'stay': return '/ night';
        case 'car': return '/ day';
        case 'boat': return '/ hour';
        default: return '';
    }
  }

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer flex flex-col h-full relative">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 hover:bg-white transition-colors z-10">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute top-3 left-3 bg-primary-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide z-10">
          {item.category}
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-bold text-gray-900 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {item.title}
          </h3>
          <div className="flex items-center space-x-1 bg-gray-50 px-1.5 py-0.5 rounded text-xs">
            <Star className="w-3 h-3 text-accent-500 fill-current" />
            <span className="font-semibold text-gray-900">{item.rating}</span>
            <span className="text-gray-500">({item.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-500 text-xs mb-3">
          <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
          <span className="truncate">{item.location}</span>
        </div>

        <div className="flex items-center space-x-2 mb-3 text-xs text-gray-500 font-medium bg-gray-50 p-2 rounded-lg">
           {renderSpecs()}
        </div>
        
        {item.recentReview && (
          <div className="mb-3 pt-2 border-t border-gray-50">
            <div className="flex items-start text-xs text-gray-500 italic">
               <MessageCircle className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0 text-gray-400" />
               <span className="line-clamp-2">"{item.recentReview}"</span>
            </div>
          </div>
        )}
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <span className="text-lg font-bold text-primary-900">${item.price}</span>
            <span className="text-gray-400 text-xs font-medium"> {getPriceUnit()}</span>
          </div>
          <button className="text-xs font-bold text-primary-600 hover:text-primary-800 transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
