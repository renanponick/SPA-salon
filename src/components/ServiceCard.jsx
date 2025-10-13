import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

export default function ServiceCard({ service, index }) {
  const handleBooking = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de agendar um horário para ${service.name}.`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-2">
        {service.name}
      </h3>
      <p className="text-muted-foreground font-poppins text-sm mb-4">
        {service.description}
      </p>
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center space-x-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="font-poppins">{service.duration}</span>
        </div>
        <div className="flex items-center space-x-1 text-pink-500 font-semibold">
          <DollarSign className="h-4 w-4" />
          <span className="font-poppins">{service.price}</span>
        </div>
      </div>
      <Button
        onClick={handleBooking}
        className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white"
      >
        Agendar Agora
      </Button>
    </motion.div>
  );
}

