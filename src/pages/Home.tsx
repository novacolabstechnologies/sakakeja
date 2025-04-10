
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Camera,
  Music2,
  Scissors,
  PenTool,
  HardHat,
  PartyPopper,
  Search,
  Star,
  Shield,
} from 'lucide-react';
import { Button } from '../components/Button';
import { CategoryCard } from '../components/CategoryCard';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-purple-900 text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-purple-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <nav className="flex items-center justify-between mb-16">
            <div className="text-2xl font-bold">Talanta254</div>
            <div className="space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate('/signin')}>
                Sign In
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/signup')}>
                Join Now
              </Button>
            </div>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover Kenya's Finest Creative Talent
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Connect with skilled artisans, creatives, and freelancers for your next project.
              Your gateway to Kenya's untapped talent pool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => navigate('/find-talent')}>
                Find Talent
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/become-provider')}>
                Offer Your Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div onClick={() => navigate('/find-talent?category=photography')} className="cursor-pointer">
              <CategoryCard
                icon={Camera}
                title="Photography"
                description="Professional photographers for events, portraits, and commercial shoots"
              />
            </div>
            <div onClick={() => navigate('/find-talent?category=music')} className="cursor-pointer">
              <CategoryCard
                icon={Music2}
                title="Music Production"
                description="Recording, mixing, and mastering by top producers"
              />
            </div>
            <div onClick={() => navigate('/find-talent?category=fashion')} className="cursor-pointer">
              <CategoryCard
                icon={Scissors}
                title="Fashion & Tailoring"
                description="Custom clothing design and professional alterations"
              />
            </div>
            <div onClick={() => navigate('/find-talent?category=design')} className="cursor-pointer">
              <CategoryCard
                icon={PenTool}
                title="Graphic Design"
                description="Logos, branding, and visual content creation"
              />
            </div>
            <div onClick={() => navigate('/find-talent?category=construction')} className="cursor-pointer">
              <CategoryCard
                icon={HardHat}
                title="Construction"
                description="Skilled contractors and construction professionals"
              />
            </div>
            <div onClick={() => navigate('/find-talent?category=events')} className="cursor-pointer">
              <CategoryCard
                icon={PartyPopper}
                title="Event Hosting"
                description="MCs, DJs, and entertainment services"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Talanta254</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div>
              <Search className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Discovery</h3>
              <p className="text-gray-600">
                Find the perfect talent for your project with our advanced search and filtering
              </p>
            </div>
            <div>
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Protected transactions and escrow services for peace of mind
              </p>
            </div>
            <div>
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
              <p className="text-gray-600">
                Make informed decisions with authentic client feedback and ratings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of talented professionals and clients on Talanta254
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/find-talent')}>
              Find Talent
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/become-provider')}>
              Become a Provider
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Talanta254</h3>
              <p className="text-sm">
                Connecting Kenya's talent with opportunities worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigate('/find-talent?category=photography')} className="hover:text-white">
                    Photography
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/find-talent?category=music')} className="hover:text-white">
                    Music Production
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/find-talent?category=fashion')} className="hover:text-white">
                    Fashion & Tailoring
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/find-talent?category=design')} className="hover:text-white">
                    Graphic Design
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigate('/about')} className="hover:text-white">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/how-it-works')} className="hover:text-white">
                    How it Works
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/terms')} className="hover:text-white">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/privacy')} className="hover:text-white">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigate('/help')} className="hover:text-white">
                    Help Center
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/safety')} className="hover:text-white">
                    Safety Tips
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/contact')} className="hover:text-white">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate('/faq')} className="hover:text-white">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <p>&copy; 2025 Talanta254. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}