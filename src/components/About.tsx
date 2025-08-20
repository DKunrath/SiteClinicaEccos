import { motion } from 'framer-motion';
import { Heart, Users, Shield, Star, Award, Clock, MapPin } from 'lucide-react';
import magnolia1 from '@/assets/magnolia-1.webp';
import magnolia2 from '@/assets/magnolia-2.jpg';

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Momentos Únicos',
      description: 'Transformamos cada exame em um encontro especial entre você e seu bebê.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: '35 Anos de Experiência',
      description: 'Décadas de especialização em diagnóstico por imagem e ultrassonografia.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Tecnologia Avançada',
      description: 'Equipamentos de última geração para diagnósticos precisos e seguros.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Excelência em Diagnóstico',
      description: 'Laudos detalhados e acompanhamento especializado em cada etapa.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Famílias atendidas', color: 'from-teal-600 to-blue-600' },
    { icon: Award, value: '35', label: 'Anos de experiência', color: 'from-blue-500 to-blue-700' },
    { icon: Clock, value: '3', label: 'Unidades de atendimento', color: 'from-indigo-500 to-blue-600' },
    { icon: MapPin, value: 'RS', label: 'Região Metropolitana', color: 'from-cyan-500 to-blue-600' }
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-primary/10 to-success/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-success/10 to-primary/10 rounded-full blur-2xl"
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
            <Heart className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-medium text-teal-600">Sobre a ECCOS</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4 font-poppins">
            35 anos cuidando de{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              você e sua família
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Excelência em diagnóstico por imagem, especializados em momentos únicos da maternidade
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                A <strong className="text-teal-600 font-semibold">ECCOS</strong> é referência em diagnóstico por imagem há 35 anos, 
                especializada em momentos únicos da maternidade. Nossa ultrassonografia morfológica do primeiro 
                trimestre revela não apenas o desenvolvimento do bebê, mas cria memórias inesquecíveis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Entre a 11ª e 13ª semana de gestação, oferecemos muito mais que um exame: 
                proporcionamos um encontro especial, onde você vê o coração batendo forte 
                e os primeiros traços sendo formados. É um marco, um suspiro, um "olá" cheio de amor.
              </p>

              {/* Mission Statement */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-600/10 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">Nossa Especialidade</h3>
                <p className="text-gray-700 italic">
                  "Transformar cada exame em um momento especial, oferecendo diagnósticos precisos 
                  com o cuidado e carinho que sua família merece há 35 anos."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-2xl"
              >
                <img 
                  src={magnolia1} 
                  alt="Interior da ECCOS - Ambiente acolhedor para diagnóstico por imagem"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="absolute -bottom-6 -right-6 w-48 h-32 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-xl"
              >
                <img 
                  src={magnolia2} 
                  alt="Equipamentos modernos da ECCOS para diagnóstico por imagem"
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-poppins`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};