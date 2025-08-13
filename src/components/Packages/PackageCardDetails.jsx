import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaStar, FaUtensils, FaHotel, FaBus, FaHiking } from "react-icons/fa";
import Footer from "../Footer";
import Navbar from "../Navbar";


const PackageCardDetail = () => {
  const { slug, packageId } = useParams();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [destination, setDestination] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data - should match with DomesticPackageCards.jsx
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

  const destinationPackages = {
    goa: [
      {
        id: 1,
        title: "Goa Beach Paradise Package",
        duration: "5 days & 4 nights",
        image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
        price: "₹12,999",
        rating: "4.5",
        reviews: "24",
      },
      {
        id: 2,
        title: "Goa Adventure Package",
        duration: "4 days & 3 nights",
        image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
        price: "₹10,999",
        rating: "4.2",
        reviews: "18",
      },
    ],
    andaman: [
      {
        id: 1,
        title: "Andaman Beach Paradise Package",
        duration: "5 days & 4 nights",
        image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
        price: "₹15,999",
        rating: "4.7",
        reviews: "32",
      },
    ],
    tamilnadu: [
      {
        id: 1,
        title: "Tamilnadu Cultural Package",
        duration: "6 days & 5 nights",
        image: "https://wallup.net/wp-content/uploads/2016/01/200866-nature-landscape-water.jpg",
        price: "₹13,999",
        rating: "4.3",
        reviews: "21",
      },
    ],
  };

  useEffect(() => {
    // Find the destination
    const foundDestination = destinations.find(dest => dest.slug === slug);
    if (!foundDestination) {
      navigate("/destination/domestic");
      return;
    }
    setDestination(foundDestination);

    // Find the package
    const packagesForDestination = destinationPackages[slug] || [];
    const foundPackage = packagesForDestination.find(pkg => pkg.id.toString() === packageId);
    
    if (!foundPackage) {
      navigate(`/destination/domestic/${slug}`);
      return;
    }
    
    // Enhance package data
    const enhancedPackage = {
      ...foundPackage,
      oldPrice: `₹${parseInt(foundPackage.price.replace('₹', '').replace(',', '')) + 2000}`,
      discount: '2000',
      highlights: ["Scenic views", "Comfortable stay", "Guided tours"],
      description: `Experience the best of ${foundDestination.title} with this amazing package.`,
      inclusions: [
        "Accommodation",
        "Daily breakfast",
        "Sightseeing as per itinerary",
        "Transportation"
      ],
      exclusions: [
        "Airfare/train tickets",
        "Personal expenses",
        "Anything not mentioned in inclusions"
      ],
      terms: [
        "30% advance to confirm booking",
        "Cancellation policy applies"
      ],
      cancellation: [
        "Free cancellation up to 3 days before the booking.",
        "50% charge for cancellations within 1 days.",
        "No refund for cancellations within 12 hours."
      ],
      paymentModes: [
        "UPI",
        "Credit/Debit Card",
        "Net Banking",
        "Wallets (e.g., Paytm, PhonePe)"
      ]
    };
    
    setPackageData(enhancedPackage);
  }, [slug, packageId, navigate]);

  if (!packageData || !destination) {
    return <div className="text-center py-20">Loading package details...</div>;
  }

  return (
    <div>
      <Navbar/>
      <div className="bg-gray-50">
        <section className="pt-28 pb-12">
          <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm">
              <Link to="/" className="text-[#3351e6] hover:underline">
                Home
              </Link>{" "}
              &gt;
              <Link
                to={`/destination/domestic`}
                className="text-[#3351e6] hover:underline"
              >
                {" "}
                Domestic
              </Link>{" "}
              &gt;
              <Link
                to={`/destination/domestic/${slug}`}
                className="text-[rgb(51,81,230)] hover:underline"
              >
                {" "}
                {destination.title}
              </Link>{" "}
              &gt;
              <span className="text-gray-600"> {packageData.title}</span>
            </div>

            {/* Package Header */}
            <div className="mb-8">
              <h1 className="text-[#261F43] text-4xl font-bold mb-2">
                {packageData.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[rgb(51,93,230)] mr-2" />
                  <span>{destination.title}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#] E69233mr-2" />
                  <span>{packageData.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaRupeeSign className="text-[#3351e6] mr-2" />
                  <span className="font-bold">{packageData.price}</span>
                </div>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#3351e6] text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-600">({packageData.reviews} reviews)</span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-12 relative">
              <div className="container mx-auto">
                <div className="Banner_featuredImage relative h-96 rounded-xl overflow-hidden">
                  <img
                    src={destination.image}
                    alt={packageData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-2/3">
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab("overview")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "overview"
                          ? "border-[#335ae6] text-[#3363e6]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setActiveTab("inclusions")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "inclusions"
                          ? "border-[#3336e6] text-[#3333e6]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Inclusions/Exclusions
                    </button>
                    <button
                      onClick={() => setActiveTab("terms")}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === "terms"
                          ? "border-[#3354e6] text-[#334be6]"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      Terms
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                  {activeTab === "overview" && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-[#261F43]">
                        Package Overview
                      </h2>
                      <p className="text-gray-600 mb-6">
                        {packageData.description}
                      </p>

                      <h3 className="text-xl font-semibold mb-3 text-[#334ee6]">
                        Highlights
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {packageData.highlights.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#335ae6] mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {activeTab === "inclusions" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#335de6]">
                          Inclusions
                        </h3>
                        <ul className="space-y-2">
                          {packageData.inclusions.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-[#3342e6] mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[#334be6]">
                          Exclusions
                        </h3>
                        <ul className="space-y-2">
                          {packageData.exclusions.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "terms" && (
                    <>
                      <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
                        Terms & Conditions
                      </h2>
                      <ul className="space-y-3">
                        {packageData.terms.map((term, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#334ee6] mr-2">•</span>
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
                  <h3 className="text-xl font-bold mb-4 text-[#261F43]">
                    Book This Package
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per person</span>
                      <span className="font-bold">{packageData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span>{packageData.duration}</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{packageData.price}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 px-6 py-3 bg-[#3351e6] text-white font-semibold rounded-lg hover:bg-[#2b39d5] transition flex items-center justify-center">
                      <FaPhone className="mr-2" /> Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PackageCardDetail;