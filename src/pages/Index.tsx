import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ScheduleModal } from '../components/ScheduleModal';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header onScheduleClick={openModal} />

      {/* Hero Section */}
      <Hero onScheduleClick={openModal} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services onScheduleClick={openModal} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact onScheduleClick={openModal} />

      {/* Footer */}
      <Footer />

      {/* Schedule Modal */}
      <ScheduleModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Index;
