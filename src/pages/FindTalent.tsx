import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Filter, Star, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

const SAMPLE_TALENTS = [
  {
    id: 1,
    name: 'John Kamau',
    title: 'Professional Photographer',
    rating: 4.8,
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=200',
    categories: ['Photography', 'Videography'],
    price: 'From KES 5,000',
  },
  {
    id: 2,
    name: 'Alice Wanjiku',
    title: 'Music Producer & Sound Engineer',
    rating: 4.9,
    location: 'Mombasa, Kenya',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    categories: ['Music Production', 'Audio Engineering'],
    price: 'From KES 10,000',
  },
  {
    id: 3,
    name: 'David Omondi',
    title: 'Fashion Designer',
    rating: 4.7,
    location: 'Kisumu, Kenya',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    categories: ['Fashion & Tailoring'],
    price: 'From KES 3,000',
  },
  {
    id: 4,
    name: 'Sarah Njeri',
    title: 'Graphic Designer',
    rating: 5.0,
    location: 'Nakuru, Kenya',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200',
    categories: ['Graphic Design', 'UI/UX Design'],
    price: 'From KES 8,000',
  },
  {
    id: 5,
    name: 'Michael Otieno',
    title: 'Event Host & MC',
    rating: 4.9,
    location: 'Eldoret, Kenya',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    categories: ['Event Hosting', 'Voice Over'],
    price: 'From KES 15,000',
  },
  {
    id: 6,
    name: 'Jane Muthoni',
    title: 'Construction Manager',
    rating: 4.8,
    location: 'Thika, Kenya',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    categories: ['Construction', 'Project Management'],
    price: 'From KES 20,000',
  },
  {
    id: 7,
    name: 'Peter Kimani',
    title: 'Traditional Artist',
    rating: 4.9,
    location: 'Machakos, Kenya',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
    categories: ['Fine Arts', 'Sculpture'],
    price: 'From KES 7,000',
  },
  {
    id: 8,
    name: 'Grace Akinyi',
    title: 'Makeup Artist',
    rating: 4.7,
    location: 'Mombasa, Kenya',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    categories: ['Makeup', 'Beauty'],
    price: 'From KES 4,000',
  },
  {
    id: 9,
    name: 'Hassan Omar',
    title: 'Web Developer',
    rating: 5.0,
    location: 'Nairobi, Kenya',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    categories: ['Web Development', 'Mobile Apps'],
    price: 'From KES 25,000',
  }
];

export function FindTalent() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              Talanta254
            </Link>
            <div className="space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for talent (e.g., photographer, music producer)"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SAMPLE_TALENTS.map((talent) => (
            <div key={talent.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
                    <p className="text-gray-600">{talent.title}</p>
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{talent.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {talent.location}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {talent.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 bg-purple-50 text-purple-600 text-sm rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{talent.price}</span>
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => navigate(`/profile/${talent.id}`)}
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}