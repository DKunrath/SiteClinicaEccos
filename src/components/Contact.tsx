import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Clock, Mail, MessageCircle, Navigation, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactProps {
  onScheduleClick: () => void;
}

export const Contact = ({ onScheduleClick }: ContactProps) => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Novo Hamburgo',
      info: '(51) 3582-7864',
      subInfo: 'Atendimento especializado',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Sapiranga',
      info: '(51) 3599-3392',
      subInfo: 'Cuidado personalizado',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Campo Bom',
      info: '(51) 3598-2779',
      subInfo: 'Tecnologia avançada',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '(51) 99791-5203',
      subInfo: 'Atendimento rápido',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Agende seu exame agora',
      color: 'from-green-500 to-blue-600',
      action: () => window.open('https://wa.me/5551997915203?text=Olá! Gostaria de agendar um exame na ECCOS.', '_blank')
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Veja nossos momentos especiais',
      color: 'from-pink-500 to-blue-600',
      action: () => window.open('https://www.instagram.com/clinicaeccos', '_blank')
    },
    {
      icon: Calendar,
      title: 'Agendar Exame',
      description: 'Marque seu horário online',
      color: 'from-teal-600 to-blue-600',
      action: onScheduleClick
    }
  ];

  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/10 to-success/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tl from-success/10 to-primary/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/10 to-blue-600/10 px-4 py-2 rounded-full mb-4">
            <Phone className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-600">Entre em Contato</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-poppins">
            3 unidades para{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              atendê-lo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Novo Hamburgo, Sapiranga e Campo Bom. Escolha a unidade mais próxima 
            e agende seu exame de diagnóstico por imagem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 font-medium mb-1">
                    {item.info}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {item.subInfo}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins text-center">
                Fale conosco agora
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={action.action}
                    className={`group flex items-center gap-4 p-4 bg-gradient-to-r ${action.color} hover:shadow-lg rounded-xl transition-all duration-300 text-left`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg">{action.title}</h4>
                      <p className="text-white/90 text-sm">{action.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map and Location */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/30">
              <div className="relative h-80 bg-gradient-to-br from-primary/5 to-success/5">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                      Nossa Localização
                    </h3>
                    <p className="text-gray-600">
                      Av. Brasil, 1390, Sala 203<br />
                      Campo Bom/RS
                    </p>
                  </div>
                </div>
                
                {/* Map embed */}
                <iframe
                  className="absolute inset-0 w-full h-full opacity-70 hover:opacity-90 transition-opacity duration-300"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.7891234567!2d-51.123456789!3d-29.987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU5JzE1LjYiUyA1McKwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                      Como Chegar
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Localizada na principal avenida de Campo Bom, com fácil acesso 
                      e estacionamento disponível na região. Próximo aos principais pontos comerciais da cidade.
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={() => window.open('https://maps.google.com/?q=Av.+Brasil+1390+Campo+Bom+RS', '_blank')}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  <Navigation className="mr-2" size={18} />
                  Ver no Google Maps
                </Button>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100"
            >
              <h4 className="font-semibold text-gray-900 mb-2 font-poppins">Atendimento de Emergência</h4>
              <p className="text-gray-600 text-sm mb-3">
                Para emergências fora do horário comercial, entre em contato através do WhatsApp.
              </p>
              <div className="flex items-center gap-2 text-red-600 font-medium">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(51) 99999-9999 - 24h</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};