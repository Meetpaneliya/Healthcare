import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Star, Users, Clock, Percent, Search, Filter, SortAsc, SortDesc, Loader, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Lab {
  id: string;
  name: string;
  rating: number;
  distance: number;
  price: number;
  discount: number;
  customers: number;
  address: string;
  city: string;
  features: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const mockLabs: Lab[] = [
  {
    id: '1',
    name: 'Apollo Diagnostics',
    rating: 4.8,
    distance: 2.5,
    price: 4999,
    discount: 20,
    customers: 5000,
    address: 'Sector 18, Noida',
    city: 'Delhi NCR',
    features: ['24/7 Service', 'Home Visit', 'Expert Staff'],
    coordinates: { lat: 28.5672, lng: 77.3219 }
  },
  {
    id: '2',
    name: 'Max Healthcare',
    rating: 4.7,
    distance: 3.2,
    price: 5499,
    discount: 15,
    customers: 4500,
    address: 'Saket, New Delhi',
    city: 'Delhi NCR',
    features: ['Premium Service', 'Certified Doctors', 'Emergency Care'],
    coordinates: { lat: 28.5244, lng: 77.2167 }
  },
  {
    id: '3',
    name: 'Fortis Labs',
    rating: 4.9,
    distance: 1.8,
    price: 5999,
    discount: 25,
    customers: 6000,
    address: 'Bandra West, Mumbai',
    city: 'Mumbai',
    features: ['Premium Equipment', 'Expert Team', 'Quick Service'],
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: '4',
    name: 'Manipal Hospital',
    rating: 4.6,
    distance: 4.1,
    price: 4499,
    discount: 10,
    customers: 3500,
    address: 'Koramangala, Bangalore',
    city: 'Bangalore',
    features: ['Modern Facility', 'Experienced Staff', 'Affordable'],
    coordinates: { lat: 12.9352, lng: 77.6245 }
  }
];

export const LabSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [sortBy, setSortBy] = useState<'distance' | 'rating' | 'price'>('distance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [nearbyLabs, setNearbyLabs] = useState<Lab[]>([]);

  const cities = Array.from(new Set(mockLabs.map(lab => lab.city)));

  const detectLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
          const nearby = mockLabs
            .map(lab => ({
              ...lab,
              distance: calculateDistance(
                position.coords.latitude,
                position.coords.longitude,
                lab.coordinates?.lat || 0,
                lab.coordinates?.lng || 0
              )
            }))
            .sort((a, b) => a.distance - b.distance)
            .slice(0, 5);
          setNearbyLabs(nearby);
          setIsLocating(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
        }
      );
    }
  };

  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCity('');
    setSortBy('distance');
    setSortOrder('asc');
  };

  const filteredLabs = mockLabs
    .filter(lab => {
      const matchesSearch = lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lab.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = !selectedCity || lab.city === selectedCity;
      return matchesSearch && matchesCity;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'distance':
          comparison = a.distance - b.distance;
          break;
        case 'rating':
          comparison = b.rating - a.rating;
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  const handleLabSelection = (lab: Lab) => {
    // Store selected lab details in session storage
    sessionStorage.setItem('selectedLab', JSON.stringify(lab));
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold mb-6 text-foreground dark:text-foreground-dark">
            Find a Lab Near You
          </h1>
          <p className="text-xl text-foreground/80 dark:text-foreground-dark/80">
            Choose from our network of certified laboratories
          </p>
        </motion.div>

        {/* Location Detection */}
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={detectLocation}
            disabled={isLocating}
            className="btn w-full flex items-center justify-center space-x-2"
          >
            {isLocating ? (
              <>
                <Loader className="animate-spin h-5 w-5" />
                <span>Detecting your location...</span>
              </>
            ) : (
              <>
                <MapPin className="h-5 w-5" />
                <span>Find Labs Near Me</span>
              </>
            )}
          </button>
        </div>

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto mb-12 space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 dark:text-foreground-dark/40" />
              <input
                type="text"
                placeholder="Search labs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-12"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/40 dark:text-foreground-dark/40 hover:text-foreground dark:hover:text-foreground-dark"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="input"
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* Sort By */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'distance' | 'rating' | 'price')}
              className="input"
            >
              <option value="distance">Sort by Distance</option>
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
            </select>

            {/* Sort Order */}
            <button
              onClick={() => setSortOrder(order => order === 'asc' ? 'desc' : 'asc')}
              className="btn flex items-center justify-center space-x-2"
            >
              {sortOrder === 'asc' ? (
                <>
                  <SortAsc className="h-5 w-5" />
                  <span>Ascending</span>
                </>
              ) : (
                <>
                  <SortDesc className="h-5 w-5" />
                  <span>Descending</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Clear Filters */}
          {(searchTerm || selectedCity || sortBy !== 'distance' || sortOrder !== 'asc') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <button
                onClick={clearFilters}
                className="text-primary dark:text-primary-dark hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>

        {/* Nearby Labs Section */}
        {nearbyLabs.length > 0 && (
          <div className="max-w-7xl mx-auto mb-12">
            <h2 className="text-2xl font-bold mb-6 text-foreground dark:text-foreground-dark">
              Nearby Labs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyLabs.map((lab, index) => (
                <LabCard key={lab.id} lab={lab} index={index} onClick={() => handleLabSelection(lab)} />
              ))}
            </div>
          </div>
        )}

        {/* All Labs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredLabs.map((lab, index) => (
              <LabCard key={lab.id} lab={lab} index={index} onClick={() => handleLabSelection(lab)} />
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredLabs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-foreground/80 dark:text-foreground-dark/80">
              No labs found matching your criteria. Try adjusting your filters.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const LabCard: React.FC<{ lab: Lab; index: number; onClick: () => void }> = ({ lab, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ delay: index * 0.1 }}
    className="card hover:scale-105 transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <h2 className="text-2xl font-semibold mb-4 text-foreground dark:text-foreground-dark">
      {lab.name}
    </h2>
    
    <div className="space-y-3 mb-6">
      <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
        <Star className="h-5 w-5 text-yellow-400 mr-2" />
        <span>{lab.rating}/5.0</span>
      </div>
      <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
        <MapPin className="h-5 w-5 text-primary dark:text-primary-dark mr-2" />
        <span>{lab.distance.toFixed(1)} km away</span>
      </div>
      <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
        <Users className="h-5 w-5 text-success dark:text-success-dark mr-2" />
        <span>{lab.customers}+ customers</span>
      </div>
      <div className="flex items-center text-foreground/80 dark:text-foreground-dark/80">
        <Percent className="h-5 w-5 text-warning dark:text-warning-dark mr-2" />
        <span>{lab.discount}% discount</span>
      </div>
    </div>

    {/* Features */}
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {lab.features.map((feature, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full text-sm"
          >
            {feature}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <p className="text-foreground/60 dark:text-foreground-dark/60 text-sm">{lab.address}</p>
    </div>

    <div className="flex items-center justify-between">
      <div className="text-foreground dark:text-foreground-dark">
        <span className="text-foreground/60 dark:text-foreground-dark/60">Price:</span>{' '}
        <span className="font-semibold">₹{lab.price}</span>
      </div>
      <button className="btn">
        Select Lab
      </button>
    </div>
  </motion.div>
);