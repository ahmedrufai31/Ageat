import {
  FaSquareXTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import "../styles/footer.css";
import "../styles/nav.css";
const Footer = () => {
  return (
    <section className="footer-container">
      <div className="container">
        <div className="footer-top">
          <div className="f1">
            <h2 className="logo">Ageat</h2>
            <div className="social-media">
              <FaFacebookF size={"20px"} />
              <FaInstagram size={"20px"} />
              <FaSquareXTwitter size={"20px"} />
              <FaLinkedin size={"20px"} />
            </div>
          </div>
          <div className="footer-links">  
            <div className="links">
              <li>
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  //   onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  //   onClick={handleLinkClick}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  //   onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  //   onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  //   onClick={handleLinkClick}
                >
                  Faq
                </Link>
              </li>
            </div>
            <div className="links">
              <li>Utility Pages</li>
              <li>Style Guide</li>
              <li>Licenses</li>
              <li>ChangeLog</li>
            </div>
          </div>
        </div>
        <hr className="line" />
        <div className="footer-bottom">
          <p>&copy; Thesolutionunit. All Rights Reserved.</p>
          <div className="sponsor">
            <p>Made by Nathan</p>
            <p>Powered by Webflow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
