import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Forms } from "./components/Forms";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Reputation } from "./components/Reputation";
import { Services } from "./components/Services";
import { CopyRight } from "./components/CopyRight";

function App() {
  return (
    <>
      <Header />
      <Background />
      <Reputation />
      <About />
      <Services />
      <Experience />
      <Contact />
      <Projects />
      <Forms />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
