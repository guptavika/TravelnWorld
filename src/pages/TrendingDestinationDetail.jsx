import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const detailsMap = {
  "uttar-pradesh": {
  state: "Uttar Pradesh",
  tagline: "",
  description:
    "Uttar Pradesh has cultural and historic sites like the Taj Mahal, Varanasi ghats, Mathura, and Ayodhya Ram Mandir.",
  image:
    "https://varanasi.tourismindia.co.in/images/places-to-visit/headers/dashashwamedh-ghat-varanasi-tourism-entry-fee-timings-holidays-reviews-header.jpg",
  topPlaces: [
    // {
    //   name: "Taj Mahal",
    //   subtitle: "Agra",
    //   img: "https://images.unsplash.com/photo-1549893079-5e3b5dca9d3e?w=400&auto=format&fit=crop",
    // },
    {
      name: "Varanasi Ghats",
      subtitle: "The most iconic ghat known for the grand evening aarti with fire lamps, chants, and spiritual energy.Dashashwamedh Ghat ,Assi Ghat – Sunrise Peace,. Kashi Vishwanath Temple – Jyotirlinga Shrine, Manikarnika Ghat, Ramnagar Fort.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/76/DASHASHWAMEDH_GHAT%2C_VARANASI.jpg",
    },
    {
      name: "Ayodhya Ram Mandir",
      subtitle: "The Ram Mandir, consecrated in a grand ceremony in January 2024 and further expanded during Ganga Dussehra in June 2025, has become a major pilgrimage epicenter. The complex is part of a larger urban transformation, including upgraded transport and hospitality infrastructure.blog.	Ayodhya – Saryu River ghats, Ram Mandir complex, evening rituals.",
      img: "https://www.indianjourney.com/wp-content/uploads/2024/12/ayodhya-700x450.jpg",
    },
    {
      name: "Mathura",
      subtitle: "Celebrated as Lord Krishna’s birthplace, these cities are vibrant with temples like Krishna Janmabhoomi and Banke Bihari. Festivals like Holi bring history and devotion to life through color and music.Mathura & Vrindavan – Major Krishna temples, evening aarti.",
      img: "https://mysimplesojourn.com/wp-content/uploads/2020/01/Feature.jpg",
    },
  ],
},
"uttarakhand": {
  state: "Uttara Khand",
  tagline: "Rishikesh, Hariwar,Khedarnath, Nilkhante",
  description:
    "Uttara Khand has cultural and historic sites like the Rishikesh, Hariwar, Khedarnath, and Nilkhante.",
  image:
    "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Rishikesh",
      subtitle: "A renowned spiritual town on the Ganges, considered the Yoga Capital of the World. Known for its serene ashrams, ancient temples, and pilgrimage significance.Key attractions include Triveni Ghat, Lakshman Jhula, Ram Jhula, Parmarth Niketan Ashram—famous for its evening Ganga Aarti and peaceful ambiance.",
      img: "https://img.peapix.com/fe195c27c4d741ad9f7370debe42f4ee_1280.jpg",
    },
    {
      name: "Harkipidhi  Hariwar",
      subtitle: "One of India’s seven sacred pilgrimage cities, perched on the banks of the holy Ganges. Known for its vibrant spiritual culture, ancient temples, and the devotional Ganga Aarti at Har Ki Pauri and other ghats.Also home to Mansa Devi Temple, situated atop the Sivalik Hills famed for fulfilling devotees’ ",
      img: "https://images.unsplash.com/photo-1511754863001-18d44abd0a93?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    {
      name: " Khedarnath",
      subtitle: "Kedarnath Temple is located in the Rudraprayag district of Uttarakhand, India, perched at approximately 3,583 m (11,755 ft) above sea level, near the Chorabari Glacier and on the banks of the Mandakini River",
      img: "https://images.pexels.com/photos/15031440/pexels-photo-15031440.jpeg?cs=srgb&dl=pexels-alok-kumar-273007-15031440.jpg&fm=jpg",
    },
    {
      name: "Nilkhante",
      subtitle: "Krishna Janmabhoomi",
      img: "https://images.unsplash.com/photo-1554774853-7e3e5b787b5b?w=400&auto=format&fit=crop",
    },
  ],
},

// rajasthan: {
//   state: "Rajasthan",
//   tagline: "Palaces, Forts, and Desert Safari",
//   description:
//     "Rajasthan is famous for its royal heritage, forts, palaces, and the Thar desert experience.",
//   image:
//     "https://images.unsplash.com/photo-1580674285056-f64e6b1ba859?w=800&auto=format&fit=crop",
//   topPlaces: [
//     {
//       name: "Jaipur",
//       subtitle: "Amber Fort, City Palace",
//       img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Udaipur",
//       subtitle: "City of Lakes",
//       img: "https://images.unsplash.com/photo-1611605698335-8b3c09a3c5b5?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Jaisalmer",
//       subtitle: "Golden Fort, Desert Safari",
//       img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Jodhpur",
//       subtitle: "Mehrangarh Fort",
//       img: "https://images.unsplash.com/photo-1555400038-63f3c7982cf0?w=400&auto=format&fit=crop",
//     },
//   ],
// },

delhi: {
  state: "Delhi",
  tagline: "Capital of India, monuments & culture",
  description:
    "Delhi is a historic capital with Akshardham Temple, Lal kila, and a ISKCON Temple.",
  image:
    "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Akshardham Temple",
      subtitle: "Located in East Delhi beside the Yamuna, Swaminarayan Akshardham is a masterful blend of spiritual devotion, traditional craftsmanship, and cultural exhibitions, making it a must-visit for couples seeking a romantic and reflective experience.",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/New_Delhi_Temple.jpg",
    },
    {
      name: "Lal kila",
      subtitle: "The grand Red Fort (Lal Qila) framed in vivid daylight showcases its impressive Mughal red sandstone structure, lush gardens, and historic ramparts—great for architectural photography and heritage ambience.",
      img: "https://images.unsplash.com/photo-1713729991304-d0b6c328560e?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    {
      name: "India Gate ",
      subtitle: "A 42 m-high war memorial inscribed with names of ~13,300 soldiers from World War I and the Third Anglo-Afghan War, with Amar Jawan Jyoti flame burning beneat.",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-1-attr-hero?qlt=82&ts=1742159856441",
    },
    {
      name: "Lotus Temple",
      subtitle: "Architectural Marvel",
      img: "https://images.unsplash.com/photo-1618835968059-5c8c7e5f0d95?w=400&auto=format&fit=crop",
    },
  ],
},

"madhya-pradesh": {
  state: "Madhya Pradesh",
  tagline: "Temples, Stupas & Wildlife",
  description:
    "Madhya Pradesh offers UNESCO sites like Khajuraho and Sanchi, along with tiger reserves and natural beauty.",
  image:
    "https://images.unsplash.com/photo-1601913450315-df687a0a13db?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Khajuraho Temples",
      subtitle: "A UNESCO World Heritage Site, the Khajuraho Temples in Madhya Pradesh are world-famous for their exquisite stone carvings, sensual sculptures, and majestic Nagara-style architecture. Built by the Chandela dynasty in the 10th–12th centuries, these temples celebrate divine love, art, and spirituality in perfect harmony.",
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/08/Best-Places-to-Visit-in-Madhya-Pradesh.jpg",
    },
    {
      name: "Bhedaghat (Jabalpur)",
      subtitle: "The Marble Rocks: A spectacular gorge carved by the Narmada River through pure white marble—stretching about 8 km and offering stunning reflections and geological wonder.Shutterstock,Dhuandhar Falls: A dramatic 30-meter waterfall emerging from the gorge, creating misty “smoke-like” cascades and roaring ambiance.",
      img: "https://www.shutterstock.com/image-photo/dhuandhar-dhuadhar-waterfalls-bheraghat-jabalpur-600nw-1098389975.jpg",
    },
    {
      name: "Sanchi Stupa ",
      subtitle: " The oldest Buddhist stone monument in India, featuring elaborately carved gateways and serene ambiance. Commissioned by Ashoka in the 3rd century BCE",
      img: "https://static.vecteezy.com/system/resources/previews/042/590/604/non_2x/great-stupa-sanchi-madhya-pradesh-india-photo.jpg",
    },
  ],
},

maharashtra: {
  state: "Maharashtra",
  tagline: "Gateway of India, Ajanta-Ellora, hill stations",
  description:
    "Maharashtra is known for the Gateway of India, Ajanta & Ellora caves, and scenic hill stations like Mahabaleshwar.",
  image:
    "https://images.unsplash.com/photo-1583961892165-6744a3b0f7c2?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Ajanta & Ellora Caves",
      subtitle: "These UNESCO World Heritage sites showcase remarkable rock-cut architecture, including Buddhist murals and the monolithic Kailasa Temple carved from a single rock. A must-visit for lovers of history and art.",
      img: "https://www.holidify.com/images/bgImages/AJANTA-AND-ELLORA-CAVES.jpg",
    },
    {
      name: "Gateway of India",
      subtitle: "A striking Indo‑Saracenic arch completed in 1924, overlooking the Arabian Sea in South Mumbai. Built to commemorate the 1911 royal visit of King George V and Queen Mary, this 26-meter basalt structure is a symbol of Mumbai’s colonial history and modern identity",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Historical_Gateway_Of_India.jpg",
    },
    {
      name: "Shirdi",
      subtitle: "Located in Shirdi, Maharashtra, the Samadhi Mandir houses the eternal resting place of Sai Baba, built in the early 20th century with white marble and intricate motifs. Devotees experience daily Aarti ceremonies beside the marble Samadhi while immersed in chants of faith and devotion",
      img: "https://saibabaimages.com/wp-content/uploads/2022/02/Samadhi-Mandir-Sai-Baba-Photo-91-1024x683.jpg",
    },
    {
      name: "Mahabaleshwar",
      subtitle: "Here’s a highlighted overview of Mahabaleshwar, one of Maharashtra’s most romantic and scenic hill stations—perfect for honeymooners and nature lovers:",
      img: "https://www.holidify.com/images/cmsuploads/compressed/Marleshwar_waterfalls1_20181203211437_20181203211513.JPG",
    },
  ],
},

goa: {
  state: "Goa",
  tagline: "Beaches, nightlife, and Portuguese heritage",
  description:
    "Sunny shoreline with golden sands, palm trees, and gentle waves—ideal for beach walks, water sports, and vibrant nightlife. Known as one of Goa’s most energetic and visually inviting beaches.",
  image:
    "https://images.unsplash.com/photo-1593620529462-619501b0f7f1?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnYSUyMGJlYWNofGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  topPlaces: [
    {
      name: " Baga Beach",
      subtitle: "Sunny shoreline with golden sands, palm trees, and gentle waves—ideal for beach walks, water sports, and vibrant nightlife. Known as one of Goa’s most energetic and visually inviting beaches.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&auto=format&fit=crop",
    },
    {
      name: " Baga Shoreline (another beach angle)",
      subtitle: "A scenic stretch lined with beach shacks, lounge areas, and sun umbrellas—capturing the lively ambiance and relaxed coastal vibe perfect for couples. ",
      img: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnYSUyMGJlYWNofGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
    },
    {
      name: "Basilica of Bom Jesus, Old Goa",
      subtitle: "A striking UNESCO heritage architecture in the evening sun, embodying Goa’s Portuguese legacy and serene spiritual atmosphere via its ornate façade.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Front_Elevation_of_Basilica_of_Bom_Jesus.jpg",
    },
  ],
},

kerala: {
  state: "Kerala",
  tagline: "God’s Own Country",
  description:
    "Kerala is known Sree Padmanabhaswamy Temple – Thiruvananthapuram, Sabarimala Sree Ayyappa Temple – Pathanamthitta District, Vadakkunnathan Temple – Thrissur, and pristine beaches.",
  image:
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: " Sree Padmanabhaswamy Temple – Thiruvananthapuram",
      subtitle: "Vishnu	Architecture & treasure vaults",
      img: "https://www.keralabackwater.com/wp-content/uploads/2016/08/Sree-Padmanabhaswamy-Temple-1-1.jpg",
    },
    {
      name: "Vadakkunnathan Temple – Thrissur",
      subtitle: "Ayyappa	Pilgrimage & annual rituals",
      img: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/01/Feature-Most-Famous-Temples-in-Kerala.jpg",
    },
    {
      name: "Sabarimala Sree Ayyappa Temple – Pathanamthitta District",
      subtitle: "Shiva	Historic temple & cultural festival",
      img: "https://www.holidify.com/images/cmsuploads/compressed/Sree_Padmanabhaswamy_Temple_20190404123945.JPG",
    },
  ],
},

"tamil-nadu": {
  state: "Tamil Nadu",
  tagline: "Temples and heritage",
  description:
    "Tamil Nadu is known for its grand temples Madurai, Kanyakumari, Adam’s Bridge,Rameswaram,Mahabalipuram and  Thanjavur.",
  image:
    "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  topPlaces: [
    {
      name: "Adam’s Bridge",
      subtitle: "Dhanushkodi Beach and Adam’s Bridge viewpoint Climb Mount Gandhamadana for sunset across the sea",
      img: "https://www.triptipedia.com/tip/img/pSlfdUehX.jpg",
    },
    {
      name: "Rameswaram",
      subtitle: "Spiritual pilgrimage, Ramayana heritage, scenic coastal beauty, architectural marvels, serene beaches, unique island charm blending devotion, history, and nature.",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/1-rameswaram-temple-rameswaram-tamilnadu-hero-1?qlt=82&ts=1727162277643",
    },
    {
      name: "Kanyakumari",
      subtitle: "	Confluence of seas, memorials, sunsets	Scenic, spiritual, historic",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/vivekananda-rock-memorial-kanyakumari-tamil-nadu-hero?qlt=82&ts=1726674548708",
    },
  ],
},

karnataka: {
  state: "Karnataka",
  tagline: "Heritage, palaces, and nature",
  description:
    "Karnataka is known for Mysore Palace, Hampi ruins, coffee plantations, and scenic Coorg.",
  image:
    "https://images.unsplash.com/photo-1628595351029-12afc80dfc8e?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Mysore Palace",
      subtitle: "	Royal palace, gardens, rich history, cultural festivals",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f2/3f/bb/caption.jpg?w=1400&h=-1&s=1",
    },
    {
      name: "Hampi",
      subtitle: "Ancient temple ruins, archaeological marvels, cultural legacy",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Hampi_virupaksha_temple.jpg",
    },
    {
      name: "Nandi Hills",
      subtitle: "Scenic views & hilltop trails	Short escapes & sunrise seekers",
      img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqeL6NW88VoPMYQFl1r1kvDNrp5eLnKFOXwg1ZC6msGfV_JhzU7nY-vznYi1nU6YdcRXvVuvLbFMz6DpkKvyQN0Uj-YKogFSWTHSMaxUwgzlmW_TMgF1HknShRWynWlM3iUe2LeOw=s1360-w1360-h1020-rw",
    },
  ],
},

"himachal-pradesh": {
  state: "Himachal Pradesh",
  tagline: "",
  description:
    "Himachal Pradesh offers popular hill stations and spiritual getaways. Shimla,Manali,Dharamshala.",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Shimla",
      subtitle: "Colonial architecture, Mall Road, Ridge views	Family holidays and cultural exploration",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28101551/Top-10-tourist-places-to-visit-in-Himachal-Pradesh.jpg",
    },
    {
      name: "Manali(Kullu–Manali region)",
      subtitle: "Snowy peaks, adventure activities, mountain passes	Adventure seekers and nature lovers",
      img: "https://2.bp.blogspot.com/-KZLOzW8boaw/VxXzmpO-NAI/AAAAAAAAJ4U/OqSoUQ3aUNs1kD3MRWt3SThUWQxkXXhEgCLcB/s640/Christ-Church-Shimla.jpg",
    },
    {
      name: "Dharamshala/McLeod Ganj",
      subtitle: "Tibetan spiritual culture, serene trails, waterfalls	Spiritual seekers, peaceful retreats",
      img: "https://www.anubhavvacations.in/blog/wp-content/uploads/2024/12/top-5-tourist-places-himachal-pradesh.webp",
    },
  ],
},


"himachalpradesh": {
  state: "Himachal Pradesh",
  tagline: "Hills, valleys, and spirituality",
  description:
    "Himachal Pradesh offers popular hill stations and spiritual getaways.",
  image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Shimla",
      subtitle: "Colonial architecture, Mall Road, Ridge views	Family holidays and cultural exploration",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/07/28101551/Top-10-tourist-places-to-visit-in-Himachal-Pradesh.jpg",
    },
    {
      name: "Manali(Kullu–Manali region)",
      subtitle: "Snowy peaks, adventure activities, mountain passes	Adventure seekers and nature lovers",
      img: "https://2.bp.blogspot.com/-KZLOzW8boaw/VxXzmpO-NAI/AAAAAAAAJ4U/OqSoUQ3aUNs1kD3MRWt3SThUWQxkXXhEgCLcB/s640/Christ-Church-Shimla.jpg",
    },
    {
      name: "Dharamshala/McLeod Ganj",
      subtitle: "Tibetan spiritual culture, serene trails, waterfalls	Spiritual seekers, peaceful retreats",
      img: "https://www.anubhavvacations.in/blog/wp-content/uploads/2024/12/top-5-tourist-places-himachal-pradesh.webp",
    },
  ],
},

// "jammu-kashmir": {
//   state: "Jammu Kashmir Ladakh",
//   tagline: "Paradise on Earth",
//   description:
//     "J&K and Ladakh offer breathtaking beauty with lakes, mountains, and monasteries.",
//   image:
//     "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&auto=format&fit=crop",
//   topPlaces: [
//     {
//       name: "Srinagar",
//       subtitle: "Dal Lake",
//       img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Gulmarg",
//       subtitle: "Ski Resort",
//       img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Leh-Ladakh",
//       subtitle: "Adventure & Monasteries",
//       img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&auto=format&fit=crop",
//     },
//   ],
// },

"west-bengal": {
  state: "West Bengal",
  tagline: "Tea gardens, culture, and history",
  description:
    "West Bengal is home to Darjeeling, Sundarbans, and colonial heritage in Kolkata.",
  image:
    "https://images.unsplash.com/photo-1599661046289-2c23c5bcacae?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: " Kolkata",
      subtitle: "Colonial architecture, temples, museums	Culture lovers & heritage explorers.",
      img: "https://www.fabhotels.com/blog/wp-content/uploads/2019/12/2-days-trip-to-kolkata-600.jpg",
    },
    {
      name: "Bishnupur",
      subtitle: "Terracotta artistry, ancient temples	Art and architecture aficionados.",
      img: "https://www.trawell.in/images/pics/west-bengal_best_main.jpg",
    },
    {
      name: "Cooch Behar",
      subtitle: "Royal palace, historic town	Heritage lovers & offbeat travelers.",
      img: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/01071016/west-bengal-places-to-visit-feature-compressed.jpg",
    },
  ],
},

odisha: {
  state: "Odisha",
  tagline: "Temples and natural beauty",
  description:
    "Odisha is known for Jagannath Puri, Sun Temple at Konark, and Chilika Lake.",
  image:
    "https://images.unsplash.com/photo-1623594210486-bdbe206e5aa9?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Jagannath Temple & Puri Beach",
      subtitle: "Home to the sacred Jagannath Temple, a vital Char Dham pilgrimage site, built in the 11th century and noted for its rich rituals and annual Ratha Yatra festival",
      img: "https://m.economictimes.com/thumb/msid-114539895,width-1200,height-1200,resizemode-4,imgsize-136188/jagannath-temple.jpg",
    },
    {
      name: " Konark Sun Temple & Chandrabhaga Beach",
      subtitle: "A UNESCO World Heritage Site, the 13th-century Sun Temple is famous for its ornate stone carvings and chariot architecture",
      img: "https://www.go2india.in/orissa/images/b-konark-temple.jpg",
    },
    {
      name: " Bhubaneswar Temple City",
      subtitle: "Known as India's Temple City, hosting masterpieces like Lingaraj Temple, Mukteswara, Rajarani, and Ananta Vasudeva temples — all celebrated for beautiful Kalinga architecture The Udayagiri & Khandagiri Caves, ancient rock-cut Jain dwellings near Bhubaneswar, are historically significant and remarkable in design",
      img: "https://bhubaneswartourism.in/images/v2/places-to-visit-in-bhubaneswar/shri-ram-mandir-bhubaneswar-temple.jpg",
    },
  ],
},

// punjab: {
//   state: "Punjab",
//   tagline: "Land of Golden Temple & culture",
//   description:
//     "Punjab is known for the Golden Temple, vibrant culture, and Wagah Border ceremony.",
//   image:
//     "https://images.unsplash.com/photo-1599661046289-2c23c5bcacae?w=800&auto=format&fit=crop",
//   topPlaces: [
//     {
//       name: "Golden Temple",
//       subtitle: "Amritsar",
//       img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Wagah Border",
//       subtitle: "India–Pakistan Border",
//       img: "https://images.unsplash.com/photo-1617195737499-02cb12ac50c0?w=400&auto=format&fit=crop",
//     },
//   ],
// },

assam: {
  state: "Assam",
  tagline: "Tea gardens, wildlife, and temples",
  description:
    "Assam is known for Kaziranga National Park, tea gardens, and Kamakhya Temple.",
  image:
    "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2025/07/Rhino-Conservation-Success-Story.jpg",
  topPlaces: [
    {
      name: "Kaziranga National Park",
      subtitle: "Famous as the most significant sanctuary for India’s one‑horned rhinoceros, Kaziranga is a UNESCO World Heritage Site renowned for its incredible biodiversity, including tigers, elephants, wild water buffalo, and over 400 species of birdSave the Indian rhinoceros, dense tiger population, unique ecosystem.",
      img: "https://hblimg.mmtcdn.com/content/hubble/img/kaziranga/mmt/activities/m_activities_kaziranga_jeep_safari_l_377_569.jpg",
    },
    {
      name: " Majuli Island",
      subtitle: "Cultural island, satras, birdlife, immersive Assamese traditions.The world’s largest river island, nestled in the Brahmaputra River, Majuli offers serene rural landscapes and deep cultural experiences linked to Assamese neo‑Vaishnavite monasteries (satras), tribal crafts, and birdwatching",
      img: "https://idronline.org/wp-content/uploads/2023/09/An-image-of-Kamakhya-temple-in-Guwahati-during-the-Ambubachi-Mela_resized.jpg",
    },
    {
      name: ". Manas National Park",
      subtitle: "Natural beauty, wildlife diversity, conservation success story.Set in the Himalayan foothills, Manas is both a UNESCO Natural World Heritage Site and a Biosphere Reserve. It has a remarkable history of conservation recovery, now home to tigers, golden langurs, pygmy hogs, elephants, and rich birdlife.",
      img: "https://footloosedev.com/wp-content/uploads/2018/01/majuli-island-bamboo-cottage.jpg",
    }
    ],
  },
  // ... add other states similarly
  //-------------------------------------------------------- honeymoonDetailsMap--------------------------------------------------------------------------------------------------------
};

const honeymoonDetailsMap = {
  "uttar-pradesh": {
  state: "Uttar Pradesh",
  emoji: "💖",
  tagline: "Cultural Romance",
  description:
    "Taj Mahal and spiritual ghats give a soulful honeymoon experience in UP.",
  image:
    "https://images.unsplash.com/photo-1549893079-5e3b5dca9d3e?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Taj Mahal",
      subtitle: "A timeless symbol of love and architectural grandeur—the Taj Mahal stands in marble perfection. These images beautifully showcase couples hand‑in‑hand against the serene backdrop of gardens, water reflections, and golden hour serenity.",
      img: "https://images.cnbctv18.com/uploads/2024/10/pti10-05-2024-000308a-2024-10-677866d434230da91932bf3e9672c597.jpg?impolicy=website&width=640&height=360",
    },
    {
      name: "Varanasi Ghats",
      subtitle: "Sunrise Boat Ride on the Ganga,Float gently past ancient ghats as the city awakens—peaceful, magical, and deeply bonding.Evening Ganga Aarti at Dashashwamedh Ghat ,Stand together as thousands of lamps rise to the sky.",
      img: "https://images.squarespace-cdn.com/content/v1/56ec44b41d07c0db86a517e5/1490977997198-XAGRAV0Y6XN2UQBHKE6P/varanasi-ganges-boat-ride-sunset.jpg",
    },
    {
      name: "Ayodhya Ram Mandir",
      subtitle: "Romantic couple facing the Ram Mandir at sunset ,Hands held during Saryu Aarti,Silhouettes against the glowing mandir dome.",
      img: "https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/01/Jadeja-7.jpg?size=%2A%3A900",
    },
    {
      name: "Mathura",
      subtitle: "Krishna Janmabhoomi",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Krishna_Janmasthan_Temple_Complex_Mathura.jpg",
    },
  ],
},
"uttarakhand": {
  state: "Uttara Khand",
  tagline: "Rishikesh, Nainital,Mussoorie,  Dehradun, Auli,Kausani,Ranikhet,Dhanaulti",
  description:
    "Uttara Khand has cultural and historic sites like the Rishikesh, Hariwar, Khedarnath, and Nilkhante.",
  image:
    "https://plus.unsplash.com/premium_photo-1697730277839-440df1a4415f?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Rishikesh",
      subtitle: "Spiritual and serene, ideal for couples seeking peaceful vibes alongside the Ganges and lush Himalayan foothills.",
      img: "https://www.bizarexpedition.com/images/2020/08/product/15984429005.png",
    },
    {
      name: " Nainital",
      subtitle: " 	Romantic boat rides, scenic sunrises over Naini Lake",
      img: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/30/3a/3c/mesmerizing.jpg",
    },
    {
      name: " Mussoori",
      subtitle: "Known as the “Queen of Hills,” Mussoorie enchants with Camel’s Back Road, misty mountain panoramas, and the romantic Kempty Falls.",
      img: "https://www.colorfuldestinationsindia.com/wp-content/uploads/2025/03/pexels-being-the-traveller-579914-2070307.png",
    },
    {
      name: "Ranikhet",
      subtitle: "Krishna Janmabhoomi",
      img: "https://images.unsplash.com/photo-1554774853-7e3e5b787b5b?w=400&auto=format&fit=crop",
    },
    {
      name: " Auli",
      subtitle: "Holy Temple",
      img: "https://images.unsplash.com/photo-1620171369834-0b1d2d4f0f0e?w=400&auto=format&fit=crop",
    },
    {
      name: "Kausani",
      subtitle: "Krishna Janmabhoomi",
      img: "https://images.unsplash.com/photo-1554774853-7e3e5b787b5b?w=400&auto=format&fit=crop",
    },
  ],
},

// rajasthan: {
//   state: "Rajasthan",
//   emoji: "🏰",
//   tagline: "Royal Romance & Desert Charm",
//   description:
//     "Palaces, forts, and desert adventures make Rajasthan a royal honeymoon choice.",
//   image:
//     "https://images.unsplash.com/photo-1580674285056-f64e6b1ba859?w=800&auto=format&fit=crop",
//   topPlaces: [
//     {
//       name: "Jaipur",
//       subtitle: "Amber Fort & City Palace",
//       img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Udaipur",
//       subtitle: "City of Lakes",
//       img: "https://images.unsplash.com/photo-1611605698335-8b3c09a3c5b5?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Jaisalmer",
//       subtitle: "Golden Fort & Desert Safari",
//       img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=400&auto=format&fit=crop",
//     },
//     {
//       name: "Jodhpur",
//       subtitle: "Mehrangarh Fort",
//       img: "https://images.unsplash.com/photo-1555400038-63f3c7982cf0?w=400&auto=format&fit=crop",
//     },
//   ],
// },

delhi: {
  state: "Delhi",
  emoji: "🕌",
  tagline: "",
  description:
    "Delhi offers Mughal monuments, cultural heritage, and modern romance spots.Lotus Temple,Qutub Minar,The Garden of Five Senses",
  image:
    "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Lotus Temple",
      subtitle: "The peaceful gardens and reflecting pools enhance romantic photo opportunities and reflective moments.Bright daylight enhances the white marble petals, framed by lush green grounds—showcasing the temple’s iconic symmetry and serenity",
      img: "https://w0.peakpx.com/wallpaper/586/802/HD-wallpaper-lotus-temple-new-delhi-india-lotus-temple.jpg",
    },
    {
      name: "Qutub Minar",
      subtitle: "Its grandeur and historical significance offer a poetic backdrop for couple photography and romantic storytelling.The complex’s open gardens and ancient ruins make for peaceful strolls and memorable shared moments.Visiting at golden hour or framing within Mughal archways can produce cinematic couple shots.",
      img: "https://s7ap1.scene7.com/is/image/incredibleindia/qutab-minar-delhi-attr-hero?qlt=82&ts=1742169673469",
    },
    {
      name: "The Garden of Five Senses ",
      subtitle: "Founded in 2003 and spread across 20 acres, the park is a harmonious blend of sculptural art, vibrant gardens, water features, and sensory attractions—all designed to awaken your sight, sound, smell, touch, and taste",
      img: "https://delhitourism.travel/images/places-to-visit/headers/garden-of-five-senses-delhi-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      name: "The Garden of Five Senses ",
      subtitle: "Architectural Marvel",
      img: "https://images.unsplash.com/photo-1618835968059-5c8c7e5f0d95?w=400&auto=format&fit=crop",
    },
  ],
},

"madhya-pradesh": {
  state: "Madhya Pradesh",
  emoji: "🐅",
  tagline: "Temples & Tiger Safaris",
  description:
    "Madhya Pradesh is rich in ancient temples, stupas, and tiger reserves, Pachmarhi – The Queen of Satpura,Mandu – The City of Love,Bhedaghat – Marble Rocks & Narmada Romance.",
  image:
    "https://images.unsplash.com/photo-1601913450315-df687a0a13db?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: " Pachmarhi – The Queen of Satpura",
      subtitle: "A serene waterfall amidst lush greenery in Pachmarhi’s Satpura range. This romantic spot, often called Bee Fall, is famed for its peaceful ambiance and soothing nature—perfect for couples exploring together.",
      img: "https://c.myholidays.com/packages/e81edbcb-69d9-48f2-84fb-43e0240fbf7d/original/ccc60b5b-ec29-4348-b727-9f8f840a5964.webp",
    },
    {
      name: "Mandu – The City of Love",
      subtitle: "Majestic cascades plunging over 100 ft, drawing water-loving honeymooners. The falls are ideal for private moments or hiking adventures to waterfalls and viewpoints around Pachmarhi. ",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/98/4a/4b/bee-falls.jpg?h=-1&s=1&w=1200",
    },
    {
      name: "Bhedaghat – Marble Rocks & Narmada Romance",
      subtitle: "Overlooking undulating hills and forest canopy, this scenic viewpoint captures the romantic essence of Pachmarhi at twilight—perfect for sunset moments and cozy walks.",
      img: "https://www.tourmyindia.com/socialimg/pachmarhi-honeymoon-tour.jpg",
    },
  ],
},goa: {
  state: "Goa",
  tagline: "Palolem Beach (South Goa), Agonda Beach (South Goa), and  Cavelossim Beach (South Goa)",
  description:
    "Goa is India's beach paradise, known for its nightlife, Portuguese churches, and scenic beauty.",
  image:
    "https://www.bharatbooking.com/admin/webroot/img/uploads/blog/1584334581_422472-Beaches-for-the-Perfect-Honeymoon-in-Goa.jpg",
  topPlaces: [
    {
      name: "  Cavelossim Beach (South Goa)",
      subtitle: "Famous Beaches",
      img: "https://www.bharatbooking.com/admin/webroot/img/uploads/blog/1584334581_422472-Beaches-for-the-Perfect-Honeymoon-in-Goa.jpg",
    },
    {
      name: " Agonda Beach (South Goa)",
      subtitle: "Waterfall",
      img: "https://assets.serenity.co.uk/58000-58999/58031/720x480.jpg",
    },
    {
      name: "Palolem Beach (South Goa)",
      subtitle: "UNESCO Heritage",
      img: "https://www.tourmyindia.com/states/goa/image/honeymoon-getaways-goa-banner.webp",
    },
  ],
},
kerala: {
  state: "Kerala",
  tagline: "God’s Own Country",
  description:
    " Munnar, Alleppey (Alappuzha), Kumarakom.",
  image:
    "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/02/15143640/Kerala-3.jpg",
  topPlaces: [
    {
      name: "Alleppey (Alappuzha)",
      subtitle: "Houseboat stays on serene canals, backwater lifestyle",
      img: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2016/08/Floating-Cottages-Poovar-e1553506379263.jpg",
     
    },
    {
      name: "Munnar",
      subtitle: "Lush tea gardens, colonial charm, cool highland climate",
      img: "https://irisholidays.com/keralatourism/wp-content/uploads/2021/05/kerala-honeymoon.jpg",
    },
    {
      name: "Kumarakom",
      subtitle: "Lakeside luxury resorts, bird sanctuaries, quieter backwater vibes",
      img: "https://media.licdn.com/dms/image/v2/D5612AQFSXm1m5p03Lw/article-cover_image-shrink_720_1280/B56Za6PJYjGUAI-/0/1746881264042?e=2147483647&t=b4ZoUpIsJLpsyyTNuzmrFxzouwyOyrKWGszpt8u6eI0&v=beta",
    },
  ],
},

"tamil-nadu": {
  state: "Tamil Nadu",
  tagline: "Scenic boat rides, nature lovers and Quiet time amid misty hills in Offbeat, peaceful romance.",
  description:
    "Tamil Nadu is known for its grand Kodaikanal, Ooty (Udagamandalam), and Yercaud,Coonoor.",
  image:
    "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2017/03/Coonoor-Hill-View-1.jpg",
  topPlaces: [
    {
      name: "Kodaikanal",
      subtitle: "A breathtaking scene as golden and pink hues reflect across the tranquil waters of the star-shaped Kodaikanal Lake, surrounded by lush green hills—evoking peaceful evening romance and scenic calm.",
      img: "https://www.trawell.in/blog/wp-content/uploads/2024/07/kodai-main-1.jpg",
      
    },
    {
      name: "Ooty (Udagamandalam)",
      subtitle: "A peaceful lakeside vista with rolling hills and a tranquil water body framed by eucalyptus trees. The star-shaped Ooty Lake, circling 2.5 km, is perfect for boating and relaxing amidst Nilgiri’s green hills..Tea gardens, lakes, gardens, colonial vibe",
      img: "https://www.tamilnadutourism.com/images/tour-packages/card/kodaikanal-trip.jpg",
    },
    {
      name: "Yercaud,Coonoor",
      subtitle: "Coonoor is a peaceful Nilgiri hill station known for expansive tea estates, colonial-era charm, and scenic lookouts. The image reflects lush green terrain dotted with plantations and rolling hills.Popular spots include Sim’s Park (a heritage botanical garden), Dolphin’s Nose viewpoint, Law’s Falls, Lamb’s Rock, and Ralliah Dam.Coffee estates, panoramic viewpoints",
      img: "https://www.starlinetravels.com/wp-content/uploads/2021/10/Tamilnadu-honeymoon-places.png",
    },
  ],
},

karnataka: {
  state: "Karnataka",
  tagline: "Heritage, palaces, and nature",
  description:
    "Karnataka is known for Mysore Palace, Gokarna, Chikmagalur,coffee plantations, and scenic Coorg.",
  image:
    "https://blogs.tripzygo.in/wp-content/uploads/2024/10/honeymoon-in-coorg.jpg",
  topPlaces: [
    {
      name: "Chikmagalur",
      subtitle: "Highlights: Coffee hills, Mullayanagiri Peak, waterfalls, trekking trails. Rustic, adventurous, green.",
      img: "https://img.traveltriangle.com/apac//attachments/pictures/881956/original/1_Madikeri_in_coorg.jpg",
    },
    {
      name: "Gokarna",
      subtitle: "Om Beach, Kudle Beach, Half Moon Beach, Mahabaleshwar Temple.Relaxed, spiritual, scenic.",
      img: "https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/02/Honeymoon-in-Coorg.jpg",
      // https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2018/02/Honeymoon-in-Coorg.jpg
    },
    {
      name: "Coorg",
      subtitle: "Coffee plantations, Abbey Falls, Raja’s Seat, Talakaveri. Misty, romantic, peaceful.",
      img: "https://wanderon-images.gumlet.io/blogs/new/2024/03/honeymoon-places-to-visit-in-india-in-october-4.jpg",
    },
  ],
},
"himachal-pradesh": {
  state: "Himachal Pradesh",
  tagline: "",
  description:
    "Himachal Pradesh offers popular hill stations and spiritual getaways.Dalhousie & Khajjia,Sangla / Chitkul (Kinnaur),Tirthan Valley / Narkanda / Theog",
  image:
    "https://www.naturetravelagency.com/uploads/1711442130Dalhousie%20places%20to%20visit.png",
  topPlaces: [
    {
      name: "Dalhousie & Khajjiar",
      subtitle: "	Colonial charm, lake, lush meadows	Idyllic and peaceful",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/9f/27/72/beauty-all-round.jpg?h=-1&s=1&w=1200",
    },
    {
      name: "Sangla / Chitkul (Kinnaur)",
      subtitle: "Remote valleys, apple orchards, panoramic views	Offbeat and serene",
      img: "https://incrediblehimachalholidays.com/wp-content/uploads/2023/08/Kalpa-himachal.jpg",
    },
    {
      name: "Tirthan Valley / Narkanda / Theog",
      subtitle: "Nature treks, tea‑estate views, boutique stays	Hidden‑gem luxury",
      img: "https://incrediblehimachalholidays.com/wp-content/uploads/2023/08/Chitkul-himachal.jpg",
    },
  ],
},
"west-bengal": {
  state: "West Bengal",
  tagline: "Tea gardens, culture, and history",
  description:
    "West Bengal is home to Darjeeling, Sundarbans, and colonial heritage in Kolkata.",
  image:
    "https://www.tusktravel.com/blog/wp-content/uploads/2021/04/Honeymoon-in-West-Bengal.jpg",
  topPlaces: [
    {
      name: "Darjeeling",
      subtitle: "Misty hills, tea estates, mountain vistas and	Nature lovers & photographers.",
      img: " https://www.indianholiday.com/wordpress/wp-content/uploads/2025/06/darjeeling-gangtok-honeymoon-tour.jpg",
    },
    {
      name: "Sundarbans",
      subtitle: "Mystic waterways, wildlife safari experiences and Wildlife admirers & adventure seekers",
      img: "https://www.sundarbantigerroarresort.com/wp-content/uploads/2020/10/Sundarban-Tiger-Roar-1.jpg",
    },
    {
      name: "Digha / Mandarmani",
      subtitle: "Coastline walks, sunsets, beachside relaxation and	Couples wanting beach serenity",
      img: "https://static.toiimg.com/photo/41425781.cms",
    },
  ],
},
odisha: {
  state: "Odisha",
  tagline: "Temples and natural beauty",
  description:
    "",
  image:
    "https://www.hlimg.com/images/stories/738X538/beach3_1495105062m.jpg",
  topPlaces: [
    {
      name: "Bhubaneswar",
      subtitle: "Cultural richness, elegant resorts, temple-lit ambiance. start with temples, move to coastal romance, finish with eco-lakeside serenity.Set against the backdrop of ancient temples like Lingaraja and peaceful nature zones, Bhubaneswar offers serene luxury stays and cultural charm for couples. Check out resorts such as Mayfair Lagoon or Swosti Premium for honeymoon-friendly amenities.",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/2e/96/46/fe/taj-puri-resort-spa-offers.jpg",
    },
    {
      name: " Chandrabhaga",
      subtitle: "Temple heritage + pristine beach perfect for sunset moments.The majestic Sun Temple next to the tranquil Chandrabhaga Beach (a Blue‑Flag certified coastline) creates a poetic setting for newlyweds. Known as one of Odisha's most romantic temple-beach destinations.",
      img: "https://odishatour.in/wp-content/uploads/2023/09/Honeymoon-Island-Chilika-Lake-Rambha-Khalikote-Ganjam.jpg",
    },
    {
      name: "Chilika Lake",
      subtitle: "Boat cruises, birdlife, secluded nature vibes at Honeymoon Island.Tucked within Asia’s largest brackish lagoon, this island offers a perfect romantic escape: tranquil waters, birdlife, and dolphin sightings at sunset. A peaceful retreat for couples looking to unwind.",
      img: "https://www.orissatourism.org/helpers/images/honeymoon-island-chilika.jpg",
    },
  ],
},
assam: {
  state: "Assam",
  tagline: "Tea gardens, wildlife, and temples",
  description:
    ".",
  image:
    "https://www.kaziranga-national-park.com/blog/wp-content/uploads/2025/07/Rhino-Conservation-Success-Story.jpg",
  topPlaces: [
    {
      name: " Majuli Island",
      subtitle: "🌿 The world’s largest riverine island, nestled in the Brahmaputra River, known for its serene rural landscapes and rich Vaishnavite culture with ancient satras (monasteries) .",
      img: "https://travenjo.com/wp-content/uploads/2022/01/upo-lf-Shnongpdeng-Bridge-1.jpg?x58748",
    },
    {
      name: " Guwahati (Brahmaputra River & Heritage Sites)",
      subtitle: "Assam’s major city, offering both luxury amenities and romantic riverside views along the mighty Brahmaputra",
      img: "https://media1.thrillophilia.com/filestore/ugzgu6758b9z89oh46cq2b0q9txg_1608633488_shutterstock_538363867.jpg",
    },
    {
      name: "Haflong",
      subtitle: "Known as the “White Ant Hillock”, Haflong sits at 680 m elevation and offers cooler climes, scenic hills, lakes, and waterfalls—a refreshing hill retreat in Assam.",
      img: "https://www.shikhar.com/blog/wp-content/uploads/2019/08/Assam-honeymoon-tours.jpg",
    }
    ],
  },

maharashtra: {
  state: "Maharashtra",
  emoji: "🌄",
  tagline: "",
  description:
    "Mahabaleshwar, Lonavala and coastal sunsets make Maharashtra a great honeymoon mix of hills and serenity.Mahabaleshwars,Mahabaleshwars,Matheran",
  image:
    "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800&auto=format&fit=crop",
  topPlaces: [
    {
      name: "Mahabaleshwars",
      subtitle: "Here’s a highlighted overview of Mahabaleshwar, one of Maharashtra’s most romantic and scenic hill stations—perfect for honeymooners and nature lovers:",
      img: "https://www.holidify.com/images/cmsuploads/compressed/images%2847%29_20191225162623.jpeg",
    },
    {
      name: "Matheran",
      subtitle: "Notable for its automobile-free environment, unspoiled nature, and heritage toy train rides.Popular spots include Echo Point, Porcupine Point, Panorama Point, Charlotte Lake, and Dodhani Waterfall",
      img: "https://cdn0.weddingwire.in/article/3466/3_2/1280/jpg/6643-honeymoon-places-in-maharashtra-weddingnama-lead.jpeg",
    },
    {
      name: "Alibaug (Konkan Coast)",
      subtitle: "Coastal charm with Alibaug Beach, Kolaba Fort, Kihim, Nagaon, and Awas Beaches.Cultural highlights include Kanakeshwar Temple, Alibag Magnetic Observatory, and historical forts like Murud‑Janjira.",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/90/94/caption.jpg?h=400&s=1&w=600",
    },
    {
      name: "Mahabaleshwar",
      subtitle: "Hill Romance",
      img: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=400&auto=format&fit=crop",
    },
  

    ],
  },
  // ... other honeymoon entries if needed
};

const TrendingDestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = id ? detailsMap[id] : null;
  const honeymoon = id ? honeymoonDetailsMap[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10">
        <p className="text-red-600 text-lg mb-4">Destination not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const topThreeTourist = (data.topPlaces || []).slice(0, 3);
  const topThreeHoneymoon = honeymoon
    ? (honeymoon.topPlaces || []).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* Tourist Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-2">{data.state}</h1>
            <p className="text-lg text-gray-600 mb-2">{data.tagline}</p>
            <p className="text-gray-700 mb-4">{data.description}</p>
            <div className="w-full">
              <h2 className="text-2xl text-center font-semibold mb-6">
                Tourist Places
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {topThreeTourist.map((place, idx) => (
                  <div
                    key={idx}
                    className="border rounded-lg overflow-hidden shadow flex flex-col"
                  >
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={place.img}
                        alt={place.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-red-600 mb-1">
                        {place.name}
                      </h3>
                      <p className="text-xs text-gray-500">{place.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Honeymoon Section */}
        {honeymoon && (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold mb-2">
                {honeymoon.emoji} {honeymoon.state} (Honeymoon Special)
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                {honeymoon.tagline}
              </p>
              <p className="text-gray-700 mb-4">{honeymoon.description}</p>
              <div className="w-full">
                <h2 className="text-2xl text-center font-semibold mb-6">
                  Honeymoon Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {topThreeHoneymoon.map((place, idx) => (
                    <div
                      key={idx}
                      className="border rounded-lg overflow-hidden shadow flex flex-col"
                    >
                      <div className="h-40 w-full overflow-hidden">
                        <img
                          src={place.img}
                          alt={place.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-semibold text-red-600 mb-1">
                          {place.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {place.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => navigate(-1)}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TrendingDestinationDetail;
