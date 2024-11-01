"use client"
import AboutSection from "@/components/AboutSection"
import AcheivementSection from "@/components/AcheivementSection"
import BadgeLinks from "@/components/BadgeSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"
import TechStack from "@/components/TechStack"
import ParticleBackground from "@/components/config/ParticleBackground"
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main id="home" className=" min-h-screen   flex-col  container mx-auto px-0">
         <Navbar />
      <div className="container mx-auto px-12 py-4 sm:overflow-x-hidden">

      <ParticleBackground />

      <Hero />
      <TechStack />
      <AboutSection id="#about" />
      <AcheivementSection />
      <BadgeLinks />
      <ProjectSection />
      <ContactSection />
      <ToastContainer autoClose={3000} />
      </div>
      <Footer />
    </main>
  )
}
