const internationalDestinations = [
  {
    title: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Eiffel Tower
  },
  {
    title: "New York",
    image: "https://images.unsplash.com/photo-1549921296-3a6b60b8ed26", // NYC skyline
  },
  {
    title: "Tokyo",
    image: "https://images.unsplash.com/photo-1526481280691-75a5b1c53d53", // Tokyo night
  },
  {
    title: "Dubai",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2", // Dubai skyline
  },
  {
    title: "London",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad", // London Eye
  },
  {
    title: "Sydney",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d5", // Opera House
  },
  {
    title: "Singapore",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Marina Bay
  },
  {
    title: "Rome",
    image: "https://images.unsplash.com/photo-1583270310849-df1a29f7e8af", // Colosseum
  },
  {
    title: "Bali",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Rice terraces
  },
  {
    title: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // Overwater villas
  },
];

const DestinationCard = ({ title, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  </div>
);

const InternationalDestinations = () => {
  const handleExploreClick = (type) => {
    console.log("Explore clicked:", type);
    // Add navigation or filtering logic here
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Centered Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700">International Destinations</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {internationalDestinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </div>
  );
};

export default InternationalDestinations;
