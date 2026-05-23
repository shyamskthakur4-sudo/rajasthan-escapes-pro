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
  {
    id: "golden-triangle-tiger",
    title: "Golden Triangle with Tiger Safari",
    duration: "7 Nights / 8 Days",
    tagline: "Delhi · Agra · Ranthambore · Jaipur",
    price: "From ₹54,000",
    image: jaisalmerImg,
    highlights: ["Taj Mahal at sunrise", "Ranthambore tiger safaris", "Amber Fort elephant ride"],
    days: [
      "Day 01 — Arrival at Delhi: Welcome at Delhi Airport and transfer to your pre-booked hotel. After check-in, rest and freshen up. In the evening, visit Red Fort to enjoy the Light & Sound Show — the Red Fort served as the residence of Mughal emperors for nearly 200 years. Dinner and overnight at the hotel.",
      "Day 02 — Delhi Sightseeing: After breakfast, proceed for local sightseeing of India's capital. Visit Qutab Minar (the tallest brick minaret in the world and a UNESCO World Heritage Site), Lotus Temple and Humayun's Tomb. After lunch visit President House, India Gate, National Museum, Laxmi Narayan Temple, Raj Ghat and Chandni Chowk market. Dinner at a famous restaurant. Overnight in Delhi.",
      "Day 03 — Delhi → Agra: After breakfast drive to Agra — the city of marbles — stopping at the Tomb of Emperor Akbar at Sikandra. Check in at the Agra hotel. After lunch visit the 16th-century Agra Fort (Lal Qila, UNESCO site) where Shah Jahan was imprisoned by his son Aurangzeb, followed by Itimad-ud-Daulah's Tomb (Baby Taj). Evening at the local market for handicrafts. Dinner at a famous Mughal restaurant. Overnight in Agra.",
      "Day 04 — Agra → Ranthambore: Early morning visit to the Taj Mahal at sunrise. Return to the hotel for breakfast, check out and drive to Ranthambore via Fatehpur Sikri — a city founded by a 16th-century Mughal emperor. On arrival at Ranthambore National Park, check in at the hotel. Evening bonfire with tea/coffee and snacks. Dinner and overnight at the hotel.",
      "Day 05 — Ranthambore National Park: Morning jungle safari at Ranthambore — a vast wildlife reserve near Sawai Madhopur, home to tigers, leopards and marsh crocodiles, with the 10th-century Ranthambore Fort and Ganesh Mandir on a hilltop. Return for breakfast and relax. Afternoon second safari into the jungle. Evening bonfire with tea/coffee and snacks. Dinner and overnight at the hotel.",
      "Day 06 — Ranthambore → Jaipur: After breakfast, check out and drive to Jaipur — capital of Rajasthan and the famous Pink City. Check in at the hotel. Dinner and overnight in Jaipur.",
      "Day 07 — Jaipur Sightseeing: After breakfast visit Amber Fort with an elephant ride and Jaigarh Fort, photo stop at Jal Mahal. After lunch visit City Palace, Albert Hall & Museum, Jantar Mantar and Hawa Mahal. Dinner and overnight in Jaipur.",
      "Day 08 — Jaipur → Delhi (Departure): After breakfast, check out and drive back to Delhi. Drop at Delhi Airport for your flight back home.",
    ],
  },
  {
    id: "jaipur-mountabu",
    title: "Jaipur & Mount Abu",
    duration: "4 Nights / 5 Days",
    tagline: "Pink City · Hill retreat",
    price: "From ₹24,500",
    image: jaipurImg,
    highlights: ["Chokhi Dhani folk evening", "Mount Abu sunset point", "Amber Fort & City Palace"],
    days: [
      "Day 01 — Arrival in Jaipur: Pickup from airport/railway station and transfer to hotel for check-in. In the evening visit Chokhi Dhani to experience traditional Rajasthani village culture. Overnight in Jaipur.",
      "Day 02 — Jaipur Sightseeing: After breakfast visit Amber Fort, Jal Mahal, Hawa Mahal, City Palace, Jantar Mantar, Albert Hall and Patrika Gate. Return to the hotel for overnight stay.",
      "Day 03 — Jaipur → Mount Abu: After breakfast check out and transfer to Mount Abu, Rajasthan's only hill station. Check in at the hotel. In the evening visit Sunset Point and return to the hotel for overnight stay.",
      "Day 04 — Mount Abu Sightseeing: After breakfast explore Mount Abu's local sights including Dilwara Jain Temples, Nakki Lake and Guru Shikhar. Return to the hotel for overnight stay.",
      "Day 05 — Departure: After breakfast check out and transfer to Jaipur Airport / Railway Station for your onward journey. Tour ends.",
    ],
  },
  {
    id: "jaipur-ajmer-pushkar",
    title: "Jaipur · Ajmer · Pushkar",
    duration: "3 Nights / 4 Days",
    tagline: "Pink City + Holy circuit",
    price: "From ₹17,500",
    image: udaipurImg,
    highlights: ["Jaigarh Fort cannon", "Ajmer Sharif Dargah", "Brahma Temple at Pushkar"],
    days: [
      "Day 01 — Arrival in Jaipur: Pickup from Jaipur Airport / Railway Station and transfer to the hotel. Relax and later visit Albert Hall Museum and Birla Temple. In the evening choose between Chokhi Dhani — India's only village resort — or a Sound & Light Show. Overnight at the hotel.",
      "Day 02 — Jaipur Sightseeing: After breakfast start a full-day local sightseeing tour. Visit Jaigarh Fort (famous for the world's biggest cannon), then Amber Fort & Palace in the afternoon. Photo stop at Jal Mahal followed by City Palace & Museum, Jantar Mantar (Observatory) and Hawa Mahal. Evening free for leisure. Overnight in Jaipur.",
      "Day 03 — Jaipur → Ajmer → Pushkar: After breakfast check out and transfer to Ajmer & Pushkar. Visit Ajmer-e-Sharief Dargah, Adhai-Din-Ka Jhonpra and Ana Sagar Lake, then drive to Pushkar to visit its many temples, ghats and the holy Pushkar Lake. Of more than 400 temples here, the main attraction is the Brahma Temple — the only temple in India dedicated to Lord Brahma. Overnight at Pushkar.",
      "Day 04 — Departure: After breakfast drive to Jaipur and drop at Jaipur Airport / Railway Station as per schedule. Tour ends.",
    ],
  },
  {
    id: "jaisalmer-short",
    title: "Jaisalmer Quick Escape",
    duration: "1 Night / 2 Days",
    tagline: "Golden City + Sam Dunes",
    price: "From ₹6,800",
    image: jaisalmerImg,
    highlights: ["Jaisalmer Fort & Jain Temples", "Camel ride at Sam Dunes", "Folk dance & desert dinner"],
    days: [
      "Day 01 — Arrive Jaisalmer: Pickup from Jaisalmer Railway Station. Begin city sightseeing with Jaisalmer Fort, followed by the ancient Jain Temples situated inside the fort. Continue to Nathmal Ji Ki Haveli and Salim Singh Ki Haveli, famed for architecture blending Rajput and Islamic styles. In the evening transfer to Sam Sand Dunes for a camel ride and sunset, followed by folk dance and dinner at a tented camp. Overnight at the desert camp.",
      "Day 02 — Departure: After breakfast our driver will drop you at Jaisalmer Railway Station or Airport for your onward journey. Tour ends.",
    ],
  },
  {
    id: "ranthambore-safari",
    title: "Ranthambore Safari Tour",
    duration: "2 Nights / 3 Days",
    tagline: "Tiger reserve immersion",
    price: "From ₹14,800",
    image: jaisalmerImg,
    highlights: ["Morning & afternoon safaris", "Ranthambore Fort & Ganesh Temple", "Wildlife resort stay"],
    days: [
      "Day 01 — Arrive Ranthambore: Pickup from Sawai Madhopur Railway Station as per your schedule and transfer to the pre-booked hotel. Check in and relax. Overnight at the hotel.",
      "Day 02 — Ranthambore Safaris: Early morning jungle safari by canter or gypsy (sharing basis) for 3 hours. Return to the hotel for breakfast and morning at leisure to enjoy the resort facilities. After lunch take the afternoon jungle safari into Ranthambore National Park for wildlife viewing by canter or jeep (subject to availability). Dinner and overnight at the resort.",
      "Day 03 — Departure: After breakfast, time permitting, visit Ranthambore Fort and Ganesh Temple. Return to the hotel, check out and drop at Sawai Madhopur Railway Station as per your departure schedule.",
    ],
  },
  {
    id: "desert-jaisalmer-jodhpur",
    title: "Desert Tour — Jaisalmer & Jodhpur",
    duration: "3 Nights / 4 Days",
    tagline: "Blue City + Golden City",
    price: "From ₹19,500",
    image: jodhpurImg,
    highlights: ["Mehrangarh Fort & Jaswant Thada", "Patwon Ki Haveli", "Camel ride at sand dunes"],
    days: [
      "Day 01 — Arrive Jodhpur: On reaching Jodhpur you will be greeted and transferred to the hotel. Shake off the weariness with an evening walk exploring the Blue City. Overnight at the hotel.",
      "Day 02 — Jodhpur City Tour → Jaisalmer: After breakfast visit Mehrangarh Fort and, within it, Moti Mahal and Phool Mahal. Continue to Jaswant Thada — an imposing marble cenotaph built in memory of Maharaja Jaswant Singh II around 1899 — and enjoy the serenity of Umaid Gardens. Later drive on to Jaisalmer and check in at the hotel for overnight stay.",
      "Day 03 — Jaisalmer: After breakfast enjoy a sightseeing tour of Jaisalmer — a city of gilded magic in the heart of the Thar, founded in the 12th century when Rawal Jaisal laid its foundation. Visit the magnificent Jaisalmer Fort, Patwon Ki Haveli and Salim Singh Ki Haveli, celebrated for their carved balconies and brackets. In the evening enjoy a camel ride at the sand dunes. Return to the hotel for overnight stay.",
      "Day 04 — Jaisalmer → Jodhpur (Departure): After a hearty breakfast check out and head over to Jodhpur for your onward journey. Tour ends.",
    ],
  },
  {
    id: "jaipur-ajmer-pushkar-jodhpur",
    title: "Jaipur · Ajmer · Pushkar · Jodhpur",
    duration: "4 Nights / 5 Days",
    tagline: "Royal cities & holy lakes",
    price: "From ₹28,500",
    image: jodhpurImg,
    highlights: ["Amber Fort elephant ride", "Mehrangarh Fort & Jaswant Thada", "Pushkar Brahma Temple"],
    days: [
      "Day 01 — Arrive Jaipur: Pickup from Railway Station / Airport and drive to Jaipur. Transfer to the hotel and check in. Visit Maharaja's City Palace, the Observatory (Jantar Mantar) and Ram Niwas Gardens. Drive past Hawa Mahal and through the pink-rose residential and business areas. Overnight in Jaipur.",
      "Day 02 — Jaipur Sightseeing: Morning visit to Amber Fort with an elephant ride (at extra cost, subject to availability) up to the main entrance of the fort — Amber Fort was the ancient capital of the State. After a photo stop at Jal Mahal, visit Maharaja's City Palace and the Observatory, then the Sheesh Mahal (Hall of Victory) glittering with mirrors. Evening free for shopping. Return to the hotel for overnight stay.",
      "Day 03 — Jaipur → Jodhpur: After breakfast check out and drive to Jodhpur. Check in at the hotel and proceed for a local city tour. Jodhpur, stronghold of the fierce Rathore clan, was founded in 1459 by Prince Jodha. Visit Mehrangarh Fort (on a low sandstone hill) and, within it, Moti Mahal and Phool Mahal. Continue to Jaswant Thada — an imposing marble cenotaph in memory of Maharaja Jaswant Singh II — and Umaid Public Gardens. Overnight in Jodhpur.",
      "Day 04 — Jodhpur → Ajmer → Pushkar: Morning drive to Pushkar, stopping at Ajmer and the Dargah en route. On arrival check in at the Pushkar hotel. Pushkar is best known for its 14th-century Brahma Temple on a high platform near Pushkar Lake — the only temple in the world where Lord Brahma is worshipped. With over 500 temples and ghats, Pushkar is also famous for its annual Camel Fair held during October/November. Visit the temples and overnight at the hotel.",
      "Day 05 — Pushkar → Jaipur (Departure): Early morning drive to Jaipur. Drop at Jaipur Railway Station / Airport for your onward journey.",
    ],
  },
  {
    id: "kashmir",
    title: "Kashmir — Paradise on Earth",
    duration: "6 Nights / 7 Days",
    tagline: "Srinagar · Sonamarg · Gulmarg · Pahalgam",
    price: "From ₹17,500 per person",
    image: udaipurImg,
    highlights: ["Shikara ride on Dal Lake", "Gondola at Gulmarg", "Houseboat night in Srinagar"],
    days: [
      "Day 01 — Arrive Srinagar: Pickup from Srinagar Railway Station and transfer to the hotel. Local sightseeing in Srinagar including the famed Mughal Gardens and Dal Lake area. Overnight stay at New Mamta, Srinagar.",
      "Day 02 — Sonamarg Day Trip: After breakfast, full-day excursion to Sonamarg — the 'Meadow of Gold' — surrounded by snow-capped peaks and glaciers. Return to Srinagar in the evening. Overnight at New Mamta, Srinagar.",
      "Day 03 — Gulmarg Day Trip: After breakfast, day trip to Gulmarg — the 'Meadow of Flowers' — enjoy a gondola ride (at additional cost) for spectacular Himalayan views. Return to Srinagar. Overnight at New Mamta, Srinagar.",
      "Day 04 — Doodh Pathri Day Trip: Full-day excursion to Doodh Pathri, the 'Valley of Milk', a pristine alpine meadow ideal for photography and leisure. Return to Srinagar. Overnight at New Mamta, Srinagar.",
      "Day 05 — Srinagar → Pahalgam: After breakfast drive to Pahalgam with sightseeing on the way (saffron fields of Pampore, Avantipura ruins and Anantnag). On arrival, check in. Overnight stay at Pahalgam.",
      "Day 06 — Pahalgam Sightseeing → Srinagar: Enjoy Pahalgam sightseeing including Aru Valley, Betaab Valley and Chandanwari (at additional cost). Return to Srinagar in the evening and check in to a deluxe houseboat. Overnight stay on a Houseboat.",
      "Day 07 — Departure: After breakfast, enjoy a Shikara ride on Dal Lake before transfer to Srinagar Airport for your onward journey. Tour ends.",
    ],
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
  { id: "innova", name: "Innova / Innova Crysta", desc: "Toyota Innova & Innova Crysta", image: innovaCar, capacity: "5 + 1", price: "₹20 / km", features: ["Spacious cabin", "Captain seats", "Ample luggage"] },
  { id: "tempo", name: "Tempo Traveller", desc: "12–17 seater for groups", image: tempo, capacity: "12 / 17", price: "₹28 / km", features: ["Reclining seats", "Push back", "Ample boot"] },
];
