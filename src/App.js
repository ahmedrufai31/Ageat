import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Service />
      <Banner />
      <Faq />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
