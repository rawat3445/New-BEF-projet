import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/beflogo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/home") {
      navigate("/home", { state: { scrollTo: id } });
    } else {
      setTimeout(() => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100); // Give time for section to be mounted
    }

    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const eventItems = [
    {
      title: "Industry Innovation Summit",
      path: "/events/innovation-summit",
      description: "Annual technology and innovation conference",
    },
    {
      title: "Policy Makers Dialogue",
      path: "/events/policy-dialogue",
      description: "Strategic policy discussions",
    },
    {
      title: "Technology Integration Forum",
      path: "/events/tech-forum",
      description: "Tech integration workshops",
    },
    {
      title: "Leadership Excellence",
      path: "/events/leadership",
      description: "Leadership development programs",
    },
    {
      title: "Startup Pitch Competition",
      path: "/events/startup-pitch",
      description: "Showcase innovative startups",
    },
    {
      title: "Women in Business Conference",
      path: "/events/women-business",
      description: "Empowering women entrepreneurs",
    },
  ];

  const industryItems = [
    {
      title: "Advertisement & Marketing",
      path: "/advertisement",
      description: "Shape the future of brand communication",
    },
    {
      title: "Beauty And Wellness",
      path: "/beauty-wellness",
      description: "Innovative beauty and wellness solutions",
    },
    {
      title: "Empowering Women Entrepreneurs",
      path: "/women-entrepreneurship",
      description: "Supporting women-led businesses",
    },
    {
      title: "Real Estate and Urban Planning",
      path: "/real-estate",
      description: "Urban development and planning",
    },
    {
      title: "Public Relations",
      path: "/public-relations",
      description: "Managing brand reputation and outreach",
    },
    {
      title: "Digital Innovation",
      path: "/digital-innovation",
      description: "Cutting-edge tech solutions",
    },
    {
      title: "Media & Entertainment",
      path: "/media-entertainment",
      description: "Content creation and distribution",
    },
    {
      title: "Rural Development",
      path: "/rural-development",
      description: "Building sustainable villages",
    },
    {
      title: "Environment & Sustainability Tech",
      path: "/environment",
      description: "Green technology solutions",
    },
    {
      title: "Brand Strategy",
      path: "/brand-strategy",
      description: "Creating impactful brand identities",
    },
    {
      title: "Agriculture and Agritech",
      path: "/agriculture",
      description: "Smart farming solutions",
    },
    {
      title: "Retail & E-commerce",
      path: "/retail",
      description: "Digital commerce innovation",
    },
    {
      title: "Web 3.0, AI and DeepTech",
      path: "/web3_ai",
      description: "Next-generation technologies",
    },
    {
      title: "Automobile & Mobility",
      path: "/automobile",
      description: "Future of transportation",
    },
    {
      title: "Health & Pharma",
      path: "/healthnpharma",
      description: "Healthcare innovation",
    },
  ];

  return (
    <>
      <nav className="navbar" id="home">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={Logo} className="object-contain h-28" alt="BEF" />
          </div>

          {/* Desktop Menu */}
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a
                href="#"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("home");
                }}
              >
                Home
              </a>
            </li>

            <li className="navbar-item">
              <a
                href="/about"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>

            {/* Industries Dropdown */}
            <li className="navbar-item dropdown">
              <a
                href="#industries"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("industries");
                }}
              >
                Initiatives
                <ChevronDown className="dropdown-chevron w-4 h-4" />
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-header">Our Industries</div>
                <div className="dropdown-content">
                  {industryItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="dropdown-item-title">{item.title}</div>
                      <div className="dropdown-item-description">
                        {item.description}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* Events Dropdown */}
            <li className="navbar-item dropdown">
              <a
                href="#events"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  //handleNavigation('/events'); // This will navigate to the main Events page
                }}
              >
                Events
                <ChevronDown
                  className="dropdown-chevron w-4 h-4"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
              </a>

              <div className="dropdown-menu">
                <div className="dropdown-header">Upcoming Events</div>
                <div className="dropdown-content">
                  {eventItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="dropdown-item"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                    >
                      <div className="dropdown-item-title">{item.title}</div>
                      <div className="dropdown-item-description">
                        {item.description}
                      </div>
                    </a>
                  ))}
                  {/* Add a link to view all events that goes to the EventsPage */}
                  <a
                    href="#"
                    className="dropdown-item view-all"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/events");
                    }}
                  >
                    <div className="dropdown-item-title">View All Events</div>
                    <div className="dropdown-item-description">
                      See all upcoming events
                    </div>
                  </a>
                </div>
              </div>
            </li>

            <li className="navbar-item">
              <a
                href="#contact"
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </li>

            {/* <li className="navbar-item">
               <button className="navbar-cta">
                Join Our Movement
              </button> 
            </li>*/}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle md:mr-2 mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X color="blue" /> : <Menu color="blue" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sliding Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className="mobile-menu-item block px-6 py-3 text-dark-charcoal hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>

          <a
            href="#about"
            className="mobile-menu-item block px-6 py-3 text-dark-charcoal hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            About
          </a>

          <div className="border-b border-neutral-gray mb-2">
            <div className="px-6 py-2 text-sm font-semibold text-neutral-gray">
              INITIATIVES
            </div>
            {industryItems.slice(0, 15).map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-12 py-2 text-dark-charcoal hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="border-b border-neutral-gray mb-2">
            <div className="px-6 py-2 text-sm font-semibold text-neutral-gray">
              EVENTS
            </div>
            {eventItems.slice(0, 6).map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-12 py-2 text-dark-charcoal hover:bg-gray-100"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.path);
                }}
              >
                {item.title}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="mobile-menu-item block px-6 py-3 text-dark-charcoal hover:bg-gray-100"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>

          {/* <button className="mobile-menu-cta block w-full px-6 py-3 bg-primary-blue text-white font-semibold hover:bg-blue-700 mt-4">
            Join Our Movement
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
