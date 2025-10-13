import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-4">
              Beleza
            </h3>
            <p className="text-muted-foreground font-poppins">
              Seu salão de beleza feminino, onde cuidado e elegância se encontram.
            </p>
          </div>

          {/* Horário */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="h-5 w-5 text-pink-400" />
              <h4 className="font-poppins font-semibold">Horário de Funcionamento</h4>
            </div>
            <div className="space-y-1 text-muted-foreground font-poppins text-sm">
              <p>Segunda a Sexta: 9h - 19h</p>
              <p>Sábado: 9h - 17h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Contato */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-5 w-5 text-pink-400" />
              <h4 className="font-poppins font-semibold">Localização</h4>
            </div>
            <p className="text-muted-foreground font-poppins text-sm mb-4">
              Rua das Flores, 123<br />
              Centro, São Paulo - SP<br />
              CEP: 01234-567
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-poppins text-sm">
            © {new Date().getFullYear()} Salão de Beleza. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

