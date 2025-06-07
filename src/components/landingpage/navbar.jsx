import { ChevronDown, Menu, X} from 'lucide-react';

const Navbar = ({industryItems,scrollToSection,eventItems,isMobileMenuOpen })=>{

    return(
        <>

         <nav className="navbar">
                <div className="navbar-container">
                  {/* Logo */}
                  <div className="navbar-logo">
                    BEF
                  </div>
        
                  {/* Desktop Menu */}
                  <ul className="navbar-menu">
                    <li className="navbar-item">
                      <a
                        href="#home"
                        className="navbar-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('home');
                        }}
                      >
                        Home
                      </a>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="#about"
                        className="navbar-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('about');
                        }}
                      >
                        About
                      </a>
                    </li>
        
                    {/* Industries Dropdown */}
                    {/* Industries Dropdown */}
                    <li className="navbar-item dropdown">
                      <a href="#industries" className="navbar-link">
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
                              <div className="dropdown-item-description">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
        
                    {/* Events Dropdown */}
                    <li className="navbar-item dropdown">
                      <a href="#events" className="navbar-link">
                        Events
                        <ChevronDown className="dropdown-chevron w-4 h-4" />
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
                              <div className="dropdown-item-description">{item.description}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </li>
        
                    <li className="navbar-item">
                      <a
                        href="#contact"
                        className="navbar-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('contact');
                        }}
                      >
                        Contact
                      </a>
                    </li>
        
                    <li className="navbar-item">
                      <button className="navbar-cta">
                        Join Our Movement
                      </button>
                    </li>
                  </ul>
        
                  {/* Mobile Menu Toggle */}
                  <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                  </button>
                </div>
        
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                  <div className="mobile-menu active">
                    <a
                      href="#home"
                      className="mobile-menu-item"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                      }}
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="mobile-menu-item"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                      }}
                    >
                      About
                    </a>
        
                    {/* Mobile Industries */}
                    <div style={{ borderBottom: '1px solid rgba(156, 163, 175, 0.1)' }}>
                      <div style={{ padding: '0.5rem 2rem', fontSize: '0.9rem', fontWeight: '600', color: '#9ca3af' }}>
                        INITIATIVES
                      </div>
                      {industryItems.slice(0, 6).map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="mobile-menu-item"
                          style={{ paddingLeft: '3rem' }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(item.path);
                          }}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
        
                    {/* Mobile Events */}
                    <div style={{ borderBottom: '1px solid rgba(156, 163, 175, 0.1)' }}>
                      <div style={{ padding: '0.5rem 2rem', fontSize: '0.9rem', fontWeight: '600', color: '#9ca3af' }}>
                        EVENTS
                      </div>
                      {eventItems.slice(0, 4).map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="mobile-menu-item"
                          style={{ paddingLeft: '3rem' }}
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
                      className="mobile-menu-item"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}
                    >
                      Contact
                    </a>
                    <button className="mobile-menu-cta">
                      Join Our Movement
                    </button>
                  </div>
                )}
              </nav>
        
        </>
    );
}

export default Navbar;