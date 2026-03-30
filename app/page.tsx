import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-dark text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
