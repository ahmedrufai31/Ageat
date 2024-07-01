import { Link } from "react-scroll";
import "../styles/banner.css";
const Banner = () => {
  return (
    <div className="banner section_padding">
      <div className="bg ">
        <h1>
          Let's Work <br /> Together
        </h1>
        <p>Elevate your brand. Click for digital excellence!</p>
        <button className="btn2">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Let's Chat
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
