import { ServiceItem, ReviewItem, GalleryProject } from '../types';

export const BUSINESS_DETAILS = {
  name: "Windoworx Cleaning Services",
  shortName: "Windoworx",
  serviceType: "Window cleaning service",
  phone: "+447708200506",
  phoneDisplay: "+44 7708 200506",
  localPhone: "07708 200506",
  email: "info@windoworxcleaningservices.co.uk",
  address: "6 Broadstone Way, Tong Street, Bradford BD4 9RX, United Kingdom",
  street: "6 Broadstone Way, Tong Street",
  locality: "Bradford",
  postcode: "BD4 9RX",
  country: "United Kingdom",
  operatingHours: "Monday – Saturday: 07:30 – 18:30 (Sunday by appointment)",
  emergencyNotice: "Regular 4-weekly, 8-weekly, and one-off window cleaning slots available in Bradford & West Yorkshire.",
  coverageRadius: "Covering Bradford (BD1–BD22), Tong Street, Birkenshaw, Drighlington, Pudsey, Leeds, and surrounding West Yorkshire areas within 20 miles",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "residential-windows",
    title: "Residential Pure Water Window Cleaning",
    shortDesc: "Spotless, streak-free window cleaning using ultra-pure 100% de-ionised water. Frames, sills, and front & back doors washed clean every visit as standard.",
    fullDesc: "We use high-reach telescopic carbon-fibre water-fed pole systems with pure reverse-osmosis de-ionised water. Because pure water contains zero minerals or detergents, windows dry naturally 100% streak-free with no residue to attract fresh dust.",
    iconName: "Sparkles",
    typicalTime: "45 – 90 mins",
    startingPrice: 20,
    unit: "per clean (2-3 bed house)",
    features: [
      "Frames, sills, and external doors cleaned as standard",
      "Pure de-ionised water leaves zero water spots or streaks",
      "Safely reaches 3rd & 4th floor windows from the ground",
      "Available as regular 4/8-weekly clean or one-off service"
    ],
    recommendedFrequency: "Every 4 to 8 weeks",
    image: "/src/assets/images/hero_window_cleaning_1791649368804.jpg"
  },
  {
    id: "conservatory-clean",
    title: "Conservatory Roof & Glass Deep Clean",
    shortDesc: "Specialist non-abrasive restoration for glass and polycarbonate conservatory roofs, removing green algae, moss, lichen, and ingrained grime.",
    fullDesc: "Conservatories gather heavy green algae and moss over British winters. Our specialized soft-bristle brushes and pure water flushing restore crystal-clear overhead light while carefully protecting delicate rubber seals and decorative finials.",
    iconName: "Layers",
    typicalTime: "2 – 3 hours",
    startingPrice: 65,
    unit: "roof & surrounding glass",
    features: [
      "Eliminates slippery green moss, bird lime & lichen",
      "Safe on polycarbonate panels and self-cleaning glass",
      "Decorative finials, crestings & gutters washed down",
      "Restores natural interior sunlight to your living space"
    ],
    recommendedFrequency: "Biannually or annually",
    image: "/src/assets/images/gallery_conservatory_clean_1791649387362.jpg"
  },
  {
    id: "fascia-gutters",
    title: "UPVC Fascia, Soffit & Gutter Clearance",
    shortDesc: "Complete exterior UPVC washdown that restores dirty grey and stained rooflines back to gleaming brilliant white, paired with vacuum debris clearance.",
    fullDesc: "Dirty rooflines drag down the curb appeal of any home. We clean exterior gutters, soffits, and fascias using eco-friendly citrus foaming detergents followed by pure water rinsing, safely lifting atmospheric road traffic film and damp stains.",
    iconName: "ShieldCheck",
    typicalTime: "2 – 4 hours",
    startingPrice: 75,
    unit: "full house roofline",
    features: [
      "Lifts black mildew, traffic film & grime from white UPVC",
      "Internal gutter vacuum clearance available",
      "Downpipe flush and blockage check included",
      "Protects against damp penetration and overflow damage"
    ],
    recommendedFrequency: "Annually in spring or autumn",
    image: "/src/assets/images/gallery_fascia_gutters_1791649423755.jpg"
  },
  {
    id: "commercial-windows",
    title: "Commercial & Shopfront Window Cleaning",
    shortDesc: "Reliable, scheduled window cleaning contracts for retail shops, offices, car showrooms, schools, and business premises throughout Bradford.",
    fullDesc: "Ensure your business makes an immaculate first impression on clients and visitors. We offer tailored cleaning frequencies (weekly, bi-weekly, or monthly) with full RAMS, £5M public liability insurance, and out-of-hours service to avoid disrupting trade.",
    iconName: "Truck",
    typicalTime: "Tailored to site",
    startingPrice: 40,
    unit: "per visit / retail unit",
    features: [
      "Early morning or out-of-hours cleaning schedules",
      "Full health & safety compliance, RAMS provided",
      "Signage, entrance canopies & glass balustrades included",
      "Invoiced monthly with instant digital BACS receipts"
    ],
    recommendedFrequency: "Weekly, bi-weekly or monthly",
    image: "/src/assets/images/gallery_residential_windows_1791649409377.jpg"
  },
  {
    id: "solar-panel-cleaning",
    title: "Solar Panel Pure Water Washing",
    shortDesc: "Chemical-free pure water cleaning for rooftop solar arrays, eliminating dust and bird droppings to boost solar generation efficiency by up to 25%.",
    fullDesc: "Dust, soot, pollen, and bird droppings form a stubborn film on photovoltaic cells, substantially lowering power yield. We wash panels with ultra-soft brushes and mineral-free pure water so no chemical film or limescale residue remains.",
    iconName: "Compass",
    typicalTime: "1 – 2 hours",
    startingPrice: 50,
    unit: "up to 12 panels",
    features: [
      "Zero chemicals or abrasive scouring to protect anti-reflective coat",
      "Restores maximum sunlight absorption and kilowatt output",
      "Safe high-reach ground pole access with no roof walking",
      "Detailed visual inspection of panel condition"
    ],
    recommendedFrequency: "Annually or biannually",
    image: "/src/assets/images/hero_window_cleaning_1791649368804.jpg"
  },
  {
    id: "full-house-valet",
    title: "Complete Exterior Glass & UPVC Valet",
    shortDesc: "The ultimate property exterior package: all exterior windows, sills, frames, doors, conservatory, and full gutter & fascia washdown at a bundled rate.",
    fullDesc: "A complete transformation for homeowners preparing to sell, moving into a new property, or giving their home an exhaustive spring makeover. We clean every pane, skylight, conservatory panel, and UPVC surface from ground to gutter.",
    iconName: "CheckCircle2",
    typicalTime: "Half to full day",
    startingPrice: 140,
    unit: "full property valet",
    features: [
      "All windows, sills, frames, and composite doors",
      "Full conservatory roof and side glass panels",
      "Exterior gutter, fascia, and soffit chemical wash",
      "15% bundled savings compared to separate bookings"
    ],
    recommendedFrequency: "Annually",
    image: "/src/assets/images/gallery_conservatory_clean_1791649387362.jpg"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Tariq M.",
    location: "Tong Street, Bradford (BD4)",
    rating: 5.0,
    date: "1 week ago",
    service: "Regular Residential Window Cleaning",
    text: "Windoworx have been cleaning our windows on Tong Street for the past 6 months. Reliable, friendly, and they actually take the time to scrub all the UPVC sills and frames properly, not just splash water on the glass. Fantastic local Bradford service.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Karen & Steve P.",
    location: "Birkenshaw (BD11)",
    rating: 5.0,
    date: "3 weeks ago",
    service: "Conservatory Roof & Window Deep Clean",
    text: "Our conservatory roof was covered in green moss and black grime after the winter. Windoworx arrived promptly with their water-fed reach system and made it look brand new again. Crystal clear view of the sky now. Highly recommended!",
    verified: true
  },
  {
    id: "rev-3",
    author: "David H.",
    location: "Pudsey (LS28 / BD boundary)",
    rating: 5.0,
    date: "1 month ago",
    service: "Fascia, Soffit & Gutter Wash",
    text: "Called +44 7708 200506 on Tuesday and they came out on Thursday. Restored all our grubby yellowing UPVC fascias back to gleaming white. Fair price and very tidy work.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Amina R.",
    location: "Bradford Central (BD1)",
    rating: 5.0,
    date: "2 months ago",
    service: "Shopfront Window Cleaning",
    text: "Windoworx cleans our retail storefront every fortnight before opening hours. Always spotless, streak-free glass and very easy monthly invoicing. Great communication on WhatsApp.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Chris L.",
    location: "Drighlington (BD11)",
    rating: 5.0,
    date: "3 months ago",
    service: "4-Bed Detached Pure Water Clean",
    text: "Hard-to-reach 3rd floor velux windows and dormers were no problem with their carbon poles. Pure water leaves zero spots when it dries. Best window cleaners we have used in West Yorkshire.",
    verified: true
  },
  {
    id: "rev-6",
    author: "Sophie W.",
    location: "Baildon / Shipley (BD17)",
    rating: 5.0,
    date: "4 months ago",
    service: "Exterior Glass & Conservatory Valet",
    text: "Courteous, punctual, and very thorough. The difference on our bi-fold doors and conservatory was night and day. Will be setting up a regular 8-weekly schedule with them.",
    verified: true
  },
  {
    id: "rev-7",
    author: "Mark B.",
    location: "Low Moor, Bradford (BD12)",
    rating: 5.0,
    date: "5 months ago",
    service: "Solar Panel & Window Clean",
    text: "Had both our rooftop solar panels and house windows cleaned. Noticeable bump in our solar inverter output immediately. Honest, hard-working team based right here on Broadstone Way.",
    verified: true
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "gal-1",
    title: "Residential House Pure Water Window & Frame Clean",
    category: "patio",
    location: "Tong Street, Bradford (BD4)",
    surface: "Exterior Glass & White UPVC Frames",
    image: "/src/assets/images/hero_window_cleaning_1791649368804.jpg",
    beforeDesc: "Dirty traffic film, dust streaks, cobwebs, and ingrained dirt on window sills.",
    afterDesc: "Spotless crystal clear panes with all sills and frames washed pristine white.",
    areaSize: "Full 3-Bed Semi",
    turnaround: "55 Mins",
    technique: "Telescopic carbon pole + 100% pure de-ionised water"
  },
  {
    id: "gal-2",
    title: "Full Glass Conservatory Roof Restoration",
    category: "decking",
    location: "Birkenshaw, Bradford (BD11)",
    surface: "Self-Cleaning Glass Panels & Polycarbonate",
    image: "/src/assets/images/gallery_conservatory_clean_1791649387362.jpg",
    beforeDesc: "Dense moss accumulation along roof seals, green algae staining, bird lime.",
    afterDesc: "100% transparent glass restored with sparkling white decorative ridge cresting.",
    areaSize: "Victorian Conservatory (4m x 3.5m)",
    turnaround: "2.5 Hours",
    technique: "Low-friction soft bristle wash + pure water rinse"
  },
  {
    id: "gal-3",
    title: "UPVC Roofline, Soffit & Gutter Exterior Wash",
    category: "walls",
    location: "Drighlington, West Yorkshire",
    surface: "UPVC Gutters & Fascia Boards",
    image: "/src/assets/images/gallery_fascia_gutters_1791649423755.jpg",
    beforeDesc: "Heavy black streak marks, winter grime overflow, and green algae coat.",
    afterDesc: "Restored to brilliant bright white factory finish with all downpipes flushed.",
    areaSize: "Full Detached Property (35m run)",
    turnaround: "3 Hours",
    technique: "Bio-friendly citrus foam soak + high-reach brush wash"
  },
  {
    id: "gal-4",
    title: "Leaded & Modern Residential Window Panes",
    category: "driveway",
    location: "Bradford South (BD6)",
    surface: "Traditional Leaded Windows & Timber Sills",
    image: "/src/assets/images/gallery_residential_windows_1791649409377.jpg",
    beforeDesc: "Water-spotted leaded glass with accumulated grime along leading joins.",
    afterDesc: "Immaculate streak-free diamond panes with water sheeting smoothly off.",
    areaSize: "16 Window Panes + Porch",
    turnaround: "1 Hour",
    technique: "Pure water de-mineralised wash with horsehair detailing brush"
  }
];

export const ADDONS_LIST = [
  {
    id: "sills-frames",
    name: "Deep Sills & Frames Detailing",
    price: 10,
    desc: "Intensive chemical restoration for discoloured or weathered UPVC window frames."
  },
  {
    id: "conservatory-roof",
    name: "Conservatory Roof Wash",
    price: 45,
    desc: "Full moss, algae and bird lime removal from overhead glass or polycarbonate panels."
  },
  {
    id: "fascia-clean",
    name: "Fascias & Soffits Washdown",
    price: 35,
    desc: "High-reach foaming wash of exterior gutter plastics and white roofline boards."
  },
  {
    id: "solar-panels",
    name: "Solar Panel Wash (up to 8 panels)",
    price: 30,
    desc: "Pure water cleaning to maximize electricity generation without leaving water stains."
  }
];

export const COVERAGE_AREAS = [
  "Bradford Central (BD1)",
  "Tong Street & Holme Wood (BD4)",
  "Birkenshaw & Drighlington (BD11)",
  "Low Moor & Wyke (BD12)",
  "Clayton & Allerton (BD14, BD15)",
  "Shipley & Saltaire (BD18)",
  "Bingley & Cottingley (BD16)",
  "Baildon & Esholt (BD17)",
  "Pudsey & Farsley (LS28)",
  "Leeds West & Morley (LS27)",
  "Dewsbury & Batley (WF12, WF17)",
  "Halifax & Hipperholme (HX3)"
];

export const FAQS = [
  {
    question: "Why do you use pure water instead of soapy water and a squeegee?",
    answer: "Traditional soapy water leaves an invisible detergent film on the glass that acts like a magnet for fresh dust and pollen. Our purified reverse-osmosis water has had all minerals removed (0 PPM). When sprayed and rinsed with our soft carbon-fibre brushes, it absorbs dirt and evaporates naturally leaving zero spots, streaks, or residue."
  },
  {
    question: "Do you clean the window frames and sills as well as the glass?",
    answer: "Yes, absolutely! At Windoworx Cleaning Services, cleaning the frames, sills, and external doors is included in our standard residential service every single time, not charged as an extra."
  },
  {
    question: "Can you reach windows above conservatories or on 3rd floors?",
    answer: "Yes. Our telescopic carbon-fibre water-fed pole systems reach up to 45 feet (4 storeys) safely from ground level. This means we can effortlessly clean difficult dormer windows, townhouses, and panes situated above conservatories or garage extensions without needing ladders leaning against your walls."
  },
  {
    question: "Do I need to be home when you clean the windows?",
    answer: "No, as long as we have unlocked side or back gate access to reach the rear of your property. We always send a reminder SMS the evening prior to our visit, and you can pay conveniently via bank transfer (BACS) or card after the clean."
  },
  {
    question: "Where are you based and how quickly can you start?",
    answer: "We are based at 6 Broadstone Way, Tong Street, Bradford BD4 9RX. We operate daily across Bradford and surrounding West Yorkshire areas. We can often provide quotes within 1 hour and book your clean within 2 to 4 days. Call or WhatsApp us directly on +44 7708 200506."
  },
  {
    question: "What happens if it rains after my windows are cleaned?",
    answer: "Clean rain water on clean glass does not make windows dirty—dust and mineral residue from old detergents do! Because our pure water leaves no sticky film behind, rain simply runs off cleanly. Furthermore, we offer a 24-hour satisfaction guarantee: if you spot any imperfections, we'll re-clean it free of charge."
  }
];
