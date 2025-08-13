// src/data/destinations.js
export const destinations = [
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

export const destinationPackages = {
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
    // ... other packages
  ],
  // ... other destinations
};