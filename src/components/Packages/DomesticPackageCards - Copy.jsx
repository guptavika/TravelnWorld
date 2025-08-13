import React from 'react';
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';
import PackageCardDetail from './PackageCardDetails';

// Destinations data
const destinations = [
  {
    id: 1,
    title: "Goa",
    slug: "goa",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
  {
    id: 2,
    title: "Andaman",
    slug: "andaman",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
  {
    id: 3,
    title: "Tamilnadu",
    slug: "tamilnadu",
    image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
  },
];

// Enhanced Package data with more details
const destinationPackages = {
  goa: [
    {
      id: 1,
      title: "Goa Beach Paradise Package",
      duration: "5 days & 4 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      rating: 4.5,
      reviews: 124,
      oldPrice: 29999,
      discount: 5000,
      price: 24999,
      description: "Experience the best beaches of Goa with luxury stays and water sports.",
      highlights: [
        "Private beach access",
        "Sunset cruise",
        "Water sports activities",
        "Local cuisine tasting"
      ],
      inclusions: [
        "4 nights luxury accommodation",
        "Daily breakfast",
        "Airport transfers",
        "Guided city tour"
      ],
      itinerary: [
        "Day 1: Arrival and beach relaxation",
        "Day 2: North Goa sightseeing",
        "Day 3: Water sports and cruise",
        "Day 4: South Goa exploration",
        "Day 5: Departure"
      ]
    },
    {
      id: 2,
      title: "Goa Adventure Package",
      duration: "4 days & 3 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      rating: 4.2,
      reviews: 87,
      oldPrice: 24999,
      discount: 3000,
      price: 21999,
      description: "Thrilling adventure activities in Goa's beautiful landscapes.",
      highlights: [
        "Parasailing",
        "Scuba diving",
        "Trekking",
        "Bungee jumping"
      ]
    }
  ],
  andaman: [
    {
      id: 1,
      title: "Andaman Island Getaway",
      duration: "6 days & 5 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      rating: 4.7,
      reviews: 156,
      oldPrice: 39999,
      discount: 7000,
      price: 32999,
      description: "Explore the pristine beaches and marine life of Andaman."
    }
  ],
  tamilnadu: [
    {
      id: 1,
      title: "Tamilnadu Cultural Tour",
      duration: "7 days & 6 nights",
      image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
      rating: 4.4,
      reviews: 112,
      oldPrice: 34999,
      discount: 6000,
      price: 28999,
      description: "Discover the rich cultural heritage of Tamilnadu."
    }
  ]
};

// Destination Card Component
const DestinationCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(slug);
  };

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

// Package Card Component (extracted for reusability)
const PackageCard = ({ pkg, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${slug}/${pkg.id}`); // Navigate to package detail page
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleClick}
    >
      <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{pkg.title}</h2>
        <p className="text-gray-600">{pkg.duration}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★ {pkg.rating || 4.0}</span>
          <span className="text-gray-500 ml-2">({pkg.reviews || 0} reviews)</span>
        </div>
        <div className="mt-4">
          {pkg.oldPrice && (
            <>
              <span className="text-gray-500 line-through">₹{pkg.oldPrice}</span>
              <span className="text-green-600 ml-2">Save ₹{pkg.discount}</span>
            </>
          )}
          <div className="text-2xl font-bold mt-1">₹{pkg.price}</div>
        </div>
        <button 
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={(e) => {
            e.stopPropagation();
            // Handle direct booking if needed
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

// Destination Packages Component
const DestinationPackages = () => {
  const { slug } = useParams();
  const packages = destinationPackages[slug] || [];
  const destination = destinations.find(dest => dest.slug === slug);

  if (!destination) {
    return <div className="text-center py-12">Destination not found</div>;
  }

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <button 
        onClick={() => window.history.back()} 
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Destinations
      </button>
      
      <h1 className="text-3xl font-bold text-center mb-8">{destination.title} Packages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} slug={slug} />
        ))}
      </div>
    </div>
  );
};

// Main Domestic Destinations Component
const DomesticDestinations = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-red-600">Domestic Destinations</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <DestinationCard 
            key={dest.id} 
            title={dest.title} 
            image={dest.image} 
            slug={dest.slug} 
          />
        ))}
      </div>
    </div>
  );
};

// Main Routing Component
const DomesticPackageCards = () => {
  return (
    <Routes>
      <Route index element={<DomesticDestinations />} />
      <Route path=":slug" element={<DestinationPackages />} />
      <Route path=":slug/:packageId" element={<PackageCardDetail packageType="domestic" />} />
    </Routes>
  );
};

export default DomesticPackageCards;