import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Award, Shield, Star } from 'lucide-react';
import heroImage from '@/assets/hero-magnolia.webp';

interface HeroProps {
  onScheduleClick: () => void;
}

export const Hero = ({ onScheduleClick }: HeroProps) => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-tl from-primary/15 to-primary-light/25 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-success/10 rounded-full blur-xl"
        />
        
        {/* Geometric shapes */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-primary/30 rotate-45"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-success/40 rounded-full"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Card - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/30">
              {/* Decorative corner elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-success rounded-full opacity-30"></div>
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/10 to-blue-600/10 px-4 py-2 rounded-full mb-6 border border-teal-600/20"
              >
                <Heart className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-600">ECCOS - Diagnóstico por Imagem</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight"
              >
                Seus primeiros{' '}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  encontros
                </span>{' '}
                com seu bebê
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Excelência em diagnóstico por imagem há 35 anos. 
                Especialistas em ultrassonografia morfológica do 1º trimestre e todos os exames de imagem que você precisa.
              </motion.p>
              
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-teal-600/10 rounded-lg">
                    <Award className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">35 anos de experiência</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600/10 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Tecnologia avançada</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  variant="hero" 
                  size="xl"
                  onClick={onScheduleClick}
                  className="group relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">Agende seu exame</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </Button>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <div className="flex -space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <span className="text-sm font-medium">Diagnóstico de confiança</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Card - Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative lg:justify-self-end"
          >
            <div className="relative">
              {/* Main Image Card */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src={heroImage} 
                    alt="ECCOS - Clínica de diagnóstico por imagem moderna e acolhedora"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating badge on image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">Novo Hamburgo • Sapiranga • Campo Bom</span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Decorative elements around the card */}
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary/40 rounded-lg rotate-45"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-success to-primary rounded-full shadow-lg"
                />
              </motion.div>
              
              {/* Background decorative card */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-gradient-to-br from-primary/10 to-success/10 rounded-3xl blur-sm"></div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cursor-pointer hover:border-primary transition-colors"
          >
            <div className="w-1 h-3 bg-primary/50 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};