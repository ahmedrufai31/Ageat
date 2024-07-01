import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "../styles/faq.css";
const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggledropdown = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const faqItems = [
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline for website development varies based on project scope and complexity. Typically, it can range from a few weeks for simpler sites to several months for more extensive projects.",
    },
    {
      question: "What digital marketing strategies do you offer?",
      answer:
        "Our digital marketing services encompass a range of strategies including SEO, PPC advertising, social media marketing, email marketing, content creation, and more. We tailor our approach to meet each client's unique goals and objectives.",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Yes, we have a portfolio showcasing our past projects across various industries. Feel free to explore our portfolio to get an idea of the quality of our work and the range of solutions we offer.",
    },
    {
      question: "How do you ensure website security?",
      answer:
        "We prioritize website security by implementing measures such as SSL certificates, regular software updates, firewalls, and robust password policies to protect against cyber threats and vulnerabilities.",
    },
    {
      question: "What sets your agency apart from others?",
      answer:
        "We differentiate ourselves through our commitment to excellence, creativity, and client satisfaction. Our team of experts combines technical expertise with innovative thinking to deliver tailored solutions that drive results and help our clients succeed in the digital landscape.",
    },
  ];
  return (
    <section className="faq" id="faq">
      <div className="accordion section_padding">
        <h1>FAQ</h1>
        {faqItems.map((item, index) => (
          <div key={index} className="dropdown-container">
            <div className="title" onClick={() => toggledropdown(index)}>
              <h4> {item.question}</h4>
              <IoIosArrowDown
                size={"30px"}
                className={selected === index ? "arrow rotate" : "arrow"}
              />
            </div>
            <div className={selected === index ? "content open" : "content"}>
              <p> {item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Faq;
