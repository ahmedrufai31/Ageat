import "../styles/service.css";
import { Service1, Service2, Service3 } from "../asset";
const Service = () => {
  return (
    <section className="services" id="services">
      <div className="flex-service section_padding  ">
        <div className="service-heading">
          <h2 className="heading-text">Our Services</h2>
          <p className="para-text">
            Dive into our expertise in user experience optimization, digital
            strategy, and cutting-edge technology.
          </p>
        </div>
        <div className="service-cards">
          <div className="service-card">
            <img
              className="image"
              src={Service1}
              alt=""
            />
            <h3>Web Design</h3>
            <p className="card-text">
              From corporate sites to e-commerce platforms, we create stunning
              websites that captivate and convert.
            </p>
          </div>
          <div className="service-card">
            <img
              className="image"
              src={Service2}
              loading="lazy"
              alt=""
              //   className="service-logo"
            />
            <h3>UX/UI Design</h3>
            <p className="card-text">
              We optimize your website to rank higher, driving more organic
              traffic and attracting qualified leads.
            </p>
          </div>
          <div className="service-card">
            <img
              className="image"
              src={Service3}
              alt=""
            />
            <h3>Mobile Devlopment</h3>
            <p className="card-text">
              From wireframing to prototyping, we focus on user -centric design
              to elevate your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
