import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplet, Palette, Hand, Eye } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import ProductCard from './components/ProductCard';
import ReviewCard from './components/ReviewCard';
import Cart from './components/Cart';
import WhatsAppButton from './components/WhatsAppButton';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import './App.css';

// Dados dos serviços
const services = [
  {
    id: 1,
    name: 'Corte Feminino',
    description: 'Corte personalizado de acordo com seu estilo e formato de rosto',
    price: '80,00',
    duration: '45 min',
    icon: <Scissors className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    name: 'Escova e Penteado',
    description: 'Escova profissional e penteados para todas as ocasiões',
    price: '60,00',
    duration: '1h',
    icon: <Sparkles className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    name: 'Coloração e Mechas',
    description: 'Coloração completa ou mechas com produtos de alta qualidade',
    price: '150,00',
    duration: '2h',
    icon: <Palette className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    name: 'Tratamento Capilar',
    description: 'Hidratação profunda e tratamentos especializados',
    price: '120,00',
    duration: '1h 30min',
    icon: <Droplet className="h-8 w-8 text-white" />,
  },
  {
    id: 5,
    name: 'Manicure / Pedicure',
    description: 'Cuidados completos para suas unhas com esmaltação',
    price: '50,00',
    duration: '1h',
    icon: <Hand className="h-8 w-8 text-white" />,
  },
  {
    id: 6,
    name: 'Design de Sobrancelhas',
    description: 'Design personalizado com técnicas modernas',
    price: '40,00',
    duration: '30 min',
    icon: <Eye className="h-8 w-8 text-white" />,
  },
];

// Dados dos produtos
const products = [
  {
    id: 1,
    name: 'Shampoo Hidratante',
    description: 'Shampoo profissional para hidratação profunda',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Condicionador Nutritivo',
    description: 'Condicionador que nutre e fortalece os fios',
    price: 95.00,
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Máscara Capilar',
    description: 'Máscara de tratamento intensivo',
    price: 125.00,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Óleo Finalizador',
    description: 'Óleo para finalização e brilho intenso',
    price: 78.00,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Kit Hidratação',
    description: 'Kit completo para hidratação caseira',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Escova Profissional',
    description: 'Escova térmica para modelagem perfeita',
    price: 145.00,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop',
  },
];

// Dados das avaliações
const reviews = [
  {
    id: 1,
    name: 'Maria Silva',
    rating: 5,
    comment: 'Atendimento excepcional! Adorei o resultado do meu corte e coloração. Ambiente acolhedor e profissionais muito atenciosas.',
    date: 'Há 2 semanas',
  },
  {
    id: 2,
    name: 'Ana Paula',
    rating: 5,
    comment: 'Melhor salão da região! Sempre saio de lá me sentindo linda e renovada. Super recomendo!',
    date: 'Há 1 mês',
  },
  {
    id: 3,
    name: 'Juliana Costa',
    rating: 5,
    comment: 'Profissionais qualificadas e produtos de primeira qualidade. Meu cabelo nunca esteve tão bonito!',
    date: 'Há 3 semanas',
  },
  {
    id: 4,
    name: 'Carla Mendes',
    rating: 5,
    comment: 'Ambiente maravilhoso e atendimento impecável. Virei cliente fiel!',
    date: 'Há 1 semana',
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header onCartClick={() => setIsCartOpen(true)} />
          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <WhatsAppButton />

          {/* Hero Section */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
                  Beleza que Transforma
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-poppins mb-8 max-w-2xl mx-auto">
                  Seu salão de beleza feminino, onde cada detalhe é pensado para realçar sua beleza natural
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-poppins px-8 py-4 rounded-full text-lg shadow-lg"
                >
                  Conheça Nossos Serviços
                </motion.button>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                  Sobre Nós
                </h2>
                <p className="text-lg text-muted-foreground font-poppins mb-6">
                  Há mais de 10 anos, nosso salão tem sido um refúgio de beleza e bem-estar para mulheres que buscam cuidado especializado e um ambiente acolhedor. Nossa equipe de profissionais altamente qualificadas está sempre atualizada com as últimas tendências e técnicas do mercado.
                </p>
                <p className="text-lg text-muted-foreground font-poppins">
                  Acreditamos que beleza vai além da estética - é sobre autoestima, confiança e o cuidado que cada mulher merece. Por isso, oferecemos não apenas serviços de excelência, mas uma experiência completa que valoriza cada cliente de forma única e especial.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                  Nossos Serviços
                </h2>
                <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">
                  Oferecemos uma ampla gama de serviços para realçar sua beleza
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                  Produtos Profissionais
                </h2>
                <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">
                  Produtos de alta qualidade para você cuidar da sua beleza em casa
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section id="reviews" className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                  O Que Dizem Nossas Clientes
                </h2>
                <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto">
                  Avaliações reais de quem confia em nosso trabalho
                </p>
              </motion.div>
              <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
                {reviews.map((review, index) => (
                  <ReviewCard key={review.id} review={review} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Location Section */}
          <section id="contact" className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                  Visite-nos
                </h2>
                <p className="text-lg text-muted-foreground font-poppins max-w-2xl mx-auto mb-8">
                  Estamos localizadas no coração da cidade, prontas para recebê-la
                </p>
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976405553834!2d-46.65844368502207!3d-23.561414684682943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="text-center">
                  <p className="text-lg font-poppins mb-2">
                    <strong>Endereço:</strong> Rua das Flores, 123 - Centro, São Paulo - SP
                  </p>
                  <p className="text-lg font-poppins mb-4">
                    <strong>Telefone:</strong> (11) 99999-9999
                  </p>
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-poppins px-6 py-3 rounded-full shadow-lg"
                  >
                    Abrir no Google Maps
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;

