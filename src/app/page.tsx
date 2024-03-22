import About from "@/components/About/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import AboutBEST from "@/components/AboutBest";
import Banner from "@/components/Banner";
import Statistics from "@/components/Statistics";
import RoadmapStudent from "@/components/RoadmapStudent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      
      <Banner />
      <About />

      <RoadmapStudent />
      <Banner />

      <Statistics />
      <Banner />

      <AboutBEST />
      <Partners />
      
      <Footer />
    </main>
  );
}
