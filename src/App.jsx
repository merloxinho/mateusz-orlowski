import {NextUIProvider} from "@nextui-org/react";
import './index.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NextUIProvider>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </NextUIProvider>
    </>
  )
}

export default App
