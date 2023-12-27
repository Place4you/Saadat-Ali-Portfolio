"use client"
import AboutSection from "@/components/AboutSection"
import AcheivementSection from "@/components/AcheivementSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"
import TechStack from "@/components/TechStack"
import ParticleBackground from "@/components/config/ParticleBackground"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <main className=" min-h-screen   flex-col  container mx-auto px-6">
         <Navbar />
      <div className="container mx-auto px-12 py-4">

      <ParticleBackground />

      <Hero />
      <TechStack />
      <AboutSection />
      <AcheivementSection />
      <ProjectSection />
      <ContactSection />
      <ToastContainer autoClose={3000} />
      </div>
      <Footer />
    </main>
  )
}
