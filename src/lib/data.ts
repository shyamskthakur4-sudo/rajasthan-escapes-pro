import jaipurImg from "@/assets/hero-jaipur.jpg";
import jodhpurImg from "@/assets/jodhpur.jpg";
import udaipurImg from "@/assets/udaipur.jpg";
import jaisalmerImg from "@/assets/jaisalmer.jpg";
import agraImg from "@/assets/agra.jpg";
import desertImg from "@/assets/desert-camp.jpg";
import luxHotel from "@/assets/luxury-hotel.jpg";
import budgetHotel from "@/assets/budget-hotel.jpg";
import heritage from "@/assets/heritage-stay.jpg";
import suv from "@/assets/cab-suv.jpg";
import sedan from "@/assets/cab-sedan.jpg";
import tempo from "@/assets/cab-tempo.jpg";
import luxuryCar from "@/assets/cab-luxury.jpg";

export const WHATSAPP = "919352914840";
export const PHONE_1 = "+91 93529 14840";
export const PHONE_2 = "+91 89554 70097";
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
      "Arrival in Delhi — Qutab Minar, Humayun's Tomb, India Gate & Red Fort light show",
      "Delhi → Agra — Agra Fort, Baby Taj, sunset at Taj Mahal",
      "Agra → Jaipur via Fatehpur Sikri — City Palace, Jantar Mantar, Hawa Mahal",
      "Jaipur — Amber Fort, Jaigarh Fort, drive back to Delhi airport",
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
      "Arrive Jaipur — Chokhi Dhani village experience",
      "Jaipur city — Amber, Jal Mahal, Hawa Mahal, City Palace",
      "Jaipur → Bikaner — Junagarh Fort & local bazaars",
      "Bikaner → Jaisalmer — Golden Fort check-in",
      "Sam desert camp, camel safari, folk evening",
      "Camp → Jodhpur — Blue City exploration",
      "Jodhpur → Ajmer — Dargah Sharif visit",
      "Ajmer → Pushkar → Jaipur shopping",
      "Departure transfer",
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
    days: ["Full curated 11-day royal Rajasthan circuit with heritage stays and private guides."],
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
      "Arrive Udaipur — leisure at hotel",
      "City Palace, Jagdish Temple, boat ride, Saheliyon-ki-Bari",
      "Eklingji & Nathdwara, departure",
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
    days: ["Curated 5-day blend of royal courts and serene lakes."],
  },
  {
    id: "wildlife",
    title: "Best of Wildlife",
    duration: "5 Nights / 6 Days",
    tagline: "Ranthambore Tiger Safari",
    price: "From ₹32,000",
    image: jaisalmerImg,
    highlights: ["Tiger safari jeep ride", "Ranthambore Fort & Ganesh Temple", "Forest lodge stay"],
    days: ["Premium tiger-tracking circuit through Ranthambore National Park."],
  },
  {
    id: "local-jaipur",
    title: "Local Jaipur",
    duration: "2 Nights / 3 Days",
    tagline: "Pink City essentials",
    price: "From ₹9,800",
    image: jaipurImg,
    highlights: ["Chokhi Dhani evening", "Amber Fort + City Palace", "Birla & Ganesh Temple"],
    days: ["Airport pickup & Chokhi Dhani village evening", "Amber, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Patrika Gate", "Temples & airport drop"],
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
  { id: "suv", name: "SUV", desc: "Toyota Fortuner / Innova Crysta", image: suv, capacity: "6 + 1", price: "₹18 / km", features: ["AC", "Bluetooth", "Spacious luggage"] },
  { id: "sedan", name: "Sedan", desc: "Toyota Etios / Honda City", image: sedan, capacity: "4 + 1", price: "₹12 / km", features: ["AC", "Premium interior", "Fuel efficient"] },
  { id: "tempo", name: "Tempo Traveller", desc: "12–17 seater for groups", image: tempo, capacity: "12 / 17", price: "₹28 / km", features: ["Reclining seats", "Push back", "Ample boot"] },
  { id: "luxury", name: "Luxury Cars", desc: "Mercedes / BMW with chauffeur", image: luxuryCar, capacity: "3 + 1", price: "₹55 / km", features: ["Chauffeur", "Mineral water", "Wi-Fi"] },
];
