import "../styles/contact.css";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="flex-contact section_padding ">
        <div className="contact-info">
          <p>
            <FaPhone size={'20px'} /> (+234) 814 358 5293
          </p>
          <p>
            <IoLogoWhatsapp size={'20px'} />
            (+234) 803 401 7223
          </p>
          <p>
            <MdEmail size={'20px'} /> ahmedmusa7@gmail.com
          </p>
        </div>

        <form className="form">
          <div className="input-field">
            <div className="field">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="field">
              <label>Email</label>
              <input type="text" />
            </div>
          </div>
          <div>
            <label>Message</label>
            <textarea className="textarea"></textarea>
          </div>
          <button className="btn">Let's chat</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
