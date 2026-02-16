import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Share2, DollarSign, Users, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Affiliate: React.FC = () => {
  // Calculator State
  const [referrals, setReferrals] = useState(10);
  const [avgBookingValue, setAvgBookingValue] = useState(300);
  
  const commissionRate = 0.10;
  const estimatedEarnings = referrals * avgBookingValue * commissionRate;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-900 to-primary-800 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-500/20 border border-accent-500/30 text-accent-400 text-sm font-bold mb-6">
                New Affiliate Program
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Refer & Earn <span className="text-accent-500">10%</span> Lifetime
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                Join the SmallStay Partner Network. Share your unique link, invite travelers, and earn a 10% commission on every booking they make.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg transform transition hover:-translate-y-1">
                    Become an Affiliate
                </button>
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-10 rounded-xl transition">
                    Login to Dashboard
                </button>
            </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="text-gray-500 mt-2">Start earning in three simple steps</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="relative p-8 bg-gray-50 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                 <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                     <Users className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">1. Join Program</h3>
                 <p className="text-gray-500">Sign up for free and get your unique referral dashboard and tracking links instantly.</p>
             </div>
             
             <div className="relative p-8 bg-gray-50 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                 <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                     <Share2 className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">2. Share Link</h3>
                 <p className="text-gray-500">Promote SmallStay on your blog, social media, or directly to friends using your link.</p>
             </div>

             <div className="relative p-8 bg-gray-50 rounded-2xl text-center group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                 <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                     <DollarSign className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-3">3. Earn 10%</h3>
                 <p className="text-gray-500">Get 10% commission on every completed booking made through your referral link.</p>
             </div>
         </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="py-16 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Earning Potential by Category</h2>
                <p className="text-gray-500 mt-2">Earn 10% regardless of what your referral books.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 text-lg mb-2">Shortlet Stays</h3>
                    <p className="text-sm text-gray-600 mb-4">Avg. Booking: $300 (3 nights)</p>
                    <div className="flex justify-between items-center border-t border-blue-200 pt-3">
                        <span className="text-gray-500 text-sm">Your Commission</span>
                        <span className="font-bold text-blue-700 text-xl">$30</span>
                    </div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-orange-900 text-lg mb-2">Luxury Car Rental</h3>
                    <p className="text-sm text-gray-600 mb-4">Avg. Booking: $500 (2 days)</p>
                    <div className="flex justify-between items-center border-t border-orange-200 pt-3">
                        <span className="text-gray-500 text-sm">Your Commission</span>
                        <span className="font-bold text-orange-700 text-xl">$50</span>
                    </div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="font-bold text-purple-900 text-lg mb-2">Yacht Cruise</h3>
                    <p className="text-sm text-gray-600 mb-4">Avg. Booking: $1,500 (Event)</p>
                    <div className="flex justify-between items-center border-t border-purple-200 pt-3">
                        <span className="text-gray-500 text-sm">Your Commission</span>
                        <span className="font-bold text-purple-700 text-xl">$150</span>
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Interactive Calculator Section */}
      <div className="bg-gray-900 py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold mb-6">Calculate your earnings</h2>
                      <p className="text-gray-400 mb-8">Adjust the sliders to see how much you could earn based on your network's activity.</p>
                      
                      <div className="space-y-8">
                          <div>
                              <div className="flex justify-between mb-2">
                                  <label className="font-medium">Monthly Referrals</label>
                                  <span className="text-accent-500 font-bold">{referrals} bookings</span>
                              </div>
                              <input 
                                type="range" 
                                min="1" 
                                max="100" 
                                value={referrals} 
                                onChange={(e) => setReferrals(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
                              />
                          </div>
                          
                          <div>
                              <div className="flex justify-between mb-2">
                                  <label className="font-medium">Average Booking Value</label>
                                  <span className="text-accent-500 font-bold">${avgBookingValue}</span>
                              </div>
                              <input 
                                type="range" 
                                min="50" 
                                max="2000" 
                                step="50"
                                value={avgBookingValue} 
                                onChange={(e) => setAvgBookingValue(parseInt(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent-500"
                              />
                          </div>
                      </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                          <DollarSign className="w-32 h-32 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-6 text-center relative z-10">Estimated Monthly Income</h3>
                      
                      <div className="flex justify-center items-baseline mb-2 relative z-10">
                          <span className="text-5xl font-extrabold text-white">${estimatedEarnings.toLocaleString()}</span>
                          <span className="text-gray-400 ml-2">/ month</span>
                      </div>
                      
                      <div className="mt-8 space-y-4 relative z-10">
                          <div className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-2">
                              <span>Total Booking Value Generated</span>
                              <span>${(referrals * avgBookingValue).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-400 border-b border-white/10 pb-2">
                              <span>Commission Rate</span>
                              <span className="text-accent-500">10%</span>
                          </div>
                      </div>
                      
                      <button className="w-full mt-8 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl transition shadow-lg relative z-10">
                          Start Earning Now
                      </button>
                  </div>
              </div>
          </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                      <div className="flex text-accent-500 mb-4">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"I run a travel blog and SmallStay has become my biggest revenue stream. The 10% commission is significantly higher than other platforms."</p>
                      <div className="flex items-center">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" className="w-10 h-10 rounded-full mr-3" />
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm">Chioma A.</h4>
                              <p className="text-xs text-gray-500">Travel Blogger, Lagos</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                       <div className="flex text-accent-500 mb-4">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"I just share links in my WhatsApp groups when friends ask for apartment recommendations. It's the easiest money I've ever made."</p>
                      <div className="flex items-center">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" className="w-10 h-10 rounded-full mr-3" />
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm">David K.</h4>
                              <p className="text-xs text-gray-500">Student, Abuja</p>
                          </div>
                      </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-sm">
                       <div className="flex text-accent-500 mb-4">
                          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                      <p className="text-gray-600 mb-6 italic">"As a tour guide, I book boats and cars for my clients through SmallStay. The dashboard makes tracking my commissions super simple."</p>
                      <div className="flex items-center">
                          <img src="https://i.pravatar.cc/150?u=a04258114e29026302d" alt="User" className="w-10 h-10 rounded-full mr-3" />
                          <div>
                              <h4 className="font-bold text-gray-900 text-sm">Emmanuel O.</h4>
                              <p className="text-xs text-gray-500">Tour Guide, VI</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      
      {/* Footer CTA */}
      <div className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Ready to start earning?</h2>
              <Link to="/list-property" className="inline-flex items-center justify-center bg-primary-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-primary-800 transition">
                  Get Your Affiliate Link <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Affiliate;
