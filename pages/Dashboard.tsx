import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User, Calendar, Settings, LogOut, Bell, Shield, CreditCard, ChevronRight, Home } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');

  // Mock Data
  const bookings = [
    {
      id: 'BK-1029',
      property: 'Luxury Ocean View Penthouse',
      location: 'Victoria Island, Lagos',
      date: 'Dec 12 - Dec 15, 2024',
      status: 'Confirmed',
      price: '$1,050',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'BK-0911',
      property: 'Toyota Land Cruiser Prado',
      location: 'Lagos Airport Pickup',
      date: 'Nov 05, 2024',
      status: 'Completed',
      price: '$150',
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
            <p className="text-gray-500 mt-1">Manage your bookings and account settings.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 text-center">
                        <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-3 flex items-center justify-center text-primary-600 text-2xl font-bold">
                            SJ
                        </div>
                        <h3 className="font-bold text-gray-900">Sarah Jenkins</h3>
                        <p className="text-xs text-gray-500">Member since 2023</p>
                    </div>
                    <nav className="p-2">
                        <button 
                            onClick={() => setActiveTab('bookings')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'bookings' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <Calendar className="w-5 h-5" />
                            <span>My Bookings</span>
                        </button>
                        <button 
                            onClick={() => setActiveTab('profile')}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            <Settings className="w-5 h-5" />
                            <span>Profile Settings</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                            <Bell className="w-5 h-5" />
                            <span>Notifications</span>
                        </button>
                        <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors mt-2">
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    </nav>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
                
                {/* Bookings Tab */}
                {activeTab === 'bookings' && (
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-primary-500" />
                                Recent Activity
                            </h2>
                            <div className="space-y-4">
                                {bookings.map((booking) => (
                                    <div key={booking.id} className="border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:shadow-md transition-shadow bg-white">
                                        <img src={booking.image} alt={booking.property} className="w-full sm:w-24 h-24 sm:h-24 object-cover rounded-lg" />
                                        <div className="flex-1 w-full text-center sm:text-left">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                                <h3 className="font-bold text-gray-900">{booking.property}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold inline-block sm:inline mt-2 sm:mt-0 ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                                    {booking.status}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-500 mb-1">{booking.location}</p>
                                            <p className="text-sm text-gray-500 mb-3">{booking.date}</p>
                                            <div className="flex justify-between items-center border-t border-gray-50 pt-2">
                                                <span className="font-bold text-primary-900">{booking.price}</span>
                                                <button className="text-sm text-primary-600 font-medium hover:text-primary-800">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Profile Tab */}
                {activeTab === 'profile' && (
                    <div className="space-y-6">
                         <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <User className="w-5 h-5 mr-2 text-primary-500" />
                                Personal Information
                            </h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                        <input type="text" defaultValue="Sarah" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                        <input type="text" defaultValue="Jenkins" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input type="email" defaultValue="sarah.jenkins@example.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" defaultValue="+234 800 123 4567" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500" />
                                </div>
                                <div className="pt-4">
                                    <button className="bg-primary-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary-800 transition-colors">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                         </div>

                         <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Shield className="w-5 h-5 mr-2 text-primary-500" />
                                Security
                            </h2>
                            <div className="flex items-center justify-between py-4 border-b border-gray-100">
                                <div>
                                    <p className="font-medium text-gray-900">Password</p>
                                    <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                                </div>
                                <button className="text-primary-600 text-sm font-bold hover:text-primary-800">Change</button>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                                    <p className="text-sm text-gray-500">Add an extra layer of security</p>
                                </div>
                                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
                                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
                                </button>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
