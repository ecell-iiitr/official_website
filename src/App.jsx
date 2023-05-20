import About from "./components/About";
import Banner from "./components/Banner";
import Events from "./components/Events";
import Faculty from "./components/Faculty";
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
    </div>
  );
}
