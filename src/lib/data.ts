import jaipurImg from "@/assets/hero-jaipur.jpg";
import jodhpurImg from "@/assets/jodhpur.jpg";
import udaipurImg from "@/assets/udaipur.jpg";
import jaisalmerImg from "@/assets/jaisalmer.jpg";
import agraImg from "@/assets/agra.jpg";
import desertImg from "@/assets/desert-camp.jpg";
import luxHotel from "@/assets/luxury-hotel.jpg";
import budgetHotel from "@/assets/budget-hotel.jpg";
import heritage from "@/assets/heritage-stay.jpg";
import sedan from "@/assets/cab-sedan.jpg";
import tempo from "@/assets/cab-tempo.jpg";
import innovaCar from "@/assets/cab-luxury.jpg";

export const WHATSAPP = "918955470097";
export const PHONE_1 = "+91 93529 14840";
export const PHONE_2 = "+91 89554 70097";
export const EMAIL = "almonzotourism@gmail.com";
export const INSTAGRAM = "https://instagram.com/almonzo_tourism";
export const MAPS_URL = "https://maps.app.goo.gl/SeHCRM8k49NqmwVw9?g_st=ic";

export const packages = [
  {
    id: "golden-triangle",
    title: "Golden Triangle",
    duration: "3 Nights / 4 Days",
    tagline: "Delhi · Agra · Jaipur",
    price: "From ₹18,900",
    image: agraImg,
    highlights: ["Taj Mahal at sunset", "Amber Fort elephant ride", "Old Delhi heritage walk"],
    days: [
      "Day 01 — Arrival at Delhi: Welcome at Delhi airport and transfer to your hotel. After check-in, proceed for local sightseeing — Qutab Minar (UNESCO World Heritage Site), Humayun's Tomb, the President House, India Gate, Laxmi Narayan Temple, Red Fort, Jama Masjid and Raj Ghat. End the evening with the Light & Sound Show at Red Fort. Overnight in Delhi.",
      "Day 02 — Delhi → Agra: Drive to Agra, the city of marbles. Visit the 16th-century Agra Fort (Lal Qila), a UNESCO site where Shah Jahan was imprisoned by his son Aurangzeb, followed by Etmad-ud-Daulah's Tomb (Baby Taj). In the evening witness the Taj Mahal at sunset — built by Shah Jahan as a symbol of love for Mumtaz. Dinner at a famous Mughal restaurant. Overnight in Agra.",
      "Day 03 — Agra → Jaipur via Fatehpur Sikri: Drive to the Pink City, stopping at Fatehpur Sikri, the 16th-century Mughal capital. On arrival, visit Albert Hall & Museum, City Palace, Jantar Mantar and the iconic Hawa Mahal. Evening free for local markets. Overnight in Jaipur.",
      "Day 04 — Jaipur → Delhi (Departure): Visit Amber Fort with an elephant ride and Jaigarh Fort. After lunch, drive back to Delhi for your onward flight.",
    ],
  },
  {
    id: "desert-tour",
    title: "Royal Desert Tour",
    duration: "8 Nights / 9 Days",
    tagline: "Jaipur · Bikaner · Jaisalmer · Jodhpur · Ajmer",
    price: "From ₹42,500",
    image: desertImg,
    highlights: ["Sam Sand Dunes camp", "Camel safari at dawn", "Mehrangarh Fort sunset"],
    days: [
      "Day 01 — Arrival in Jaipur: Airport/station pickup and hotel check-in. Evening visit to Chokhi Dhani for an authentic Rajasthani village experience.",
      "Day 02 — Jaipur Sightseeing: Amber Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall and Patrika Gate.",
      "Day 03 — Jaipur → Bikaner: Drive to Bikaner and check in. Evening at leisure exploring local sightseeing.",
      "Day 04 — Bikaner → Jaisalmer: Local sightseeing in Bikaner before driving to the Golden City of Jaisalmer for hotel check-in.",
      "Day 05 — Jaisalmer & Sam Desert Camp: Sightseeing in Jaisalmer, then transfer to a luxury desert camp at Sam. Enjoy folk performances, dinner and camp activities under the stars.",
      "Day 06 — Camel Safari → Jodhpur: Morning camel safari, then drive to Jodhpur, the Blue City, and check in.",
      "Day 07 — Jodhpur → Ajmer: Local sightseeing in Jodhpur followed by transfer to Ajmer hotel.",
      "Day 08 — Ajmer → Jaipur: Local sightseeing and shopping in Ajmer, then drive back to Jaipur.",
      "Day 09 — Departure: Checkout and airport/railway station drop.",
    ],
  },
  {
    id: "rajasthan-culture",
    title: "Golden Triangle + Rajasthan Culture",
    duration: "10 Nights / 11 Days",
    tagline: "Delhi · Agra · Jaipur · Jodhpur · Bikaner · Mandawa",
    price: "From ₹64,000",
    image: jodhpurImg,
    highlights: ["Painted havelis of Mandawa", "Mehrangarh & Jaswant Thada", "Heritage haveli stays"],
    days: [
      "Day 01 — Arrive Delhi: Airport welcome and transfer to hotel. Evening Light & Sound Show at Red Fort. Overnight in Delhi.",
      "Day 02 — Delhi Sightseeing: Qutab Minar, Lotus Temple, Humayun's Tomb, President House, India Gate, National Museum, Laxmi Narayan Temple, Raj Ghat and Chandni Chowk market.",
      "Day 03 — Delhi → Agra: Drive to Agra via Akbar's Tomb at Sikandra. Evening visit to the Taj Mahal at sunset. Overnight in Agra.",
      "Day 04 — Agra → Jaipur: Morning at Agra Fort and Itimad-ud-Daulah (Baby Taj). Drive to Jaipur via Fatehpur Sikri. Overnight in Jaipur.",
      "Day 05 — Jaipur: Amber Fort with elephant ride, Jaigarh Fort, City Palace, Albert Hall & Museum, Hawa Mahal, Jantar Mantar and Jal Mahal.",
      "Day 06 — Jaipur → Jodhpur: Drive to the Blue City. Check in and overnight in Jodhpur.",
      "Day 07 — Jodhpur → Jaisalmer: Visit Mehrangarh Fort, Umaid Bhawan Palace and Jaswant Thada, then drive to Jaisalmer.",
      "Day 08 — Jaisalmer: Jaisalmer Fort and the Jain Temples, Patwon Ki Haveli and Nathmal Ki Haveli. Evening camel ride at Sam/Khuri sand dunes for sunset.",
      "Day 09 — Jaisalmer → Bikaner: Drive to Bikaner via the 600-year-old Karni Mata (Deshnoke) Temple. Visit Junagarh Fort, Lalgarh Palace and Asia's largest Camel Breeding Research Farm.",
      "Day 10 — Bikaner → Mandawa: Drive to Mandawa through traditional villages. Walk the streets to admire the 150–200 year old painted havelis.",
      "Day 11 — Mandawa → Delhi (Departure): After breakfast, drive back to Delhi for your onward flight.",
    ],
  },
  {
    id: "lake-city",
    title: "Lake City — Udaipur",
    duration: "2 Nights / 3 Days",
    tagline: "Udaipur",
    price: "From ₹14,500",
    image: udaipurImg,
    highlights: ["Lake Pichola boat ride", "City Palace tour", "Sunset at Sajjangarh"],
    days: [
      "Day 01 — Arrive Udaipur: Arrival in the former princely capital of Mewar and transfer to hotel. Day at leisure. Overnight in Udaipur.",
      "Day 02 — Udaipur City Tour: City Palace & Museum, Vintage Car Museum, Saheliyon Ki Bari and Maharana Pratap Smarak. Overnight in Udaipur.",
      "Day 03 — Departure: After breakfast, checkout and transfer to the airport. Tour ends.",
    ],
  },
  {
    id: "jaipur-udaipur",
    title: "Jaipur & Udaipur",
    duration: "4 Nights / 5 Days",
    tagline: "Pink City + Lake City",
    price: "From ₹26,800",
    image: jaipurImg,
    highlights: ["Chokhi Dhani folk dinner", "Lake Pichola boat ride", "Pristine heritage stays"],
    days: [
      "Day 01 — Arrival in Jaipur: Airport/station pickup and hotel check-in. Evening at Chokhi Dhani for a traditional village experience.",
      "Day 02 — Jaipur Sightseeing: Amber Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall and Patrika Gate.",
      "Day 03 — Jaipur → Udaipur via Pushkar: Drive to Udaipur stopping at Pushkar for the holy lake and the famous Brahma Temple. Evening boat ride on Lake Pichola visiting Jag Mandir.",
      "Day 04 — Udaipur: Visit City Palace, Jagdish Temple, drive around Fatehsagar Lake, Saheliyon Ki Bari and Bharatiya Lok Kala Mandir. Evening walks through Lake City markets.",
      "Day 05 — Departure: After breakfast, transfer to Udaipur or Jaipur airport/railway station for your onward journey.",
    ],
  },
  {
    id: "wildlife",
    title: "Best of Wildlife",
    duration: "5 Nights / 6 Days",
    tagline: "Ranthambore Tiger Safari",
    price: "From ₹32,000",
    image: jaisalmerImg,
    highlights: ["Tiger safari jeep ride", "Ranthambore Fort & Ganesh Temple", "Forest lodge stay"],
    days: [
      "Day 01 — Arrival in Jaipur: Airport/railway pickup, hotel check-in. Evening at Chokhi Dhani and Museum Light & Sound Show.",
      "Day 02 — Jaipur Sightseeing: Amber Fort, Jal Mahal, Hawa Mahal, Jantar Mantar, City Palace and local market for shopping.",
      "Day 03 — Jaipur → Sawai Madhopur: Drive to Sawai Madhopur and check in. Afternoon safari in Ranthambore National Park.",
      "Day 04 — Sawai Madhopur → Bharatpur: Drive to Bharatpur and visit Keoladeo Bird National Park (UNESCO World Heritage Site).",
      "Day 05 — Bharatpur → Deeg: Transfer to Deeg, visit Deeg Palace and Sariska Sanctuary.",
      "Day 06 — Departure: After breakfast, transfer to Jaipur airport/railway station for departure.",
    ],
  },
  {
    id: "local-jaipur",
    title: "Local Jaipur",
    duration: "2 Nights / 3 Days",
    tagline: "Pink City essentials",
    price: "From ₹9,800",
    image: jaipurImg,
    highlights: ["Chokhi Dhani evening", "Amber Fort + City Palace", "Birla & Ganesh Temple"],
    days: [
      "Day 01 — Arrival: Pickup from airport/railway station and transfer to hotel. Evening visit to Chokhi Dhani for a traditional Rajasthani village experience.",
      "Day 02 — Pink City Sightseeing: Amber Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall and Patrika Gate.",
      "Day 03 — Departure: After checkout, visit Birla Temple and Ganesh Temple (Moti Dungri) before drop at airport/railway station.",
    ],
  },
  {
    id: "khatu-salasar",
    title: "Khatu Shyam Ji & Salasar",
    duration: "2 Nights / 3 Days",
    tagline: "Spiritual circuit",
    price: "From ₹8,500",
    image: udaipurImg,
    highlights: ["Khatu Shyam Ji darshan", "Salasar Balaji", "Rani Sati Temple"],
    days: ["Devotional Rajasthan pilgrimage with comfort stays."],
  },
];

export const hotels = [
  { id: "luxury", name: "Luxury Hotels", desc: "5★ palace hotels & royal suites", image: luxHotel, stars: 5, gallery: [luxHotel, heritage, udaipurImg] },
  { id: "budget", name: "Budget Hotels", desc: "Comfort, cleanliness & warmth", image: budgetHotel, stars: 3, gallery: [budgetHotel, jaipurImg, jodhpurImg] },
  { id: "heritage", name: "Heritage Stays", desc: "Painted havelis & royal manors", image: heritage, stars: 5, gallery: [heritage, jodhpurImg, jaisalmerImg] },
  { id: "desert", name: "Desert Camps", desc: "Luxury Swiss tents under the stars", image: desertImg, stars: 4, gallery: [desertImg, jaisalmerImg, udaipurImg] },
];

export const cabs = [
  { id: "sedan", name: "Sedan", desc: "Toyota Etios / Swift Dzire", image: sedan, capacity: "3 + 1", price: "₹12 / km", features: ["AC", "Premium interior", "Fuel efficient"] },
  { id: "innova", name: "Innova / Innova Crysta", desc: "Toyota Innova & Innova Crysta", image: innovaCar, capacity: "5 + 1", price: "₹22 / km", features: ["Spacious cabin", "Captain seats", "Ample luggage"] },
  { id: "tempo", name: "Tempo Traveller", desc: "12–17 seater for groups", image: tempo, capacity: "12 / 17", price: "₹28 / km", features: ["Reclining seats", "Push back", "Ample boot"] },
];
