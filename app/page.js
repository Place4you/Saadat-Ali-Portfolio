"use client"
import AboutSection from "@/Components/AboutSection"
import AcheivementSection from "@/Components/AcheivementSection"
import ContactSection from "@/Components/ContactSection"
import Footer from "@/Components/Footer"
import Hero from "@/Components/Hero"
import Navbar from "@/Components/Navbar"
import Navlink from "@/Components/Navlink"
import ProjectSection from "@/Components/ProjectSection"
import TechStack from "@/Components/TechStack"
import ParticleBackground from "@/Components/config/ParticleBackground"
import particlesConfig from "@/Components/config/particles-config"
import React from "react"


export default function Home() {
  return (
    <main className=" min-h-screen  flex-col  container mx-auto ">
         <Navbar />
      <div className="container mx-auto px-12 py-4">
            
      <ParticleBackground />

      <Hero />
      <TechStack />
      <AboutSection />
      <AcheivementSection />
      <ProjectSection />
      <ContactSection />
      </div>
      <Footer />
      

    </main>
  )
}
