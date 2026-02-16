import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Home, Key, CheckCircle, DollarSign, Upload, Users, Heart } from 'lucide-react';

const ListProperty: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative bg-primary-900 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-10" alt="Apartment" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
             <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Become a Host</h1>
             <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10">
                Whether you're listing a vacation home, a car, or just hosting a guest in your spare room, SmallStay makes it easy to earn.
             </p>
             <button className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1">
                 Get Started
             </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Choose how you want to host</h2>
            <p className="text-gray-500 mt-2">We have options for every type of space and schedule.</p>
        </div>

        {/* Hosting Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            {/* Host a Guest Card */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border-2 border-primary-100 relative overflow-hidden group hover:border-primary-300 transition-all shadow-sm hover:shadow-xl cursor-pointer">
                <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                    <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Host a Guest</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Have a spare room? List it as a shared space. Perfect for meeting new people and earning extra income without vacating your home. 
                </p>
                <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Earn avg. $500/month
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Control your availability
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Verified guest ID checks
                    </li>
                </ul>
                <button className="w-full bg-primary-900 text-white font-bold py-3 rounded-xl hover:bg-primary-800 transition">List a Shared Room</button>
            </div>

            {/* List Entire Property Card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 relative overflow-hidden group hover:border-gray-300 transition-all shadow-sm hover:shadow-xl cursor-pointer">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-600">
                    <Home className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">List Entire Property</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Rent out your entire apartment, vacation home, or hotel. Ideal for maximizing revenue on properties you don't currently occupy.
                </p>
                 <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Earn avg. $2,000/month
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Professional photography support
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Damage protection coverage
                    </li>
                </ul>
                <button className="w-full bg-white border-2 border-gray-200 text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-50 transition">List Entire Place</button>
            </div>
        </div>

        {/* Steps */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">How Hosting Works</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm mx-auto mb-4">
                        <Key className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">1. Sign Up for Free</h3>
                    <p className="text-sm text-gray-500">Create an account and verify your identity.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm mx-auto mb-4">
                        <Home className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">2. List Your Space/Asset</h3>
                    <p className="text-sm text-gray-500">Upload photos, set prices, and add details for your home, car, or boat.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 shadow-sm mx-auto mb-4">
                        <DollarSign className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">3. Start Earning</h3>
                    <p className="text-sm text-gray-500">Receive bookings and get paid instantly upon check-in.</p>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Listing</h2>
            <form className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Listing Title</label>
                        <input type="text" placeholder="e.g. Cozy Studio in Ikeja" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Listing Type</label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 bg-white">
                            <option>Host a Guest (Shared Room)</option>
                            <option>Shortlet Apartment</option>
                            <option>Entire Home</option>
                            <option>Hotel Room</option>
                            <option>Car Rental</option>
                            <option>Boat/Yacht</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Location / Address</label>
                    <input type="text" placeholder="Full address" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                </div>

                 <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
                    <textarea rows={4} placeholder="Describe your property and what guests can expect..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Price per night/day</label>
                        <div className="relative">
                            <span className="absolute left-4 top-3 text-gray-500 font-bold">$</span>
                            <input type="number" placeholder="0.00" className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Contact Number</label>
                         <input type="tel" placeholder="+234..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                    </div>
                </div>

                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Click to upload photos</p>
                    <p className="text-xs text-gray-400">JPG, PNG up to 10MB</p>
                </div>

                <button type="button" className="w-full bg-primary-900 text-white font-bold py-4 rounded-xl hover:bg-primary-800 transition-colors shadow-lg">
                    Submit Application
                </button>
                <p className="text-xs text-center text-gray-400">By submitting, you agree to SmallStay's host terms and conditions.</p>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListProperty;
