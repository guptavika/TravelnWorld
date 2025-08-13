import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 
const BannerSlider = () => {
  const banners = [
    {
      id: 1,
      title: "Club Mahindra",
      subtitle: "We Cover India, You Discover India",
      btnText: "Know more",
      link: "https://www.clubmahindra.com/",
      bannerImage:
        "https://travelnworld.com/Images/Homepageimages/club_mahindra.png",
    },
    {
      id: 2,
      title: "SOTC",
      subtitle: "Tailored Itineraries to Suit Your Preferences",
      btnText: "Know more",
      link: "https://www.sotc.in/",
      bannerImage:
        "https://travelnworld.com/Images/Homepageimages/sotc.png",
    },
    {
      id: 3,
      title: "Kesari Tours",
      subtitle: "Experience the finest resorts and services",
      btnText: "Know more",
      link: "https://www.kesari.in/",
      bannerImage:
        "https://travelnworld.com/Images/Homepageimages/kesari.png",
    },
  ];
 
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="flex w-full">
              {/* Left Section with Banner Image */}
              <div className="w-3/4">
                <img
                  src={banner.bannerImage}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              </div>
 
              {/* Right Section with Title and Button */}
              <div className="bg-purple-900 text-white flex flex-col justify-center items-center px-10 w-1/4">
                <h2 className="text-xl mb-3">{banner.title}</h2>
                <button
                  onClick={() => window.open(banner.link, "_blank")}
                  className="bg-white text-black font-semibold px-5 py-2 rounded-full"
                >
                  {banner.btnText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
 
export default BannerSlider;
 
 