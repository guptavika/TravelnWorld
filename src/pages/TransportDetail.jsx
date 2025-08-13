import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  Phone,
  MapPin,
  Clock,
  Share2,
  Heart,
  MessageCircle,
  Camera,
  User,
  ChevronRight,
} from "lucide-react";
import EnquiryFormPopup from "../forms/EnquiryFormPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const transportData = [
  {
    id: 1,
    img: "/images/ayodhya-darshan-yatra.jpg",
    name: "Ayodhya Darshan Yatra",
    phone: "+91 12345 67890",
    whatsapp: "+91 12345 67890",
    slug: "ayodhya-darshan-yatra",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/",
    description:
      "Ayodhya Darshan Yatra provides premium travel services for pilgrimage tours with comfortable transportation and experienced guides.",
    yearEstablished: 2010,
    website: "https://ayodhyadarshanyatra.com/",
    services: ["Pilgrimage Tours", "Car Rentals", "Hotel Bookings"],
    segments: ["Travel & Tourism", "Car Rental", "Tour Operators"],
    taxiServices: [
      "Airport Transfer",
      "Local Sightseeing",
      "Outstation Trips",
      "Wedding Car Rental",
    ],
    keyHighlights: [
      "24/7 Customer Support",
      "Experienced Drivers",
      "Well-maintained Vehicles",
      "Competitive Pricing",
      "GPS Enabled Cars",
    ],
    businessDescription:
      "Leading travel service provider in Ayodhya offering comprehensive tour packages and transportation solutions for pilgrims and tourists.",
    packages: [
      {
        name: "Ayodhya Darshan Package",
        description:
          "Complete darshan tour covering all major temples with AC transportation",
        price: "₹2,500",
      },
      {
        name: "Premium Pilgrimage Tour",
        description:
          "Luxury package with premium accommodation and guided tours",
        price: "₹5,000",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
    ],
    images: [
      "/ayodhya-temple-tour-bus.",
      "/luxury-car-rental-ayodhya.png",
      "/ayodhya-group-photo.png",
      "/ayodhya-temple-visit.png",
      "/ayodhya-tour-guide.png",
      "/comfortable-travel-bus.png",
    ],
  },
  {
    id: 2,
    img: "/VerifiedTranspoetsImg/RamRathTourAndTravels.jpg",
    name: "Ram Rath Tour and Travels",
    phone: "+91 12345 67890",
    slug: "ram-rath-tour-and-travels",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/",
    description:
      "Ayodhya Darshan Yatra provides premium travel services for pilgrimage tours with comfortable transportation and experienced guides.",
    yearEstablished: 2010,
    website: "https://ayodhyadarshanyatra.com/",
    services: ["Pilgrimage Tours", "Car Rentals", "Hotel Bookings"],
    segments: ["Travel & Tourism", "Car Rental", "Tour Operators"],
    taxiServices: [
      "Airport Transfer",
      "Local Sightseeing",
      "Outstation Trips",
      "Wedding Car Rental",
    ],
    keyHighlights: [
      "24/7 Customer Support",
      "Experienced Drivers",
      "Well-maintained Vehicles",
      "Competitive Pricing",
      "GPS Enabled Cars",
    ],
    
    businessDescription:
      "Leading travel service provider in Ayodhya offering comprehensive tour packages and transportation solutions for pilgrims and tourists.",
    packages: [
      {
        name: "Ayodhya Darshan Package",
        description:
          "Complete darshan tour covering all major temples with AC transportation",
        price: "₹2,500",
      },
      {
        name: "Premium Pilgrimage Tour",
        description:
          "Luxury package with premium accommodation and guided tours",
        price: "₹5,000",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
    ],
    images: [
      "/ayodhya-temple-tour-bus.png",
      "/luxury-car-rental-ayodhya.png",
      "/ayodhya-group-photo.png",
      "/ayodhya-temple-visit.png",
      "/ayodhya-tour-guide.png",
      "/comfortable-travel-bus.png",
    ],
  },
  {
    id: 3,
    img: "/VerifiedTranspoetsImg/TripathiCarBooking.jpg",
    name: "Tripathi Car Booking",
     phone: "+91 12345 67890",
    slug: "tripathi-car-booking",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/",
    description:
      "Ayodhya Darshan Yatra provides premium travel services for pilgrimage tours with comfortable transportation and experienced guides.",
    yearEstablished: 2010,
    website: "https://ayodhyadarshanyatra.com",
    services: ["Pilgrimage Tours", "Car Rentals", "Hotel Bookings"],
    segments: ["Travel & Tourism", "Car Rental", "Tour Operators"],
    taxiServices: [
      "Airport Transfer",
      "Local Sightseeing",
      "Outstation Trips",
      "Wedding Car Rental",
    ],
    keyHighlights: [
      "24/7 Customer Support",
      "Experienced Drivers",
      "Well-maintained Vehicles",
      "Competitive Pricing",
      "GPS Enabled Cars",
    ],
    
    businessDescription:
      "Leading travel service provider in Ayodhya offering comprehensive tour packages and transportation solutions for pilgrims and tourists.",
    packages: [
      {
        name: "Ayodhya Darshan Package",
        description:
          "Complete darshan tour covering all major temples with AC transportation",
        price: "₹2,500",
      },
      {
        name: "Premium Pilgrimage Tour",
        description:
          "Luxury package with premium accommodation and guided tours",
        price: "₹5,000",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
    ],
    images: [
      "/ayodhya-temple-tour-bus.png",
      "/luxury-car-rental-ayodhya.png",
      "/ayodhya-group-photo.png",
      "/ayodhya-temple-visit.png",
      "/ayodhya-tour-guide.png",
      "/comfortable-travel-bus.png",
    ],
  },
  {
    id: 4,
    img: "/VerifiedTranspoetsImg/DuniyaDekho.jpg",
    name: "Duniya Dekho Travels",
     phone: "+91 12345 67890",
    slug: "duniya-dekho-travels",
    location: "Jharkhandi, Rikabganj, Ayodhya",
    rating: 4.8,
    reviews: 120,
    verified: true,
    url: "https://ayodhyadarshanyatra.com/",
    description:
      "Ayodhya Darshan Yatra provides premium travel services for pilgrimage tours with comfortable transportation and experienced guides.",
    yearEstablished: 2010,
    website: "https://ayodhyadarshanyatra.com",
    services: ["Pilgrimage Tours", "Car Rentals", "Hotel Bookings"],
    segments: ["Travel & Tourism", "Car Rental", "Tour Operators"],
    taxiServices: [
      "Airport Transfer",
      "Local Sightseeing",
      "Outstation Trips",
      "Wedding Car Rental",
    ],
    keyHighlights: [
      "24/7 Customer Support",
      "Experienced Drivers",
      "Well-maintained Vehicles",
      "Competitive Pricing",
      "GPS Enabled Cars",
    ],
    
    businessDescription:
      "Leading travel service provider in Ayodhya offering comprehensive tour packages and transportation solutions for pilgrims and tourists.",
    packages: [
      {
        name: "Ayodhya Darshan Package",
        description:
          "Complete darshan tour covering all major temples with AC transportation",
        price: "₹2,500",
      },
      {
        name: "Premium Pilgrimage Tour",
        description:
          "Luxury package with premium accommodation and guided tours",
        price: "₹5,000",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
      {
        name: "Group Tour Package",
        description:
          "Special rates for group bookings with customized itinerary",
        price: "₹1,800",
      },
    ],
    images: [
      "/ayodhya-temple-tour-bus.png",
      "/luxury-car-rental-ayodhya.png",
      "/ayodhya-group-photo.png",
      "/ayodhya-temple-visit.png",
      "/ayodhya-tour-guide.png",
      "/comfortable-travel-bus.png",
    ],
  },
];

const reviewsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    date: "2 days ago",
    text: "Excellent service! The driver was very professional and the car was clean and comfortable. Highly recommended for Ayodhya darshan.",
    tags: ["Professional Service", "Clean Vehicle", "Punctual"],
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 4,
    date: "1 week ago",
    text: "Good experience overall. The tour was well organized and the guide was knowledgeable about all the temples.",
    tags: ["Knowledgeable Guide", "Well Organized"],
  },
  {
    id: 3,
    name: "Amit Singh",
    rating: 5,
    date: "2 weeks ago",
    text: "Amazing service! They arranged everything perfectly for our family trip. Will definitely book again.",
    tags: ["Family Friendly", "Perfect Arrangement", "Reliable"],
  },
  {
    id: 4,
    name: "Sunita Devi",
    rating: 4,
    date: "3 weeks ago",
    text: "Very satisfied with the service. The car was comfortable and the driver helped us with all temple visits.",
    tags: ["Comfortable", "Helpful Driver"],
  },
   {
    id: 4,
    name: "Sunita Devi",
    rating: 4,
    date: "3 weeks ago",
    text: "Very satisfied with the service. The car was comfortable and the driver helped us with all temple visits.",
    tags: ["Comfortable", "Helpful Driver"],
  },
   {
    id: 4,
    name: "Sunita Devi",
    rating: 4,
    date: "3 weeks ago",
    text: "Very satisfied with the service. The car was comfortable and the driver helped us with all temple visits.",
    tags: ["Comfortable", "Helpful Driver"],
  },
];

export default function TransportDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [newReview, setNewReview] = useState({ name: "", rating: 5, text: "" });
  const [reviews, setReviews] = useState(reviewsData);
  const [uploadedImages, setUploadedImages] = useState([]);

  const transport = transportData.find((t) => t.slug === slug);

  if (!transport) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Transport not found</h1>
          <button
            onClick={() => navigate("/verified-transports")}
            className="text-blue-600 hover:underline"
          >
            Back to Verified Transports
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    "Overview",
    "Photos",
    "Price List",
    "Quick Info",
    "Services",
    "Reviews",
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      const review = {
        id: reviews.length + 1,
        name: newReview.name,
        rating: newReview.rating,
        date: "Just now",
        text: newReview.text,
        tags: ["Recent Review"],
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: "", rating: 5, text: "" });
    }
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImages((prev) => [...prev, event.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b px-4 py-3">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <button onClick={() => navigate("/")} className="hover:text-blue-600">
            Haridwar
          </button>
          <ChevronRight className="w-4 h-4" />
          <button
            onClick={() => navigate("/car-rental")}
            className="hover:text-blue-600"
          >
            Car Rental In Haridwar
          </button>
          <ChevronRight className="w-4 h-4" />
          <button
            onClick={() => navigate("/car-rental-har-ki-pauri")}
            className="hover:text-blue-600"
          >
            Car Rental in Har Ki Pauri
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">{transport.name}</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Header */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {transport.verified && (
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-2">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                    <h1 className="text-2xl font-semibold text-gray-900">
                      {transport.name}
                    </h1>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    {transport.services.map((service, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-blue-600 hover:underline"
                      >
                        {service}
                      </a>
                    ))}
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Heart className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold flex items-center">
                        {transport.rating}{" "}
                        <Star className="w-3 h-3 ml-1 fill-current" />
                      </div>
                      <span className="ml-2 text-gray-600">
                        {transport.reviews} Ratings
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {transport.verified && (
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          Verified
                        </span>
                      )}
                      {transport.claimed && (
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                          Claimed
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{transport.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-green-600">
                        {transport.openingHours}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>
                        {new Date().getFullYear() - transport.yearEstablished}{" "}
                        Years in Business
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">💬</span>
                      <span>
                        "{transport.keyHighlights[0]}" - {transport.reviews}{" "}
                        Suggestions
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Deals In:</span>{" "}
                      {transport.segments.join(", ")}
                    </div>
                  </div>
                </div>

                {/* <div className="ml-6">
                  <div className="text-center mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      Click to Rate
                    </div>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer"
                        />
                      ))}
                    </div>
                  </div> */}
                
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  {transport.phone}
                </button>
                <EnquiryFormPopup
                  trigger={
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <div>
                        <div>Enquire Now</div>
                        <div className="text-xs opacity-90">
                          Responds in 2 Hours
                        </div>
                      </div>
                    </button>
                  }
                />
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center font-semibold hover:bg-gray-50">
                  WhatsApp
                </button>
                <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex overflow-x-auto border-b">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600 bg-blue-50"
                        : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === "Overview" && (
                  <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold mb-4">
                      {transport.name} in {transport.location}
                    </h2>
                    <p className="text-gray-700 mb-6">
                      {transport.businessDescription}
                    </p>

                    <h3 className="text-lg font-semibold mb-3">
                      About Our Services
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We provide comprehensive travel solutions with a focus on
                      comfort, safety, and customer satisfaction. Our
                      experienced team ensures that every journey is memorable
                      and hassle-free.
                    </p>

                    <h3 className="text-lg font-semibold mb-3">
                      Key Highlights
                    </h3>
                    <ul className="space-y-2">
                      {transport.keyHighlights?.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "Photos" && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">Photos</h2>
                      <label className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer hover:bg-blue-700">
                        <Camera className="w-4 h-4 mr-2" />
                        Upload Photos
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {/* Display uploaded images first */}
                      {uploadedImages.map((image, index) => (
                        <div
                          key={`uploaded-${index}`}
                          className="aspect-square rounded-lg overflow-hidden relative"
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs">
                            New
                          </div>
                        </div>
                      ))}

                      {/* Display existing images */}
                      {transport.images?.map((image, index) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden"
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>

                    {uploadedImages.length === 0 &&
                      (!transport.images || transport.images.length === 0) && (
                        <div className="text-center py-12 text-gray-500">
                          <Camera className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                          <p>
                            No photos uploaded yet. Be the first to share
                            photos!
                          </p>
                        </div>
                      )}
                  </div>
                )}

                {activeTab === "Price List" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Price List</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {transport.packages.map((pkg, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <h3 className="font-semibold text-lg mb-2">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {pkg.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="text-lg font-semibold text-green-600">
                              {pkg.price}{" "}
                              <span className="text-sm text-gray-500">
                                onwards
                              </span>
                            </div>
                          </div>
                          <button className="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Enquire Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "Quick Info" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Quick Information
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <div className="text-gray-600 mb-1">
                          Year of Establishment
                        </div>
                        <div className="font-semibold">
                          {transport.yearEstablished}
                        </div>
                      </div>
                      {transport.website && (
                        <div>
                          <div className="text-gray-600 mb-1">Website</div>
                          <div className="font-semibold">
                            <a
                              href={transport.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {transport.website}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "Services" && (
                  <div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Segment</h3>
                        <div className="flex flex-wrap gap-2">
                          {transport.segments.map((segment, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                              {segment}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Seating Capacity
                        </h3>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          Car Seating
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">
                          Taxi Services
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {transport.taxiServices.map((service, index) => (
                            <span
                              key={index}
                              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "Reviews" && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-semibold">
                        Reviews & Ratings
                      </h2>
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-2xl font-bold">
                          {transport.rating}
                        </div>
                        <div>
                          <div className="text-lg font-semibold">
                            {transport.reviews} Ratings
                          </div>
                          <div className="text-sm text-gray-600">
                            Based on {transport.reviews} customer reviews
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add Review Form */}
                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                      <h3 className="text-lg font-semibold mb-4">
                        Write a Review
                      </h3>
                      <form onSubmit={handleReviewSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            value={newReview.name}
                            onChange={(e) =>
                              setNewReview({
                                ...newReview,
                                name: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter your name"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rating
                          </label>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                type="button"
                                onClick={() =>
                                  setNewReview({ ...newReview, rating: star })
                                }
                                className={`p-1 ${
                                  star <= newReview.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              >
                                <Star className="w-6 h-6 fill-current" />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Your Review
                          </label>
                          <textarea
                            value={newReview.text}
                            onChange={(e) =>
                              setNewReview({
                                ...newReview,
                                text: e.target.value,
                              })
                            }
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Share your experience..."
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium"
                        >
                          Submit Review
                        </button>
                      </form>
                    </div>

                    {/* Reviews List */}
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {review.name}
                                </h4>
                                <span className="text-sm text-gray-500">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">
                                  ({review.rating}/5)
                                </span>
                              </div>
                              {review.tags && review.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {review.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <p className="text-gray-700">{review.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Contact 
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" />
                  <a
                    href={`tel:${transport.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {transport.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-600">{transport.fullAddress}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-gray-400" />
                  <span className="text-green-600">
                    {transport.openingHours}
                  </span>
                </div>
                {transport.website && (
                  <div className="flex items-center">
                    <span className="w-4 h-4 mr-3 text-gray-400">🌐</span>
                    <a
                      href={transport.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded flex items-center">
                  <span className="mr-3">📍</span>
                  Get Directions
                </button>
                <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded flex items-center">
                  <span className="mr-3">📧</span>
                  Send Enquiry by Email
                </button>
                <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded flex items-center">
                  <span className="mr-3">📱</span>
                  Get info via SMS/Email
                </button>
                <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded flex items-center">
                  <Share2 className="w-4 h-4 mr-3" />
                  Share
                </button>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">
                Get the List of Travel Agents
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                We'll send you contact details in seconds for free
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What type of destination would you like to visit?
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="destination"
                        value="domestic"
                        className="mr-2"
                        defaultChecked
                      />
                      Domestic
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="destination"
                        value="international"
                        className="mr-2"
                      />
                      International
                    </label>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Send Enquiry
                </button>
              </div>
            </div>

            {/* Also Listed In */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Also listed in</h3>
              <div className="space-y-2">
                {transport.services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-blue-600 hover:underline text-sm"
                  >
                    {service}
                  </a>
                ))}
                <a
                  href="#"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Taxi Services
                </a>
                <a
                  href="#"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Tour Operators For Chardham
                </a>
                <a
                  href="#"
                  className="block text-blue-600 hover:underline text-sm"
                >
                  Bus Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
