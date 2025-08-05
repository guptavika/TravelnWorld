// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaStar, FaUtensils, FaHotel, FaBus, FaHiking } from "react-icons/fa";
// import Footer from "../Footer";
// import NavBar from "../NavBar";

// const PackageCardDetail = () => {
//   const { slug, packageId } = useParams();
//   const navigate = useNavigate();
//   const [packageData, setPackageData] = useState(null);
//   const [destination, setDestination] = useState(null);
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState("overview");

//   useEffect(() => {
//     // Find the destination
//     const foundDestination = destinations.find(dest => dest.slug === slug);
//     if (!foundDestination) {
//       navigate("/domestic");
//       return;
//     }
//     setDestination(foundDestination);

//     // Find the package in the destinationPackages object
//     const packagesForDestination = destinationPackages[slug] || [];
//     const foundPackage = packagesForDestination.find(pkg => pkg.id.toString() === packageId);
    
//     if (!foundPackage) {
//       navigate(`/domestic/${slug}`);
//       return;
//     }
    
//     // Enhance package data with some default values if they don't exist
//     const enhancedPackage = {
//       ...foundPackage,
//       rating: foundPackage.rating || '4.5',
//       reviews: foundPackage.reviews || '24',
//       oldPrice: foundPackage.oldPrice || `₹${parseInt(foundPackage.price.replace('₹', '')) + 2000}`,
//       discount: foundPackage.discount || '2000',
//       highlights: foundPackage.highlights || ["Scenic views", "Comfortable stay", "Guided tours"],
//       description: foundPackage.description || `Experience the best of ${foundDestination.title} with this amazing package.`,
//       inclusions: foundPackage.inclusions || [
//         "Accommodation",
//         "Daily breakfast",
//         "Sightseeing as per itinerary",
//         "Transportation"
//       ],
//       exclusions: foundPackage.exclusions || [
//         "Airfare/train tickets",
//         "Personal expenses",
//         "Anything not mentioned in inclusions"
//       ],
//       terms: foundPackage.terms || [
//         "30% advance to confirm booking",
//         "Cancellation policy applies"
//       ],
//       cancellation: foundPackage.cancellation || [
//         "Free cancellation up to 3 days before the booking.",
//         "50% charge for cancellations within 1 days.",
//         "No refund for cancellations within 12 hours."
//       ],
//       paymentModes: foundPackage.paymentModes || [
//         "UPI",
//         "Credit/Debit Card",
//         "Net Banking",
//         "Wallets (e.g., Paytm, PhonePe)"
//       ]
//     };
    
//     setPackageData(enhancedPackage);
//   }, [slug, packageId, navigate]);

//   if (!packageData || !destination) {
//     return <div className="text-center py-20">Loading package details...</div>;
//   }

//   return (
//     <div>
//       <NavBar />
//       <div className="bg-gray-50">
//         <section className="pt-28 pb-12">
//           <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8">
//             {/* Breadcrumb */}
//             <div className="mb-6 text-sm">
//               <Link to="/" className="text-[#E69233] hover:underline">
//                 Home
//               </Link>{" "}
//               &gt;
//               <Link
//                 to={`/domestic`}
//                 className="text-[#E69233] hover:underline"
//               >
//                 {" "}
//                 Domestic
//               </Link>{" "}
//               &gt;
//               <Link
//                 to={`/domestic/${slug}`}
//                 className="text-[#E69233] hover:underline"
//               >
//                 {" "}
//                 {destination.title}
//               </Link>{" "}
//               &gt;
//               <span className="text-gray-600"> {packageData.title}</span>
//             </div>

//             {/* Package Header */}
//             <div className="mb-8">
//               <h1 className="text-[#261F43] text-4xl font-bold mb-2">
//                 {packageData.title}
//               </h1>
//               <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="text-[#E69233] mr-2" />
//                   <span>{destination.title}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaCalendarAlt className="text-[#E69233] mr-2" />
//                   <span>{packageData.duration}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaRupeeSign className="text-[#E69233] mr-2" />
//                   <span className="font-bold">{packageData.price}</span>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-yellow-400" />
//                 ))}
//                 <span className="ml-2 text-gray-600">({packageData.reviews} reviews)</span>
//               </div>
//             </div>

//             {/* Image Gallery */}
//             <div className="mb-12 relative">
//               <div className="container mx-auto">
//                 <div className="Banner_featuredImage relative h-96 rounded-xl overflow-hidden">
//                   <span className="block overflow-hidden w-full h-full absolute inset-0">
//                     <img
//                       src={destination.image}
//                       alt={packageData.title}
//                       className="w-full h-full object-cover transition-all duration-300"
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         boxSizing: "border-box",
//                         padding: 0,
//                         border: "none",
//                         margin: "auto",
//                         display: "block",
//                         width: 0,
//                         height: 0,
//                         minWidth: "100%",
//                         maxWidth: "100%",
//                         minHeight: "100%",
//                         maxHeight: "100%",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Package Details */}
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Main Content */}
//               <div className="lg:w-2/3">
//                 {/* Tabs */}
//                 <div className="border-b border-gray-200 mb-6">
//                   <nav className="flex space-x-8">
//                     <button
//                       onClick={() => setActiveTab("overview")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "overview"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Overview
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("inclusions")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "inclusions"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Inclusions/Exclusions
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("terms")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "terms"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Terms
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("cancellation")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "cancellation"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Cancellation
//                     </button>
//                     <button
//                       onClick={() => setActiveTab("paymentModes")}
//                       className={`py-4 px-1 border-b-2 font-medium text-sm ${
//                         activeTab === "paymentModes"
//                           ? "border-[#E69233] text-[#E69233]"
//                           : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                       }`}
//                     >
//                       Payment Modes
//                     </button>
//                   </nav>
//                 </div>

//                 {/* Tab Content */}
//                 <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//                   {activeTab === "overview" && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-4 text-[#261F43]">
//                         Package Overview
//                       </h2>
//                       <p className="text-gray-600 mb-6">
//                         {packageData.description}
//                       </p>

//                       <h3 className="text-xl font-semibold mb-3 text-[#E69233]">
//                         Highlights
//                       </h3>
//                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
//                         {packageData.highlights.map((item, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className="text-[#E69233] mr-2">•</span>
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>

//                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaHotel className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Accommodation</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaUtensils className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Meals</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaBus className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Transport</span>
//                         </div>
//                         <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//                           <FaHiking className="text-3xl text-[#E69233] mb-2" />
//                           <span className="font-medium">Activities</span>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   {activeTab === "inclusions" && (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                       <div>
//                         <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
//                           Inclusions
//                         </h3>
//                         <ul className="space-y-2">
//                           {packageData.inclusions.map((item, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-[#E69233] mr-2">✓</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-semibold mb-4 text-[#E69233]">
//                           Exclusions
//                         </h3>
//                         <ul className="space-y-2">
//                           {packageData.exclusions.map((item, i) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-red-500 mr-2">✗</span>
//                               <span>{item}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   )}

//                   {activeTab === "terms" && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Terms & Conditions
//                       </h2>
//                       <ul className="space-y-3">
//                         {packageData.terms.map((term, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className="text-[#E69233] mr-2">•</span>
//                             <span>{term}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   {activeTab === "cancellation" && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Cancellation Policy
//                       </h2>
//                       <ul className="space-y-3">
//                         {packageData.cancellation.map((policy, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className="text-[#E69233] mr-2">•</span>
//                             <span>{policy}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}

//                   {activeTab === "paymentModes" && (
//                     <>
//                       <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                         Accepted Payment Modes
//                       </h2>
//                       <ul className="space-y-3">
//                         {packageData.paymentModes.map((mode, i) => (
//                           <li key={i} className="flex items-start">
//                             <span className="text-[#E69233] mr-2">•</span>
//                             <span>{mode}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </>
//                   )}
//                 </div>

//                 {/* Reviews Section */}
//                 <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//                   <h2 className="text-2xl font-bold mb-6 text-[#261F43]">
//                     Customer Reviews
//                   </h2>
//                   <div className="space-y-6">
//                     <div className="border-b pb-6">
//                       <div className="flex items-center mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <FaStar key={i} className="text-yellow-400" />
//                         ))}
//                         <span className="ml-2 font-medium">
//                           Amazing Experience!
//                         </span>
//                       </div>
//                       <p className="text-gray-600 mb-2">
//                         "This tour exceeded all our expectations. The hotels
//                         were excellent and the itinerary was perfectly planned."
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         - Rajesh Kumar, March 2023
//                       </p>
//                     </div>
//                     <div className="border-b pb-6">
//                       <div className="flex items-center mb-2">
//                         {[...Array(4)].map((_, i) => (
//                           <FaStar key={i} className="text-yellow-400" />
//                         ))}
//                         <FaStar className="text-gray-300" />
//                         <span className="ml-2 font-medium">Great Value</span>
//                       </div>
//                       <p className="text-gray-600 mb-2">
//                         "For the price we paid, this was an excellent package.
//                         The guide was knowledgeable and the transportation was
//                         comfortable."
//                       </p>
//                       <p className="text-sm text-gray-500">
//                         - Priya Sharma, January 2023
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar */}
//               <div className="lg:w-1/3">
//                 <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
//                   <h3 className="text-xl font-bold mb-4 text-[#261F43]">
//                     Book This Package
//                   </h3>
//                   <div className="space-y-4">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Price per person</span>
//                       <span className="font-bold">{packageData.price}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600">Duration</span>
//                       <span>{packageData.duration}</span>
//                     </div>
//                     <div className="pt-4 border-t">
//                       <div className="flex justify-between font-bold text-lg">
//                         <span>Total</span>
//                         <span>{packageData.price}</span>
//                       </div>
//                     </div>
//                     <button className="w-full mt-4 px-6 py-3 bg-[#E69233] text-white font-semibold rounded-lg hover:bg-[#d5822b] transition flex items-center justify-center">
//                       <FaPhone className="mr-2" /> Book Now
//                     </button>
//                     <button
//                       className="w-full mt-2 px-6 py-3 bg-white text-[#E69233] font-semibold rounded-lg border border-[#E69233] hover:bg-gray-50 transition flex items-center justify-center"
//                       onClick={() => navigate("/contact")}
//                     >
//                       Enquire Now
//                     </button>
//                   </div>

//                   <div className="mt-8">
//                     <h4 className="font-semibold mb-3">Need help booking?</h4>
//                     <p className="text-gray-600 mb-4">
//                       Call our customer services team on the number below to
//                       speak to one of our advisors who will help you with all of
//                       your holiday needs.
//                     </p>
//                     <div className="flex items-center text-[#E69233] font-medium">
//                       <FaPhone className="mr-2" /> 1800-121-4252
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PackageCardDetail;