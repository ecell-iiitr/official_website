import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Student from "./components/Student";
import Vision from "./components/Vision";

export default function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Intro />
      <About />
      <Vision />
      <Events />
      <Faculty />
      <Student />
      <Contact />
      <Footer />
    </div>
  );
}
