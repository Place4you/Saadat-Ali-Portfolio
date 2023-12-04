"use client"
import '@/app/globals.css'

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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react"


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
