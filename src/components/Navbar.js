import { Link } from "react-scroll";
import { VscMenu } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import "../styles/nav.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (navMenuRef.current) {
      navMenuRef.current.classList.toggle("open");
    }
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <section className="navbar">
      <div className="flex-nav container">
        <div className="nav-header">
          <h1 className="logo">Ageat</h1>
          <div className="menubar" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose size={'35px'} /> : <VscMenu size={"35px"} />}
          </div>
        </div>
        <nav >
          <ul ref={navMenuRef} className="nav-menu">
            <li className="nav-link">
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}

              >
                Services
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}

              >
                About
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}

              >
                Contact
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="faq"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleLinkClick}

              >
                Faq
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
