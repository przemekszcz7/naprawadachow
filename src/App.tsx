import { Phone, Mail, Wrench, Shield, HardHat, Droplets, ChevronRight, Menu, X, Hammer } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 mb-4">
    <div className="h-[2px] w-12 bg-orange-primary" />
    <span className="font-ui text-[11px] font-bold tracking-[0.25em] text-orange-primary uppercase">
      {text}
    </span>
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}) => {
  const baseStyles = "relative px-8 py-4 font-ui font-bold tracking-[0.12em] uppercase transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-orange-primary text-text-primary hover:bg-orange-dark shadow-[0_0_20px_rgba(232,93,4,0.2)]",
    outline: "border-2 border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-text-primary"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Naprawa i Konserwacja",
      description: "Kompleksowy serwis dachów płaskich i skośnych. Przedłużamy żywotność Twojego poszycia.",
      icon: <Wrench className="w-12 h-12" />,
    },
    {
      title: "Kładzenie Papy Termo",
      description: "Profesjonalna hydroizolacja dachów z wykorzystaniem nowoczesnych pap termozgrzewalnych.",
      icon: <Droplets className="w-12 h-12" />,
    },
    {
      title: "Elementy Więźby",
      description: "Wymiana i wzmacnianie konstrukcji drewnianych. Solidny szkielet dla Twojego bezpieczeństwa.",
      icon: <Hammer className="w-12 h-12" />,
    },
    {
      title: "Usuwanie Przecieków",
      description: "Ekspresowa diagnostyka i likwidacja nieszczelności. Działamy niezależnie od pogody.",
      icon: <Shield className="w-12 h-12" />,
    }
  ];

  return (
    <div className="min-h-screen selection:bg-orange-primary selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 rust-stripe-bottom ${
          scrolled ? "bg-bg-dark/95 backdrop-blur-md py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
              NAPRAWA <span className="text-orange-primary">DACHÓW</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <a href="#services" className="font-ui text-xs font-bold tracking-widest text-text-secondary hover:text-orange-primary transition-colors uppercase">Usługi</a>
            <a href="#about" className="font-ui text-xs font-bold tracking-widest text-text-secondary hover:text-orange-primary transition-colors uppercase">O nas</a>
            <a href="#contact" className="font-ui text-xs font-bold tracking-widest text-text-secondary hover:text-orange-primary transition-colors uppercase">Kontakt</a>
            <a href="tel:723284261" className="flex items-center gap-3 bg-orange-primary/10 border border-orange-primary/30 px-5 py-2 group hover:bg-orange-primary transition-all duration-300">
              <Phone className="w-4 h-4 text-orange-primary group-hover:text-white" />
              <span className="font-ui text-sm font-black text-orange-primary group-hover:text-white tracking-widest">723 284 261</span>
            </a>
          </div>

          <button className="md:hidden text-text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-bg-dark flex flex-col items-center justify-center gap-10"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl uppercase font-bold text-text-primary italic">Usługi</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl uppercase font-bold text-text-primary italic">O nas</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="font-heading text-4xl uppercase font-bold text-text-primary italic">Kontakt</a>
            <div className="flex flex-col items-center gap-4 mt-10">
              <span className="font-ui text-orange-primary tracking-widest uppercase text-xs">Zadzwoń teraz</span>
              <a href="tel:723284261" className="font-heading text-4xl text-text-primary">723 284 261</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-bg-dark">
          <img 
            src="https://images.unsplash.com/photo-1621905252507-b354bcadc471?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            alt="Roofing construction"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent" />
          <div className="absolute inset-0 corrugated-metal opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <SectionLabel text="Profesjonalny serwis dachowy" />
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.9] font-bold uppercase tracking-tight text-text-primary mb-8">
              MOC <span className="text-orange-primary italic">PRZEMYSŁOWEJ</span> PRECYZJI
            </h1>
            <p className="font-sans text-lg md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12">
              Od kładzenia papy termo po wymianę więźby dachowej. Gwarantujemy szczelność i solidność wykonania, na której możesz polegać przez lata.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>Darmowa Wycena</Button>
              <a href="tel:723284261" className="flex items-center gap-4 px-8 py-4 font-ui font-bold text-text-primary border border-graphite-light hover:border-orange-primary transition-all duration-300">
                <div className="bg-orange-primary p-2">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span>723 284 261</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Rust Stripe */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-orange-primary rust-stripe-top opacity-50" />
      </section>


      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8 text-left">
            <div className="max-w-2xl">
              <SectionLabel text="Nasze specjalizacje" />
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tight text-white italic">
                ZAKRES <span className="text-orange-primary">OPERACYJNY</span>
              </h2>
            </div>
            <div className="flex flex-col md:text-right md:items-end">
              <p className="text-text-muted max-w-sm mb-4">
                Wykorzystujemy materiały najwyższej jakości i techniki sprawdzone w ekstremalnych warunkach.
              </p>
              <div className="h-1 w-32 bg-orange-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative bg-bg-card p-10 overflow-hidden border border-graphite-mid hover:border-orange-primary transition-all duration-500 flex flex-col items-center text-center"
              >
                <div className="mb-10 relative">
                  <div className="w-24 h-24 bg-bg-primary text-orange-primary border border-orange-primary/20 flex items-center justify-center transform rotate-45 group-hover:bg-orange-primary group-hover:text-white transition-all duration-500">
                    <div className="-rotate-45">
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-full h-full border border-orange-primary/10 -z-10 transform rotate-12" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase mb-4 text-text-primary">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6 italic">{service.description}</p>
                <div className="mt-auto flex items-center gap-2 text-orange-primary font-ui font-black uppercase tracking-widest text-xs">
                  Więcej informacji <ChevronRight className="w-4 h-4" />
                </div>
                {/* Corrugated Accent */}
                <div className="absolute top-0 right-0 w-2 h-full corrugated-metal group-hover:bg-orange-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heavy Machinery (Features) Section */}
      <section id="about" className="relative py-24 md:py-32 bg-bg-light noise-texture overflow-hidden">
        {/* Angular cut */}
        <div className="absolute top-0 left-0 w-full h-24 bg-bg-dark" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-orange-primary" />
                <span className="font-ui text-[11px] font-bold tracking-[0.25em] text-orange-primary uppercase">O Naszej Firmie</span>
              </div>
              <h2 className="font-heading text-4xl md:text-7xl font-bold uppercase tracking-tight text-bg-dark mb-10 leading-[0.9]">
                SOLIDNE FUNDAMENTY NA <span className="text-orange-primary">WYSOKOŚCI</span>
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed mb-10">
                Podejmujemy się najtrudniejszych wyzwań. Nasz zespół to doświadczeni profesjonaliści, dla których dach to najważniejsza tarcza budynku. Czy to rutynowa konserwacja, czy awaryjna naprawa przecieku – działamy z bezwzględną precyzją.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 lg:mb-0">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-bg-dark flex items-center justify-center text-orange-primary">
                    <Shield />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase text-bg-dark">Atakujemy problem</h4>
                    <p className="text-sm text-text-dark-muted">Nie zwlekamy. Lokalizujemy usterkę i eliminujemy ją natychmiast.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-bg-dark flex items-center justify-center text-orange-primary">
                    <HardHat />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase text-bg-dark">Ciężka artyleria</h4>
                    <p className="text-sm text-text-dark-muted">Używamy profesjonalnego sprzętu do kładzenia papy i obróbek.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group max-w-lg mx-auto lg:max-w-none">
              <div className="aspect-square bg-bg-concrete p-2 border-4 border-bg-dark overflow-hidden">
                 <img 
                  src="https://i.postimg.cc/bNDnRfvK/660417881-122096479940847088-6805631884723164321-n.jpg" 
                  alt="Naprawa Dachów Logo" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-24 md:w-40 h-24 md:h-40 bg-orange-primary/10 -z-10" />
              <div className="absolute -top-6 md:-top-10 -left-6 md:-left-10 w-24 md:w-40 h-24 md:h-40 corrugated-metal opacity-20 -z-10" />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-orange-primary text-white p-4 md:p-8 italic font-heading text-xl md:text-2xl font-bold">
                JAKOŚĆ BEZ KOMPROMISÓW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full corrugated-metal opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-bg-card border-l-[10px] border-orange-primary p-6 md:p-20 shadow-2xl rust-stripe-top">
            <h2 className="font-heading text-3xl md:text-6xl font-bold uppercase text-text-primary mb-6 italic">Masz problem z dachem?</h2>
            <p className="font-sans text-lg md:text-xl text-text-secondary mb-12 max-w-2xl">
              Skontaktuj się bezpośrednio z naszym mistrzem dekarstwa. Gwarantujemy uczciwą wycenę i szybki termin realizacji.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <a href="tel:723284261" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-primary flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12">
                    <Phone className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-ui font-bold text-text-muted uppercase tracking-widest mb-1 italic">Zadzwoń teraz</span>
                    <span className="block font-heading text-2xl md:text-4xl text-text-primary font-bold">723 284 261</span>
                  </div>
                </a>

                <a href="mailto:agatakwiat72@gmail.com" className="flex items-center gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-primary border border-orange-primary/30 flex items-center justify-center shrink-0 transition-transform group-hover:-rotate-12">
                    <Mail className="w-6 h-6 md:w-8 md:h-8 text-orange-primary" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-ui font-bold text-text-muted uppercase tracking-widest mb-1 italic">Napisz e-mail</span>
                    <span className="block font-sans text-sm md:text-lg text-text-secondary font-medium break-all md:break-normal">agatakwiat72@gmail.com</span>
                  </div>
                </a>
              </div>

              <div className="bg-bg-primary p-8 border border-graphite-mid">
                <h4 className="font-heading text-xl font-bold uppercase mb-6 text-orange-primary italic">Szybkie pytania?</h4>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <ChevronRight className="text-orange-primary shrink-0" />
                    <span className="text-sm text-text-secondary">Wycena w 24 godziny od zgłoszenia</span>
                  </div>
                  <div className="flex gap-4">
                    <ChevronRight className="text-orange-primary shrink-0" />
                    <span className="text-sm text-text-secondary">Przeglądy okresowe przed zimą i latem</span>
                  </div>
                  <div className="flex gap-4">
                    <ChevronRight className="text-orange-primary shrink-0" />
                    <span className="text-sm text-text-secondary">Gwarancja na wykonane prace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-dark py-20 border-t border-graphite-mid relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <span className="font-heading text-3xl font-bold tracking-tight text-text-primary block mb-8">
                NAPRAWA <span className="text-orange-primary italic">DACHÓW</span>
              </span>
              <p className="text-text-muted max-w-sm leading-relaxed italic">
                Zajmujemy się profesjonalną naprawą i konserwacją dachów na terenie całego województwa. Nasza wiedza i doświadczenie to Twoja pewność suchych i bezpiecznych wnętrz.
              </p>
            </div>
            <div>
              <h5 className="font-ui text-sm font-bold uppercase tracking-widest text-text-primary mb-8 border-l-4 border-orange-primary pl-4 italic">Usługi</h5>
              <ul className="space-y-4 text-text-muted">
                <li><a href="#" className="hover:text-orange-primary transition-colors italic">Dachy płaskie</a></li>
                <li><a href="#" className="hover:text-orange-primary transition-colors italic">Kładzenie papy termo</a></li>
                <li><a href="#" className="hover:text-orange-primary transition-colors italic">Więźba dachowa</a></li>
                <li><a href="#" className="hover:text-orange-primary transition-colors italic">Obróbki blacharskie</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-ui text-sm font-bold uppercase tracking-widest text-text-primary mb-8 border-l-4 border-orange-primary pl-4 italic">Kontakt</h5>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-orange-primary" /> 723 284 261</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-orange-primary" /> agatakwiat72@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-graphite-mid/50 text-xs text-text-muted font-ui tracking-widest uppercase">
            <p>&copy; {new Date().getFullYear()} Naprawa Dachów. Wszystkie prawa zastrzeżone.</p>

          </div>
        </div>

        {/* Bottom Rust Stripe */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-primary rust-stripe-bottom" />
      </footer>
    </div>
  );
}
