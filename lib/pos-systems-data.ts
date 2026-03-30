// POS catalog by industry — edit entries here as needed.
export const POS_INDUSTRIES = [
  "Retail",
  "Food & Beverage",
  "Hospitality",
  "Healthcare & Medical",
  "Entertainment & Recreation",
  "Sports & Fitness",
  "Automotive",
  "Home & Property Services",
  "Professional Services",
  "Education & Childcare",
  "Events & Venues",
  "Transportation",
  "Government & Public",
  "Agriculture & Farming",
  "Specialty Retail",
  "Marine & Boating",
  "Beauty & Personal Care",
  "Technology & Electronics",
  "Construction & Trades",
  "Nonprofits & Community",
  "Wholesale & Distribution"
] as const

export type PosIndustry = (typeof POS_INDUSTRIES)[number]

export type PosSystemEntry = {
  name: string
  description: string
  industry: PosIndustry
  link?: string
}

export const POS_SYSTEM_ENTRIES: PosSystemEntry[] = [
  {
    name: "Grocery Stores/Supermarkets",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail",
    link: "https://supermarketpos.clickmasters.pk/"
  },
  {
    name: "Convenience Stores (C-Stores)",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Department Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Clothing & Apparel Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail",
    link: "https://clothingpos.clickmasters.pk/"
  },
  {
    name: "Shoe Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Jewelry Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Electronics Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Bookstores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Toy Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Sporting Goods Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Home Improvement Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Furniture Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Pet Supply Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Garden Centers/Nurseries",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Hardware Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Art Supply Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Music Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Craft Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Office Supply Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Automotive Parts Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Dollar Stores/Discount Retailers",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Thrift Stores/Consignment Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Pawn Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Vape Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Cannabis Dispensaries",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Pop-Up Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Flea Markets/Vendors",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Gift Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Souvenir Shops",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Antique Stores",
    description:
      "Multi-register checkout, inventory, variants, and promotions tailored for retail.",
    industry: "Retail"
  },
  {
    name: "Quick Service Restaurants (QSR)",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Fast Casual Restaurants",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Full Service Restaurants",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Fine Dining",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Cafes & Coffee Shops",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Bars & Nightclubs",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Breweries",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Wineries/Vineyards",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Food Trucks",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Bakeries",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Ice Cream Shops",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Pizza Restaurants",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Delis/Sandwich Shops",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Juice Bars/Smoothie Shops",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Food Courts",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Catering Services",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Ghost Kitchens/Virtual Restaurants",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Food Halls",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Meal Prep Services",
    description:
      "Orders, kitchen or bar workflows, modifiers, tabs, and fast service.",
    industry: "Food & Beverage"
  },
  {
    name: "Hotels",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Motels",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Resorts",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Bed & Breakfasts",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Hostels",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Vacation Rentals",
    description:
      "Guest services, bookings, packages, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Spas & Wellness Centers",
    description:
      "Appointments, packages, memberships, and retail add-ons for day spas and wellness studios.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Tattoo & Piercing Studios",
    description:
      "Appointments, deposits, retail aftercare products, and tip handling.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Fitness Centers/Gyms",
    description:
      "Memberships, class packs, pro shop retail, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Yoga/Pilates Studios",
    description:
      "Class packs, memberships, mat retail, and drop-in sales.",
    industry: "Sports & Fitness"
  },
  {
    name: "Country Clubs",
    description:
      "Memberships, guest charges, dining, golf, and property-specific sales.",
    industry: "Hospitality"
  },
  {
    name: "Pharmacies",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Medical Clinics",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Dental Practices",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Veterinary Clinics",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Optical Stores",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Medical Spas",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Chiropractic Offices",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Physical Therapy Centers",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Mental Health Practices",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Alternative Medicine Clinics",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Cannabis Dispensaries (Medical)",
    description:
      "Compliance-friendly checkout, appointments, and patient or client billing.",
    industry: "Healthcare & Medical"
  },
  {
    name: "Movie Theaters",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Concert Venues",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Sports Stadiums/Arenas",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Bowling Alleys",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Arcades/Gaming Centers",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Escape Rooms",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Mini Golf/Go-Kart Tracks",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Amusement Parks",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Water Parks",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Trampoline Parks",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Laser Tag Facilities",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Museums & Galleries",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Aquariums & Zoos",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Botanical Gardens",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Theaters (Live Performance)",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Comedy Clubs",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Karaoke Bars",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Casinos",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Bingo Halls",
    description:
      "Ticketing, concessions, timed sessions, and venue retail.",
    industry: "Entertainment & Recreation"
  },
  {
    name: "Golf Courses",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Tennis Clubs",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Swimming Pools (Public)",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Ice Skating Rinks",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Rock Climbing Gyms",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Martial Arts Studios",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Dance Studios",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "CrossFit Boxes",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Cycling Studios",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Boxing Gyms",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Sports Training Facilities",
    description:
      "Memberships, bookings, pro shops, and facility payments.",
    industry: "Sports & Fitness"
  },
  {
    name: "Auto Repair Shops",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Car Washes",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Auto Detailing",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Tire Shops",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Oil Change Centers",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Car Dealerships",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Auto Parts Stores",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Smog Check Stations",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Motorcycle Shops",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "RV Dealerships & Service",
    description:
      "Service orders, parts lookup, labor lines, and vehicle records.",
    industry: "Automotive"
  },
  {
    name: "Cleaning Services",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Dry Cleaners/Laundromats",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Tailoring/Alterations",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Locksmiths",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Appliance Repair",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Pest Control",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Lawn Care/Landscaping",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Pool Service",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Moving Companies",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Storage Facilities",
    description:
      "Jobs, invoices, deposits, and recurring service billing.",
    industry: "Home & Property Services"
  },
  {
    name: "Printing Services",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Copy Centers",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Shipping Stores (UPS/FedEx)",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Photography Studios",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Photo Labs",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Travel Agencies",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Real Estate Offices",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Law Firms",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Accounting Firms",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Consulting Firms",
    description:
      "Time billing, retainers, and client-ready receipts.",
    industry: "Professional Services"
  },
  {
    name: "Bookstores (Campus)",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "School Cafeterias",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Daycare Centers",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "After-School Programs",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Tutoring Centers",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Music Schools",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Art Schools",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Dance Schools",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Driving Schools",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Language Schools",
    description:
      "Tuition, meal plans, campus retail, and program fees.",
    industry: "Education & Childcare"
  },
  {
    name: "Wedding Venues",
    description:
      "Deposits, packages, rentals, and day-of-event sales.",
    industry: "Events & Venues"
  },
  {
    name: "Conference Centers",
    description:
      "Deposits, packages, rentals, and day-of-event sales.",
    industry: "Events & Venues"
  },
  {
    name: "Banquet Halls",
    description:
      "Deposits, packages, rentals, and day-of-event sales.",
    industry: "Events & Venues"
  },
  {
    name: "Party Rental Companies",
    description:
      "Deposits, packages, rentals, and day-of-event sales.",
    industry: "Events & Venues"
  },
  {
    name: "Event Planning Services",
    description:
      "Deposits, packages, rentals, and day-of-event sales.",
    industry: "Events & Venues"
  },
  {
    name: "Taxi Services",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Parking Lots/Garages",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Toll Booths",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Car Rental Agencies",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Bike Rentals",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Boat Rentals",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Storage Locker Rentals (Transit)",
    description:
      "Fares, rentals, passes, and quick lane transactions.",
    industry: "Transportation"
  },
  {
    name: "Parks & Recreation",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "Public Libraries",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "DMV/License Offices",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "Post Offices",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "Courthouses",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "Municipal Utility Payments",
    description:
      "Fees, permits, utility payments, and civic-facing checkout.",
    industry: "Government & Public"
  },
  {
    name: "Farm Stands",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Farmers Markets",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Feed Stores",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Nurseries/Greenhouses",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "U-Pick Farms",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Wineries/Vineyards",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Breweries (Farm)",
    description:
      "Seasonal products, weight-based sales, and farm retail.",
    industry: "Agriculture & Farming"
  },
  {
    name: "Vending Machines",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Kiosks (Mall/Airport)",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Mobile Vendors (Street Carts)",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Lottery/Convenience",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Coin-Operated Laundry",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Self-Storage Payment Kiosks",
    description:
      "Unattended or high-traffic sales with flexible payment flows.",
    industry: "Specialty Retail"
  },
  {
    name: "Marina Stores",
    description:
      "Charters, slips, retail, and marine service billing.",
    industry: "Marine & Boating"
  },
  {
    name: "Fishing Charter Services",
    description:
      "Charters, slips, retail, and marine service billing.",
    industry: "Marine & Boating"
  },
  {
    name: "Boat Launch Facilities",
    description:
      "Charters, slips, retail, and marine service billing.",
    industry: "Marine & Boating"
  },
  {
    name: "Scuba Diving Shops",
    description:
      "Charters, slips, retail, and marine service billing.",
    industry: "Marine & Boating"
  },
  {
    name: "Hair Salons",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Barber Shops",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Nail Salons",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Waxing Studios",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Makeup Salons",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Tanning Salons",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Spa Services",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Massage Therapy",
    description:
      "Appointments, tips, memberships, and retail add-ons.",
    industry: "Beauty & Personal Care"
  },
  {
    name: "Computer Repair Shops",
    description:
      "Repairs, warranties, serialized inventory, and trade-ins.",
    industry: "Technology & Electronics"
  },
  {
    name: "Cell Phone Stores",
    description:
      "Repairs, warranties, serialized inventory, and trade-ins.",
    industry: "Technology & Electronics"
  },
  {
    name: "Electronics Repair",
    description:
      "Repairs, warranties, serialized inventory, and trade-ins.",
    industry: "Technology & Electronics"
  },
  {
    name: "3D Printing Services",
    description:
      "Repairs, warranties, serialized inventory, and trade-ins.",
    industry: "Technology & Electronics"
  },
  {
    name: "Lumber Yards",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Tile Showrooms",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Flooring Stores",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Paint Stores",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Electrical Supply",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Plumbing Supply",
    description:
      "Quotes, job costing, contractor pricing, and will-call pickup.",
    industry: "Construction & Trades"
  },
  {
    name: "Thrift Stores (Charity)",
    description:
      "Donations, discounts, and mission-driven retail.",
    industry: "Nonprofits & Community"
  },
  {
    name: "Museum Gift Shops",
    description:
      "Donations, discounts, and mission-driven retail.",
    industry: "Nonprofits & Community"
  },
  {
    name: "Community Centers",
    description:
      "Donations, discounts, and mission-driven retail.",
    industry: "Nonprofits & Community"
  },
  {
    name: "Food Banks",
    description:
      "Donations, discounts, and mission-driven retail.",
    industry: "Nonprofits & Community"
  },
  {
    name: "Wholesale Clubs",
    description:
      "Bulk pricing, accounts, and delivery or pickup workflows.",
    industry: "Wholesale & Distribution"
  },
  {
    name: "Cash & Carry Stores",
    description:
      "Bulk pricing, accounts, and delivery or pickup workflows.",
    industry: "Wholesale & Distribution"
  },
  {
    name: "Restaurant Supply Stores",
    description:
      "Bulk pricing, accounts, and delivery or pickup workflows.",
    industry: "Wholesale & Distribution"
  }
]
