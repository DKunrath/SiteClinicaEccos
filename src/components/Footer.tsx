import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Instagram, Clock, Shield, Award, Star, Brain } from 'lucide-react';
import logoEccos from '@/assets/logo_magnolia.png'; // Temporário - usar logo da ECCOS quando disponível

export const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    { name: 'Morfológica 1º Trimestre', icon: Heart },
    { name: 'Ultrassom Obstétrico', icon: Shield },
    { name: 'Ultrassom Geral', icon: Brain },
    { name: 'Exames Especializados', icon: Star }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      content: 'Novo Hamburgo: (51) 3582-7864\nSapiranga: (51) 3599-3392\nCampo Bom: (51) 3598-2779',
      link: null
    },
    {
      icon: Phone,
      content: '(51) 99791-5203',
      link: 'https://wa.me/5551997915203'
    },
    {
      icon: Mail,
      content: 'contato@clinicaeccos.com.br',
      link: 'mailto:contato@clinicaeccos.com.br'
    },
    {
      icon: Award,
      content: '35 anos de experiência\nem diagnóstico por imagem',
      link: null
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-success/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tl from-success/20 to-primary/20 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6">
              <div className="relative">
                <img 
                  src={logoEccos} 
                  alt="Logo ECCOS" 
                  className="w-12 h-12 rounded-xl shadow-lg"
                />
              </div>
              <div className="ml-3">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent font-poppins">
                  ECCOS
                </h3>
                <p className="text-xs text-gray-400 font-medium">Diagnóstico por Imagem</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Há 35 anos cuidando de famílias com excelência em diagnóstico por imagem. 
              Especializados em momentos únicos da maternidade e em todos os exames que você precisa.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/5551999999999', '_blank')}
                className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-white" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.instagram.com/magnoliaclinicadesaude', '_blank')}
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6 font-poppins">
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300 text-left w-full"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6 font-poppins">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center group-hover:from-primary/40 group-hover:to-success/40 transition-all duration-300">
                    <service.icon className="w-4 h-4" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold text-white mb-6 font-poppins">
              Entre em Contato
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  {info.link ? (
                    <motion.a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-3 text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/40 group-hover:to-success/40 transition-all duration-300">
                        <info.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm leading-relaxed whitespace-pre-line">{info.content}</span>
                    </motion.a>
                  ) : (
                    <div className="flex items-start gap-3 text-gray-300">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm leading-relaxed whitespace-pre-line">{info.content}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Magnólia Clínica de Saúde. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Desenvolvido por</span>
              <motion.a
                href="https://www.instagram.com/dahor.mkt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="text-green-500 hover:text-green-400 text-sm font-semibold transition-colors duration-300"
              >
                DAHOR
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};