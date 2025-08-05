import React from 'react';
import { useNavigate, Routes, Route, useParams } from 'react-router-dom';

// International Destinations data
const internationalDestinations = [
  {
    id: 1,
    title: "Bali",
    slug: "bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: 2,
    title: "Maldives",
    slug: "maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
  },
  {
    id: 3,
    title: "Dubai",
    slug: "dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
  },
  {
    id: 4,
    title: "Thailand",
    slug: "thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
  },
  // ... other international destinations
];

// International Package data
const internationalPackages = {
  bali: [
    {
      id: 1,
      title: "Bali Luxury Retreat",
      duration: "7 days & 6 nights",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      rating: 4.8,
      reviews: 124,
      oldPrice: 89999,
      discount: 15000,
      price: 74999,
    },
    {
      id: 1.2,
      title: "Bali Adventure Package",
      duration: "5 days & 4 nights",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      rating: 4.5,
      reviews: 98,
      oldPrice: 69999,
      discount: 10000,
      price: 59999,
    },
  ],
  maldives: [
    {
      id: 2,
      title: "Maldives Island Paradise",
      duration: "6 days & 5 nights",
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      rating: 4.9,
      reviews: 156,
      oldPrice: 129999,
      discount: 20000,
      price: 109999,
    },
  ],
  dubai: [
    {
      id: 3,
      title: "Dubai City & Desert Experience",
      duration: "5 days & 4 nights",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      rating: 4.7,
      reviews: 112,
      oldPrice: 79999,
      discount: 12000,
      price: 67999,
    },
    {
      id: 3.2,
      title: "Dubai Shopping Festival Package",
      duration: "4 days & 3 nights",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      rating: 4.6,
      reviews: 87,
      oldPrice: 65999,
      discount: 8000,
      price: 57999,
    },
  ],
  thailand: [
    {
      id: 4,
      title: "Thailand Cultural Tour",
      duration: "6 days & 5 nights",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526",
      rating: 4.4,
      reviews: 134,
      oldPrice: 59999,
      discount: 10000,
      price: 49999,
    },
  ],
  // Packages for other international destinations
};

// Destination Card Component (reused from domestic)
const DestinationCard = ({ title, image, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(slug); // Relative navigation
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

// Destination Packages Component (reused with international data)
const DestinationPackages = () => {
  const { slug } = useParams();
  const packages = internationalPackages[slug] || [];
  const destination = internationalDestinations.find(dest => dest.slug === slug);

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
          <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{pkg.title}</h2>
              <p className="text-gray-600">{pkg.duration}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">★ {pkg.rating}</span>
                <span className="text-gray-500 ml-2">({pkg.reviews} reviews)</span>
              </div>
              <div className="mt-4">
                <span className="text-gray-500 line-through">₹{pkg.oldPrice}</span>
                <span className="text-green-600 ml-2">Save ₹{pkg.discount}</span>
                <div className="text-2xl font-bold mt-1">₹{pkg.price}</div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main International Destinations Component
const InternationalDestinations = () => {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-600">International Destinations</h2>
        <p className="text-gray-600 mt-2">Explore our curated international travel packages</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {internationalDestinations.map((dest) => (
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
const InternationalPackageCards = () => {
  return (
    <Routes>
      <Route index element={<InternationalDestinations />} />
      <Route path=":slug" element={<DestinationPackages />} />
    </Routes>
  );
};

export default InternationalPackageCards;