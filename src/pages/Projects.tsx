import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "GRC Insatallation",
    category: "Civil Construction",
    description:
      "We provided skilled manpower for GRC installation works in the King Salman City Project, delivering precise workmanship, timely execution, and high safety and quality standards.",
      scope: ["GRC panel installation", "Site supervision", "Quality control", "Safety compliance"],

    image: "/pro1.jpeg",
  },
  {
    id: 2,
    title: "Excavation Works",
    category: "Construction & Demolition",
    description:
      "We supplied skilled manpower for excavation works at the King Salman City Project, ensuring safe, precise, and efficient site operations.",
      scope: ["Site excavation", "Earthmoving", "Trenching", "Soil stabilization"],

    image: "/pro2.jpg",
  },
  {
    id: 3,
    title: "Plumbing Works",
    category: "MEP Works",
    description:
      "We handled complete plumbing installation and maintenance for residential and commercial facilities within the Red Sea Development Project, including above-ground and underground piping, water supply systems, drainage networks, and fixture installations.",
      scope: ["Above-ground piping", "Underground piping", "Water supply systems", "Drainage networks"],
    image: "/pro3.jpg",
  },
  {
    id: 4,
    title: "Electrical Works",
    category: "MEP Works",
    description: "HBR-World Manpower Supply and Contracting Company provided skilled manpower to Al Fanar Company for comprehensive electrical works in Jeddah, including panel fitting, wiring, and installation support, ensuring quality and safe execution throughout the project.",
    scope: ["Panel fitting", "Wiring installation", "Electrical testing", "System commissioning"],
    image: "/pro4.jpg",
  },
  {
    id: 5,
    title: "HVAC Ductwork Works",
    category: "Ducting Works",
    description: "HBR-World Manpower Supply and Contracting Company supported Amana Company in Amala by providing skilled manpower for the supply, installation, testing, and commissioning of a complete HVAC system. Our team handled duct fabrication, installation, and system integration, ensuring full compliance with ASHRAE standards, the Saudi Building Code, and LEED requirements.",
    scope: ["Duct fabrication", "HVAC installation", "System testing", "System commissioning"],
    image: "/pro5.jpg",
  },
  {
    id: 6,
    title: "HMG Project and Aluminium Glass Frames",
    category: "Exterior Glass Fitting",
    description:
      "HBR-World collaborated with PBC, NAFCO, Ramah Aluminum, and Nawafeth Metal Industrial Factory to deliver high-quality aluminum glass frames across Saudi Arabia. We handled precise design, fabrication, and installation tailored for residential, commercial, and industrial needs.",
      scope: ["Frame design", "Aluminum fabrication", "Glass installation", "Structural detailing"],
    image: "/pro6.webp",
  },
  {
    id: 7,
    title: "Heavy Industrial Weldings ",
    category: "Heavy Construction",
    description: "HBR-World collaborated with Al Ajllan Company and Al Sawaed Engineering Company to deliver heavy industrial welding services. Our certified welders handled structural steel works for high-load and critical infrastructure projects. We ensured maximum precision, strength, and long-term reliability in every weld.",
    scope: ["Structural steel welding", "Fabrication works", "Joint inspection", "Quality assurance"],
    image: "/pro7.jpg",
  },
  {
    id: 8,
    title: "Energy International System",
    category: "Energy System",
    description: "HBR-World collaborated with EBM to provide skilled manpower for the Energy International System Project in Riyadh. We supported the installation and integration of advanced fire detection and alarm systems. The project delivered state-of-the-art fire safety solutions for commercial buildings, malls, factories, retail outlets, and warehouses.",
    scope: ["Fire system installation", "Alarm integration", "CCTV monitoring", "Safety compliance"],
    image: "/pro8.jpg",
  },
  {
    id: 9,
    title: "Interior & Exterior Profile Works",
    category: "Renovation",
    description: "HBR-World supplied skilled manpower to Imball Gold Sponsor Company for interior and exterior profile works across multiple sites in Saudi Arabia. We handled architectural finishing, decorative panel installation, and wall and ceiling profiling. Our team ensured high-quality detailing with a balance of aesthetic appeal and functional performance.",
    scope: ["Architectural finishing", "Panel installation", "Wall profiling", "Ceiling detailing"],
    image: "/pro9.jpg",
  },
  {
    id: 10,
    title: "Electronic Works",
    category: "Electronics",
    description:
      "HBR-World collaborated with Saudico Electronic System, Shapoorji Pallonji, and Baytur Company as a subcontractor and manpower supplier for the King Abdullah Metro Station project in Riyadh. We provided skilled manpower and technical support for low-voltage and smart electronic system works. Our team handled design, installation, integration, and maintenance to meet the complex needs of a modern high-capacity transportation hub.",
      scope: ["System design", "Installation works", "System integration", "Maintenance support"],
    image: "/pro10.jpg",
  },
  {
    id: 11,
    title: "Al-Ajlan Company Works",
    category: "Heavy Sheds",
    description: "HBR-World Manpower Supply and Contracting Company supplied skilled and semi skilled manpower to Al Ajlan Company for the fabrication and installation of parking sheds in Riyadh, KSA. The project scope included structural steel fabrication, welding, painting, and complete installation works, ensuring strength, durability, and long service performance",
    scope: ["Steel fabrication", "Welding works", "Painting", "Installation"],
    image: "/pro11.webp",
  },
  {
    id: 12,
    title: " Elevator and Escalator Works",
    category: "Industrial and Commercial works",
    description:
      "HBR-World Manpower Supply and Contracting Company provided skilled manpower for elevator and escalator installation, testing, and commissioning. Our team supported multiple commercial and residential projects across Saudi Arabia with reliable technical expertise.",
      scope: ["Installation", "Testing", "Commissioning", "Technical support"],
    image: "/pro12.jpg",
  },
  {
    id: 13,
    title: "Stainless Steel Works",
    category: "Indoor & Outdoor Works",
    description: "HBR-World supplied skilled manpower and complete stainless steel fabrication solutions across Saudi Arabia. We handled the design, fabrication, and installation of handrails, balustrades, staircases, wall cladding, and decorative panels. Our team delivered high-quality, durable, and visually refined stainless steel elements for commercial, residential, and industrial projects.",
    scope: ["Design works", "Steel fabrication", "Installation", "Decorative elements"],
    image: "/pro13.jpg",
  },
  {
    id: 14,
    title: "KAFD Project Glass Works",
    category: "Exterior Glass works",
    description:
      "HBR-World supplied skilled manpower for glass installation across buildings and residential units in the King Abdullah Financial District (KAFD), Riyadh. Our team handled interior and exterior panels, façades, partitions, and decorative glass elements. All work was executed with precision, safety, and a focus on modern architectural aesthetics.",
      scope: ["Glass panel installation", "Façade works", "Partitions setup", "Decorative elements"],
    image: "/pro14.jpg",
  },
  {
    id: 15,
    title: "Low Current Works",
    category: "Low Current Appliances",
    description: "HBR-World supplied skilled manpower for comprehensive low-current system installations across commercial and residential projects in Saudi Arabia. Our team handled CCTV, access control, data networking, fire alarm systems, and advanced security solutions.",
    scope: ["CCTV installation", "Access control", "Data networking", "Fire alarm systems"],
    image: "/pro15.jpg",
  },
  {
    id: 16,
    title: "Cable Pulling Works",
    category: "Industrial works",
    description:
      "HBR-World, in collaboration with Al Sharq Company, supplied skilled manpower for underground cable-pulling works across multiple sites in Saudi Arabia. The scope included trenching, conduit preparation, wide-cable laying, and precise alignment, ensuring safe, high-quality, and reliable infrastructure.",
      scope: ["Trenching works", "Conduit preparation", "Cable laying", "Alignment & inspection"],
    image: "/pro16.jpg",
  },
  {
    id: 17,
    title: "Racking Shelving works",
    category: "Industrial works",
    description:
      "HBR-World, in partnership with a leading support service network company, provided skilled and semi-skilled manpower for major logistics and delivery operations across Saudi Arabia. Our teams supported projects for Amazon, Noon, DSP, Agility, and Aramex, delivering reliable workforce solutions in Riyadh, Jeddah, Dammam, and Al-Qassim.",
      scope: ["Rack Installation & Assembly", "Warehouse Shelving Setup", "Maintenance & Load Testing"],
    image: "/pro17.jpg",
  },
  {
    id: 17,
    title: "Power Rack Company",
    category: "Racking & Shelving works",
    description:
      "HBR-World, in collaboration with SPAN Support Service Network Company, has provided skilled and semi-skilled manpower to all major logistics companies across Saudi Arabia. Power Rack Company delivers specialized racking and shelving services, while our teams have supported leading brands such as Amazon, Noon, DSP, Agility, and Aramex with dependable workforce solutions for warehouse operations.",
      scope: ["Warehouse Operations Support", "Loading & Unloading Assistance", "Delivery & Last-Mile Support", "General logistics manpower"],
    image: "/pro18.jpg",
  },
  {
    id: 17,
    title: "Low Current Works",
    category: "Networking & IT Services",
    description:
      "HBR-World specializes in delivering comprehensive Low Current solutions across Saudi Arabia. In collaboration with Power Rack Company in Jeddah, we provide skilled and semi-skilled manpower for the installation, configuration, and maintenance of low-voltage systems.",
      scope: ["Network Cabling", "System Integration", "CCTV System Setup", "Fiber Optic Splicing"],
    image: "/snc.jpg",
  },
  {
    id: 17,
    title: "Al Sahafa Yasmeen Project",
    category: "Electro-Mechanical Project",
    description:
      "HBR-World specializes in delivering comprehensive Low Current solutions across Saudi Arabia. In collaboration with Power Rack Company in Jeddah, we provide skilled and semi-skilled manpower for the installation, configuration, and maintenance of low-voltage systems.",
      scope: ["Electromechanic", "Mechanical", "Gypsum", "Plumbing","Ducting", "House Keeping"],
    image: "/proele.jpg",
  },{
    id: 17,
    title: "Al Hadithah Port Project (Saudi-Jordon border)",
    category: "All Construction Categories through MSQ",
    description:
      "HBR-World successfully contributed from 2020-2023 to the Al Hadithah Port Project located at the Saudi–Jordan border, delivering essential construction manpower and technical support through MSQ. Our team provided skilled professionals across multiple disciplines, including engineering, plumbing, ducting, and mechanical works.",
      scope: ["Engineer", "Plumbing", "Ducting", "Mechanical"],
    image: "/had.jpg",
  },
  {
    id: 17,
    title: "Al Sawaed Arab Company, Riyadh",
    category: "All Construction Categories through MSQ",
    description:
      "HBR-World successfully contributed to the Al Sawaed Arab Company Project located in Riyadh, delivering essential construction manpower and technical support through MSQ. Our team provided skilled professionals across multiple disciplines, including engineering, plumbing, ducting, and mechanical works.",
      scope: ["Engineer", "Plumbing", "Ducting", "Mechanical"],
    image: "/home.png",
  },
  {
    id: 17,
    title: "Gypsum works, Dr Sulaiman Al Habib & Red Sea Project",
    category: "Gypsum works at various Locations around Kingdom of Saudi Arabia",
    description:
    "HBR-World successfully contributed to the Red Sea Project and to the Dr Sulaiman Al Habib , by providing skilled labour for the gypsum works",
      scope: ["Engineer", "Plumbing", "Ducting", "Mechanical"],
    image: "/dr2.jpeg",
  }, {
    id: 17,
    title: "Agility works at Amazon warehouse",
    category: "Racking, shelving and agility works by HBR-world team thorugh MSQ",
    description:
    "Racking, shelving and agility works at amazon warehouse by HBR-World team through MSQ",
      scope: ["Engineer", "Plumbing", "Ducting", "Mechanical"],
    image: "/proamazon.jpeg",
  }, {
    id: 17,
    title: "HMG Sahafa Project Riyadh",
    category: "Civil Construction",
    description:
    "Providing our Manpower for various Construction purpose at HMG Sahafa Project, Riyadh",
      scope: ["Engineer", "Plumbing", "Ducting", "Mechanical"],
    image: "/hmg.jpeg",
  },
  {
    id: 17,
    title: "Al Rajhi Bank, Head Office",
    category: "Civil Construction",
    description:
    "Al Rajhi Bank, Head Office Construction in Riyadh, 2015.",
      scope: ["Engineer", "Plumbing", "Manpower", "Mechanical"],
    image: "/bank.jpeg",
  }, {
    id: 17,
    title: "KAFD Project",
    category: "Internal & External Glasses",
    description:
    "KAFD Project, supplied Skilled workers to PBC Company",
      scope: ["Glass Frames", "Aluminium Glass Fitting", "Exterior Glass Fitting", "Interior Glass Fitting"],
    image: "/46.jpeg",
  },{
    id: 17,
    title: "Sawaed Co. Tanker Project, Riyadh",
    category: "Tanker Construction",
    description:
    "Constructed a tanker at Riyadh-Dammam Road near PP9(Power Project) through MSQ Company",
      scope: ["Heavy Welding works", "Civil works"],
    image: "/protanker.jpeg",
  },{
    id: 17,
    title: "Sahafa Project Riyadh",
    category: "Construction",
    description:
    "HBR-world has successfully completed Sahafa Hotel project providing skilled and experienced  manpower.",
      scope: ["Construction", "Civil works"],
    image: "/sahafa.jpeg",
  },
  {
    id: 17,
    title: "Tower At Olaya, Riyadh",
    category: "Construction",
    description:
    "HBR-world has successfully installed Aluminium glasses frames and external glasses.",
      scope: ["Aluminium Glass Frames", "Glasses Installation"],
    image: "/Tower.jpeg",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const openModal = (project: typeof projects[0], index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedProject(null);

  const navigateProject = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + projects.length) % projects.length
        : (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {t("Our Portfolio")}
                </span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t("Featured Projects")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t(
                    "Explore our portfolio of successful projects across Saudi Arabia"
                  )}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 50}>
                  <div
                    onClick={() => openModal(project, index)}
                    className="group cursor-pointer"
                  >
                    <GlassCard className="overflow-hidden">
                      {/* Image */}
                      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                        {project.image.startsWith("/") ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className={`${project.image} w-full h-full`} />
                        )}

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-primary-foreground text-sm font-medium">
                            {t("View Details")}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                          {t(project.category)}
                        </span>
                        <h3 className="font-display font-semibold text-lg text-foreground mt-2 group-hover:text-primary transition-colors">
                          {t(project.title)}
                        </h3>
                      </div>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-zoom-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center z-10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center z-10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="aspect-video relative rounded-t-3xl overflow-hidden">
              {selectedProject.image.startsWith("/") ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`${selectedProject.image} w-full h-full`} />
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {t(selectedProject.category)}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-2 mb-4">
                {t(selectedProject.title)}
              </h2>
              <p className="text-muted-foreground mb-6">
                {t(selectedProject.description)}
              </p>

              <h4 className="font-display font-semibold text-foreground mb-3">
                {t("Scope of Work")}
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {selectedProject.scope.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
