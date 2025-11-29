import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
