import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Building2,
  HardHat,
  Palette,
  Zap,
  Droplets,
  Wrench,
  Wind,
  Settings,
  Hammer,
  Users,
  ShieldCheck,
  Factory,
  Boxes,
  PackageCheck,
  Layers,
  Sun,
  Recycle,
  PaintRoller,
  Construction,
  Paintbrush2,
  SprayCan,
  Grid2X2,
  Flame,
  ClipboardList,
  User,
  UserCheck,
  Siren,
  Warehouse,
  Cog,
  Blocks,
  Home,
  Ruler,
  LayoutGrid // ✅ ADD THIS
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    icon: HardHat, // changed from Building2
    title: "Civil Construction",
    description: "Complete structural and civil engineering solutions for commercial and residential projects.",
    color: "from-sky-400 to-sky-600", // brighter gradient
    videoFile: "excavation.mp4",
    features: [
      "Structural precision work",
      "Experienced civil engineers",
      "Industrial, Commercial and residential works"
    ]
  },
  {
    icon: Users, // changed from PaintBucket
    title: "Manpower Supply",
    description: "Skilled, semi-skilled, and general workforce solutions.",
    color: "from-green-400 to-green-600",
    videoFile: "manpower.mp4",
    features: [
      "Certified skilled workers",
      "Indoor, Outdoor & Garden Cleaning",
      "Semi-skilled workers"
    ]
  },
  {
    icon: Factory, // kept same, relevant
    title: "Exterior Glass Fitting",
    description: "Stunning exterior cladding, facades, and finishing solutions.",
    color: "from-purple-400 to-purple-600", // more distinct purple gradient
    videoFile: "glass.mp4",
    features: [
      "High-quality glass installation",
      "Aluminum glass frames",
      "Advanced safety compliance"
    ]
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Complete electrical installations, maintenance, and smart systems.",
    color: "from-yellow-400 to-yellow-600", // adjusted gradient
    videoFile: "electrical.mp4",
    features: [
      "Wiring & panel installation",
      "Smart automation systems",
      "24/7 emergency repair"
    ]
  },
  {
    icon: Droplets,
    title: "Plumbing Works",
    description: "Professional plumbing installations and water management systems.",
    color: "from-blue-400 to-blue-600",
    videoFile: "plumbing.mp4",
    features: [
      "Leak detection & repair",
      "Water tank & pipeline setup",
      "Heavy equipment with drivers"
    ]
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    description: "Advanced mechanical engineering and equipment installation services.",
    color: "from-gray-400 to-gray-600",
    videoFile: "construction.mp4",
    features: [
      "Heavy equipment setup",
      "Industrial mechanical support",
      "Preventive maintenance"
    ]
  },
  {
    icon: Wind,
    title: "HVAC Services",
    description: "Climate control solutions for optimal comfort and energy efficiency.",
    color: "from-teal-400 to-teal-600",
    videoFile: "hvac.mp4",
    features: [
      "Ducting installation",
      "Chiller & split unit service",
      "Energy-efficient systems"
    ]
  },
  {
    icon: Settings, // changed from Settings
    title: "Facility Maintenance",
    description: "Comprehensive facility management and maintenance services.",
    color: "from-purple-500 to-purple-700", // brighter purple
    videoFile: "cleaning.mp4",
    features: [
      "Daily & periodic maintenance",
      "Indoor & Outdoor cleaning",
      "Male and female cleaners"
    ]
  },
  {
    icon: Hammer,
    title: "Renovation Works",
    description: "Complete renovation and refurbishment of existing structures.",
    color: "from-orange-400 to-orange-600", // warmer gradient
    videoFile: "maintenance.mp4",
    features: [
      "Modern design upgrades",
      "Structure remodelling",
      "Cost-efficient refurbishment"
    ]
  },
  {
    icon: Palette, // changed from Users
    title: "Networking & IT Services",
    description: "Data operators with efficient file handling.",
    color: "from-green-500 to-green-700", // distinct gradient
    videoFile: "networking.mp4",
    features: [
      "Data Entry",
      "Network Setup & Configuration",
      "System Troubleshooting & Support"
    ]
  },

  {
    icon: User, // changed from ShieldCheck
    title: "Fitout Works",
    description: "High-quality interior and exterior fitout services.",
    color: "from-red-400 to-red-600",
    videoFile: "fitout.mp4",
    features: [
      "Premium finishing",
      "Custom carpentry",
      "Turnkey fitout solutions"
    ]
  },
  {
    icon: Factory, // kept same, industrial relevant
    title: "Industrial Support",
    description: "Industrial facility support and operational assistance.",
    color: "from-slate-700 to-slate-900", // darker gradient
    videoFile: "conn.mp4", // updated video name
    features: [
      "Industrial manpower",
      "Process optimization",
      "Factory maintenance"
    ]
  },
  {
    icon: HardHat, // kept same, relevant to shelters
    title: "Shelter Works",
    description: "Parking, residential, and stadium shelters with precision welding, high-quality fabrication, and full installation, executed by Obeikan Company through our skilled, reliable, and well-trained manpower team.",
    color: "from-amber-400 to-amber-600",
    videoFile: "shed.mp4", // updated video name
    features: [
      "Durable",
      "Structural",
      "Efficient & Safe"
    ]
  },
  {
    icon: Wrench, // changed from Factory for welding
    title: "6G Weldings",
    description: "Heavy welding services for industrial and residential structures, including 3G, 4G, and 6G welding, carried out by certified and highly experienced welders to ensure strength, precision, and durability.",
    color: "from-gray-500 to-gray-700", // metallic color gradient
    videoFile: "6gg.mp4", // updated video name
    features: [
      "3G 4G 6G Heavy weldings",
      "Industrial manpower"
    ]
  },
  {
    icon: Boxes, // new icon for glass installation
    title: "Glass Installation",
    description: "Glass cutting and installation services carried out with precision, safety, and quality workmanship. Suitable for residential, commercial, and industrial applications, ensuring a perfect fit and durable finish.",
    color: "from-cyan-400 to-cyan-600",
    videoFile: "glasss.mp4", // updated video name
    features: [
      "Glass Cutting",
      "Glass Industries",
      "Accuracy & Precision"
    ]
  },
  {
    icon: Wrench, // kept, relevant for aluminium
    title: "Aluminium Cladding Installation",
    description: "Aluminum cladding installation executed with accuracy and quality workmanship. Ideal for commercial, residential, and industrial buildings.",
    color: "from-indigo-400 to-indigo-600",
    videoFile: "cladding.mp4",
    features: [
      "Durable",
      "Light weight",
      "Weatherproof"
    ]
  },
  {
    icon: Wind, // HVAC related, reused for GRC
    title: "GRC Panel Installation",
    description: "GRC panel installation services providing strong, lightweight, and architecturally finished solutions for building facades and structural elements.",
    color: "from-teal-400 to-teal-600",
    videoFile: "grcc.mp4",
    features: [
      "Durable",
      "Light weight",
      "Weatherproof"
    ]
  },
  {
    icon: ShieldCheck, // safety/compliance for gypsum
    title: "Gypsum Board Installation",
    description: "Gypsum board installation for ceilings and partitions, suitable for residential, commercial, and industrial spaces. Executed with precision to deliver smooth finishes and proper alignment.",
    color: "from-purple-400 to-purple-600",
    videoFile: "gypsum.mp4",
    features: [
      "Smooth",
      "Durable",
      "Versatile"
    ]
  },
  {
    icon: HardHat, // construction related
    title: "Structure Erection",
    description: "Structure erection works across multiple locations in the KSA, executed with skilled manpower, strict safety compliance, and precise installation for industrial and commercial projects.",
    color: "from-sky-400 to-sky-600",
    videoFile: "st.mp4",
    features: [
      "Safe",
      "Precise",
      "Reliable"
    ]
  },
  {
    icon: Wind, // ducting / airflow
    title: "Ducting Installation",
    description: "Ducting installation services for HVAC systems, ensuring efficient airflow, proper sealing, and reliable performance across residential, commercial, and industrial projects.",
    color: "from-red-400 to-red-600",
    videoFile: "duct.mp4",
    features: [
      "Efficient",
      "Sealed",
      "Reliable"
    ]
  },

  {
    icon: Droplets, // plumbing related
    title: "Plumbing Works",
    description: "Plumbing works services covering installation, maintenance, and repair of water supply and drainage systems for residential, commercial, and industrial projects, executed with quality.",
    color: "from-teal-400 to-teal-600",
    videoFile: "plum.mp4",
    features: [
      "Industrial Plumbing",
      "Water Supply Systems",
      "Drainage & Sanitary Works"
    ]
  },
  {
    icon: SprayCan, // pipe fitting icon (use relevant lucide icon if available)
    title: "Pipe Fitting",
    description: "Pipe fitting services for industrial, commercial, and residential projects, including installation, alignment, and jointing of piping systems to ensure safe and efficient flow operations.",
    color: "from-indigo-400 to-indigo-600",
    videoFile: "pipe.mp4",
    features: [
      "Process & Utility Lines",
      "Industrial Pipe Fitting",
      "Maintenance & Replacement Works"
    ]
  },
  {
    icon: Droplets, // fire fighting system icon
    title: "Fire Fighting System",
    description: "Fire fighting system installation and maintenance works for industrial, commercial, and residential projects, including piping, pumps, valves, and safety equipment, executed with safety.",
    color: "from-red-400 to-red-600",
    videoFile: "fire.mp4",
    features: [
      "Fire Sprinkler Systems",
      "Hydrant & Hose Reel Systems",
      "Fire Pump Installation"
    ]
  },
  {
    icon: Settings, // kept same, electrical control panel
    title: "Internal Panel Wiring Installation",
    description: "Internal panel wiring installation services for electrical distribution panels, ensuring safe power distribution with proper cable routing and secure terminations.",
    color: "from-purple-400 to-purple-600",
    videoFile: "wire.mp4",
    features: [
      "Control Panel Wiring",
      "Distribution Board Wiring",
      "Power & Control Circuits"
    ]
  },
  {
    icon: Zap, // kept, electrical
    title: "Electric House Wiring",
    description: "Electrical house wiring installation services covering lighting, power points, and distribution systems, ensuring safe, efficient, and code-compliant wiring for residential projects.",
    color: "from-yellow-400 to-orange-500",
    videoFile: "elec.mp4",
    features: [
      "Lighting Circuits",
      "Power Socket Wiring",
      "Distribution Board Connection"
    ]
  },
  {
    icon: Zap, // electrical / high voltage
    title: "Low & High Voltage Cable Termination Works",
    description: "Low and high voltage cable termination services ensuring secure connections, proper insulation, and safe power transmission for various purposes.",
    color: "from-blue-400 to-blue-500",
    videoFile: "volt.mp4",
    features: [
      "LV Cable Termination",
      "HV Cable Termination",
      "Glanding & Lug Crimping"
    ]
  },
  {
    icon: Building2, // masonry/construction
    title: "Hollow Block Installation",
    description: "Professional hollow block installation delivering durable, precisely aligned, and load-bearing walls for residential, commercial, and large-scale industrial construction projects.",
    color: "from-orange-400 to-orange-600",
    videoFile: "mas.mp4",
    features: [
      "Masonry",
      "Structural",
      "Construction"
    ]
  },
  {
    icon: Hammer, // plastering/construction tool
    title: "Plastering Work",
    description: "Professional plastering work providing smooth, durable, and high-quality wall and ceiling finishes for residential, commercial, and industrial buildings.",
    color: "from-pink-400 to-pink-600",
    videoFile: "plas.mp4",
    features: [
      "Finishing",
      "Surface",
      "Construction"
    ]
  },
  {
    icon: ShieldCheck, // safety / compliance
    title: "Scaffolding Work",
    description: "Professional scaffolding work provided by certified workers, ensuring safe access, stability, and compliance for construction and industrial sites.",
    color: "from-emerald-400 to-emerald-600",
    videoFile: "scaff.mp4",
    features: ["Safety", "Access", "Compliance"]
  },
  {
    icon: Paintbrush2, // painting
    title: "Indoor & Outdoor Spray Painting Work",
    description: "High-quality indoor and outdoor roller and spray painting delivering smooth finishes, uniform coverage, and long-lasting protection.",
    color: "from-rose-400 to-rose-600",
    videoFile: "painti.mp4",
    features: ["Painting", "Finishing", "Coating"]
  },{
    icon: ShieldCheck, // safety / compliance
    title: "Scaffolding Manpower",
    description: "Professional scaffolding manpower provided by HBR-WORLD, ensuring safe access, stability, and compliance for construction and industrial sites.",
    color: "from-lime-400 to-lime-600",
    videoFile: "scaff2.mp4",
    features: ["Safety", "Access", "Compliance"]
  },
  {
    icon: SprayCan, // industrial painting
    title: "Indoor & Outdoor Roller Painting Work (Industrial)",
    description: "High-quality indoor and outdoor roller or spray painting work delivering smooth finishes, uniform coverage, and long-lasting surface protection.",
    color: "from-violet-400 to-violet-600",
    videoFile: "paint2.mp4",
    features: ["Expert", "Reliable", "Industry-standard"]
  },
  {
    icon: Grid2X2, // tiles / flooring
    title: "Marble and Tiles Installation Works -Industrial & Residential ",
    description: "High-quality marble and tile installation work ensuring precise alignment, elegant finishes, and long-lasting flooring and wall surfaces.",
    color: "from-amber-400 to-amber-600",
    videoFile: "tiles.mp4",
    features: ["Flooring", "Finishing", "Construction"]
  },
  {
    icon: Settings, // stainless steel / QC
    title: "Stainless Steel QC, Work & TIG Welding Services",
    description: "High-quality stainless steel QC, fabrication, and TIG welding work ensuring strong joints, precision finishing, and industry-standard compliance.",
    color: "from-slate-400 to-slate-600",
    videoFile: "steel.mp4",
    features: ["Welding", "Fabrication", "Quality"]
  },
  {
    icon: Flame, // MIG welding
    title: "MIG Welding for Heavy-Duty Works",
    description: "High-quality 3G ,4G ,5G ,6G Uphill and downhill , MIG welding for heavy-duty industrial and residential works delivering strong joints, high load capacity, and durable industrial fabrication results.",
    color: "from-orange-500 to-red-600",
    videoFile: "mig.mp4",
    features: ["Welding", "HeavyDuty", "Fabrication"]
  },
  {
    icon: ClipboardList, // housekeeping
    title: "Housekeeping Services (All Purpose)",
    description: "Comprehensive housekeeping services for hospitals, hotels, and shopping malls, covering indoor and outdoor areas with trained male and female staff available.",
    color: "from-cyan-400 to-cyan-600",
    videoFile: "hou.mp4",
    features: ["Cleaning", "Hospitality", "Maintenance"]
  },
  {
    icon: PaintRoller, // maintenance
    title: "Maintenance Works",
    description: "We provide reliable maintenance services covering electrical, plumbing, civil, and general repair works to ensure smooth, safe, and uninterrupted facility operations to extend the life.",
    color: "from-indigo-500 to-indigo-700",
    videoFile: "mai.mp4",
    features: ["Repair", "Services", "Facilities"]
  },
  
  {
    icon: User, // male housekeeping
    title: "Outdoor Male Housekeeping Services",
    description: "Professional outdoor housekeeping services with trained male staff, ensuring cleanliness, hygiene, and organized maintenance for various commercial and public spaces.",
    color: "from-blue-400 to-blue-600",
    videoFile: "mal.mp4",
    features: [
      "Cleaning",
      "Outdoor",
      "Maintenance"
    ]
  },
  {
    icon: UserCheck, // female housekeeping
    title: "Female Housekeeping Services",
    description: "Trained female housekeeping staff providing thorough cleaning, organization, and maintenance services for homes, offices, hotels, and other indoor spaces.",
    color: "from-rose-400 to-fuchsia-600",
    videoFile: "fem.mp4",
    features: ["Cleaning", "Indoor", "Maintenance"]
  },
  {
    icon: Siren, // fire alarm & low current
    title: "Low Current & Fire Alarm System Work",
    description: "Expert installation, testing, and maintenance of low current and fire alarm systems ensuring safety, reliability, and regulatory compliance for buildings.",
    color: "from-orange-500 to-rose-600",
    videoFile: "fir.mp4",
    features: ["Safety", "Electrical", "Security"]
  },
  {
    icon: Warehouse, // parking shelter
    title: "Car Parking Shelter Work",
    description: "Design, fabrication, and installation of durable car parking shelters providing protection, weather resistance, and organized parking spaces for residential and commercial areas.",
    color: "from-yellow-400 to-orange-600",
    videoFile: "she.mp4",
    features: ["Shelter", "Fabrication", "Installation"]
  },
  {
    icon: Cog, // generator mechanic
    title: "Skilled Generator Mechanic Services",
    description: "Experienced generator mechanics available for installation, maintenance, and repair of generators, ensuring reliable power supply and efficient performance.",
    color: "from-zinc-400 to-zinc-600",
    videoFile: "gen.mp4",
    features: ["Maintenance", "Repair", "Power"]
  },
  {
    icon: Wrench, // riggers
    title: "Certified Rigger Services",
    description: "Qualified riggers available at Level 1, 2, and 3, providing safe and efficient lifting, rigging, and material handling services with proper certification and skilled labors.",
    color: "from-cyan-400 to-teal-600",
    videoFile: "rig.mp4",
    features: ["Rigging", "Safety", "Certified"]
  },
  {
    icon: Blocks, // concrete work
    title: "Concrete Work & Skilled Concrete Workers",
    description: "Professional concrete work with skilled workers delivering durable, high-quality foundations, slabs, and structures for residential and industrial projects.",
    color: "from-lime-400 to-emerald-500",
    videoFile: "ben.mp4",
    features: ["Construction", "Masonry", "Durability"]
  },
  {
    icon: Home, // residential concrete
    title: "Concrete Works Residential",
    description: "Professional concrete work with skilled workers delivering durable, high-quality foundations, slabs, and structures for residential, commercial, and industrial projects.",
    color: "from-emerald-400 to-green-600",
    videoFile: "ben2.mp4",
    features: ["Construction", "Masonry", "Durability"]
  },
  {
    icon: Blocks, // steel fixers
    title: "Steel Fixers Work",
    description: "Expert steel fixing services for reinforced concrete structures, ensuring precise placement, strong reinforcement, and structural stability in construction projects.",
    color: "from-red-500 to-rose-600",
    videoFile: "fixers.mp4",
    features: ["Reinforcement", "Construction", "Durability"]
  },
  {
    icon: Ruler, // shuttering carpenter
    title: "Shuttering Carpenter Work",
    description: "Skilled shuttering carpenters providing precise formwork for concrete structures, ensuring accurate alignment, durability, and high-quality construction finishes.",
    color: "from-amber-400 to-yellow-600",
    videoFile: "car2.mp4",
    features: ["Carpentry", "Formwork", "Construction"]
  },
  {
    icon: LayoutGrid, // construction shuttering
    title: "Construction Shuttering Carpenter Work",
    description: "Experienced shuttering carpenters delivering precise formwork for concrete structures, ensuring durability, accuracy, and high-quality finishes.",
    color: "from-orange-500 to-red-500",
    videoFile: "def2.mp4",
    features: ["Carpentry", "Formwork", "Construction"]
  }
  ,
  {
    icon: Layers, // steel fixers & fabrication
    title: "Steel Fixers & Fabrication Work",
    description: "Skilled steel fixers and fabricators providing precise reinforcement placement and custom steel fabrication for durable and high-quality construction structures.",
    color: "from-rose-500 to-fuchsia-600",
    videoFile: "conn.mp4",
    features: ["Reinforcement", "Fabrication", "Construction"]
  },
  {
    icon: Boxes, // skilled warehouse labor
    title: "Skilled Warehouse Labor",
    description: "Available skilled labor for all warehouse categories, providing efficient and safe handling of loading, unloading, sorting, packaging, inventory management, and overall warehouse operations.",
    color: "from-emerald-400 to-teal-600",
    videoFile: "war.mp4",
    features: ["Logistics", "Handling", "Warehouse"]
  },
  {
    icon: PackageCheck, // warehouse assistants
    title: "Skilled & Non-Skilled Warehouse Assistants",
    description: "We provide skilled and non-skilled warehouse assistants for efficient handling, organizing, loading, unloading, sorting, and managing inventory.",
    color: "from-amber-400 to-orange-500",
    videoFile: "ware.mp4",
    features: ["Logistics", "Handling", "Warehouse"]
  },
  {
    icon: Settings, // factory workers
    title: "Skilled & Courageous Factory Workers",
    description: "We provide skilled and courageous factory workers, trained to handle machinery, manage production tasks, and carry out industrial operations efficiently, safely, and with high reliability.",
    color: "from-orange-500 to-red-500",
    videoFile: "heat.mp4",
    features: ["Manufacturing", "Labor", "Industrial"]
  },
  {
    icon: Factory, // manufacturing workers
    title: "Manufacturing Factory Workers",
    description: "Skilled manufacturing factory workers available to efficiently handle production processes, operate machinery, assemble products, and maintain quality standards in industrial environments.",
    color: "from-indigo-400 to-purple-600",
    videoFile: "fac.mp4",
    features: ["Manufacturing", "Production", "Industrial"]
  },
  {
    icon: Recycle, // plastic factory
    title: "Skilled Workers for Plastic Factory",
    description: "Trained and experienced workers available for plastic factory operations, including molding, extrusion, assembly, quality control, and efficient production management.",
    color: "from-teal-400 to-emerald-500",
    videoFile: "green.mp4",
    features: ["Manufacturing", "Plastic", "Production"]
  },
  {
    icon: Sun, // solar manpower
    title: "Skilled Manpower for Solar Plants",
    description: "Available skilled manpower for solar plant projects in Al Qassim and Al Raj, Saudi Arabia, handling installation, maintenance, wiring, and operational support efficiently and safely.",
    color: "from-sky-400 to-blue-600",
    videoFile: "sol.mp4",
    features: ["Renewable", "Electrical", "Installation"]
  },{
    icon: Home, // solar manpower
    title: "Skilled Finishing Carpenter",
    description: "Skilled finishing carpenters delivering precise, high-quality woodwork for interiors and fit-out projects. Expertise in doors, cabinets, furniture, and detailed finishing with a focus on durability",
    color: "from-orange-500 to-red-500",
    videoFile: "car.mp4",
    features: ["Carpentry", "Finishing", "Precision"]
  },
  {
    icon: Construction, // scaffolding / site work
    title: "Finishing Carpenter Works",
    description: "Finishing Carpenter works and Skilled workers available with us to provide the vest service to the clients with their Ideas and Themes.",
    color: "from-lime-400 to-lime-600",
    videoFile: "door.mp4",
    features: ["Indoor", "Outdoor", "Industrials"]
  },
  {
    icon: Factory, 
    title: "Factory Aluminium Fabricator ",
    description: "Experienced factory aluminium fabricators available with us, delivering high-quality fabrication for industrial and commercial applications.",
    color: "from-indigo-400 to-purple-600",
    videoFile: "alu.mp4",
    features: ["assembly", "Fabrication", "Aluminium"]
  },
  {
    icon: Factory, 
    title: "Skilled Aluminium Fabricator ",
    description: "Experienced factory aluminium fabricators available with us, delivering high-quality fabrication for industrial and commercial applications.",
    color: "from-blue-400 to-blue-600",
    videoFile: "alu2.mp4",
    features: ["Fabrication", "Industrial", "Aluminium"]
  },
  {
    icon: User, 
    title: "Safety Helmets Supply",
    description: "We supply complete safety helmets and protective equipment for laborers, site inspectors, firefighters, safety officers, managers etc..",
    color: "from-red-400 to-red-600",
    videoFile: "hel.mp4",
    features: ["Safety", "Protection", "Compliance"]
  },
  {
    icon: Settings, 
    title: "Skilled Silicone Fitters",
    description: "Skilled silicone fitters available with us, experienced in sealing, glazing, façade joints, expansion joints, and waterproof silicone applications for residential, commercial, and industrial projects.",
    color: "from-green-400 to-green-600",
    videoFile: "sil.mp4",
    features: ["Sealing", "Waterproofing", "Precision"]
  },{
    icon: Wrench, 
    title: "Water Drainage Work",
    description: "Experienced manpower available in Riyadh city for water drainage works, including surface water removal, trench drainage, pipeline installation, and site dewatering, ensuring smooth water flow.",
    color: "from-blue-400 to-blue-600",
    videoFile: "dra.mp4",
    features: ["Drainage", "Dewatering", "Safety"]
  },
  {
    icon: Construction, // scaffolding / site work
    title: "Stone Work for various purpose and Skilled Workers",
    description: "We provide expert crazy stone installation services with skilled workers, delivering durable, decorative, and high-quality stone finishes.",
    color: "from-lime-400 to-lime-600",
    videoFile: "sto.mp4",
    features: ["Indoor", "Outdoor", "Industrials"]
  },
  {
    icon: Boxes, // scaffolding / site work
    title: "Air Conditioning Installation & Maintenance Services",
    description: "We provide reliable air conditioning installation and maintenance services with skilled technicians available in our company, ensuring efficient cooling and proper installation.",
    color: "from-lime-400 to-lime-600",
    videoFile: "ac.mp4",
    features: ["Cooling", "Efficiency", "Reliability"]
  },
  {
    icon: Factory, // scaffolding / site work
    title: "Fencing Work Services",
    description: "We provide professional fencing work across Saudi Arabia, including installation and maintenance of durable fencing solutions for residential, commercial, industrial, and construction sites, ensuring security and safety",
    color: "from-blue-400 to-blue-600",
    videoFile: "en.mp4",
    features: ["Security", "Durability", "Protection"]
  },
  {
    icon: Boxes, // scaffolding / site work
    title: "Construction Pipeline Welding Services",
    description: "Our construction pipeline welding services are carried out by highly skilled and certified welders, ensuring strong joints, precision alignment, and long-term durability for industrial and infrastructure projects.",
    color: "from-lime-400 to-lime-600",
    videoFile: "welding.mp4",
    features: ["Precision", "Strength", "Compliance"]
  },
  {
    icon: Construction, // scaffolding / site work
    title: "6G Welding Work",
    description: "Our 6G welding work is carried out by highly skilled and certified welders, delivering exceptional joint strength, precise workmanship, and reliable performance. All welding activities are executed in full compliance with industrial and commercial standards.",
    color: "from-orange-400 to-orange-600",
    videoFile: "6ggg.mp4",
    features: ["Precision", "Strength", "Certified"]
  },
  {
    icon: Warehouse, // scaffolding / site work
    title: "Safety Supervisor & Safety Officer",
    description: "Certified safety supervisors and safety officers are available with us, holding all legally required certifications and official approvals. They are experienced in enforcing safety regulations, conducting risk assessments, monitoring site activities, and ensuring a safe and compliant.",
    color: "from-lime-400 to-lime-600",
    videoFile: "saf.mp4",
    features: ["Certified", "Compliant", "Reliable"]
  },
  {
    icon: PackageCheck, // warehouse assistants
    title: "Armco Oil Tank Heavy Welding",
    description: "Our experienced welders group delivers heavy welding works for Armco oil tanks, handling thick plates and complex joints with high precision, strength, and strict adherence to oil & gas safety and quality standards.",
    color: "from-amber-400 to-orange-500",
    videoFile: "ara.mp4",
    features: ["Heavy-Duty", "Precision", "Certified"]
  },{
    icon: Layers, // steel fixers & fabrication
    title: "Interlock Installation Work",
    description: "Our skilled team ensures proper base preparation, precise alignment, and durable finishing for long-lasting performance and an attractive appearance. Suitable for residential, commercial, and roadway applications.",
    color: "from-blue-500 to-blue-600",
    videoFile: "inter.mp4",
    features: ["Indoor", "Road Projects", "Walkways"]
  },
  {
    icon: Warehouse, // scaffolding / site work
    title: "Underground Cable Pulling & Termination Work",
    description: "Our skilled technicians ensure safe cable routing, proper jointing, accurate termination, and full compliance with electrical and safety standards for reliable and long-term performance.",
    color: "from-lime-400 to-lime-600",
    videoFile: "cab.mp4",
    features: ["Industrial Projects", "Commercial Buildings", "Infrastructure & Utility Works"]
  }
  
];



const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen" dir="ltr">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Our Services")}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">{t("Comprehensive Solutions")}</h1>
                <p className="text-muted-foreground text-lg">{t("From construction to manpower, we deliver end-to-end services tailored to your project needs")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={index * 50}>
                    <GlassCard className="p-8 h-full group">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}>
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{t(service.title)}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.description)}</p>

                      {/* Video */}
                      <video className="w-full rounded-xl aspect-video mb-6 object-cover" src={`/videos/${service.videoFile}`} autoPlay muted loop playsInline />

                      {/* Features List */}
                      <ul className="space-y-2 text-sm text-muted-foreground">
  {service.features.map((feature, i) => (
    <li key={i} className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      {t(feature)}
    </li>
  ))}
</ul>

                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-medium to-navy-dark">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">{t("Ready to Start Your Project?")}</h2>
                <p className="text-primary-foreground/70 mb-8">{t("Contact us today for a free consultation and quotation")}</p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    {t("Get in Touch")}
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
