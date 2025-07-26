import React from "react";
 
// Import images
import vietnamImg from "../../public/Tourpackageimage/image1.jpg";
import dubaiImg from "../../public/Tourpackageimage/image2.jpg";
import parisImg from "../..//public/Tourpackageimage/image3.jpg";
import kidsImg from "../../public/Tourpackageimage/image4.jpg";
import goaImg from "../../public/Tourpackageimage/image6.jpg";
import darjeelingImg from "../../public/Tourpackageimage/image5.jpg";
import kashmirImg from "../../public/Tourpackageimage/image7.jpg";

 
// Card Component
const DestinationCard = ({ title, description, image }) => {
  return (
    <div className="relative w-full sm:w-[300px] rounded-2xl overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-[350px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </div>
  );
};
 
const TourPackages = () => {
  const handleExploreClick = (section) => {
    alert(`You clicked Explore All for ${section}`);
  };
 
  return (
    <div className="px-6 py-10 space-y-20">
      {/* Centered Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">
          Top most tour package
        </h2>
      </div>
 
      {/* International Section */}
      <div className="flex flex-wrap gap-6 justify-center relative">
        {/* Label above first card */}
        <div className="absolute -top-8 left-4 sm:left-[18%]">
          <span className="text-red-600 font-semibold text-lg">International</span>
        </div>
 
        {/* Button above third card */}
        <div className="absolute -top-10 right-4 sm:right-[18%]">
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
            onClick={() => handleExploreClick("International")}
          >
            Explore All
          </button>
        </div>
 
        <DestinationCard
          title="Dubai"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={dubaiImg}
        />
        <DestinationCard
          title="Vietnam"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={vietnamImg}
        />
        <DestinationCard
          title="Paris"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={parisImg}
        />
       
      </div>
 
      {/* Domestic Section */}
      <div className="flex flex-wrap gap-6 justify-center relative">
        {/* Label above first card */}
        <div className="absolute -top-8 left-4 sm:left-[18%]">
          <span className="text-red-600 font-semibold text-lg">Domestic</span>
        </div>
 
        {/* Button above third card */}
        <div className="absolute -top-10 right-4 sm:right-[18%]">
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm"
            onClick={() => handleExploreClick("Domestic")}
          >
            Explore All
          </button>
        </div>
 
        <DestinationCard
          title="Goa"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={goaImg}
        />
        <DestinationCard
          title="Darjeeling"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={darjeelingImg}
        />
        <DestinationCard
          title="Kashmir"
          description="Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit"
          image={kashmirImg}
        />
      </div>
    </div>
  );
};
 
export default TourPackages;
 
 