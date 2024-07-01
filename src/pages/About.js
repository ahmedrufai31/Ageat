import "../styles/about.css";
import { About1, About2 } from "../asset";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="flex-about section_padding ">
        <div className="about-img_container">
          <img
            className="img"
            src={About1}
            alt=""
          />
        </div>
        <div className="about_content">
          <div className="about-description">
            <h2 className="heading-text">About Us</h2>
            <p className="para-text">
              Our history is more than a timeline; it's a testament to
              resilience, creativity, and an unwavering commitment to client
              success.
            </p>
          </div>
          <div className="about-description">
            <h2 className="about-text">25+ Years of Experience</h2>
            <p className="para-text">
              Learn about the minds behind the creativity, the philosophy
              shaping our approach, and the values guiding our interactions.
            </p>
          </div>
          <div className="about-description">
            <h2 className="about-text">150+ Completed Projects</h2>
            <p className="para-text">
              Explore our completed projects and witness digital excellence in
              action. From captivating websites to innovative marketing
              campaigns.
            </p>
          </div>
          <div className="about_img_content">
            <img
            src={About2}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
