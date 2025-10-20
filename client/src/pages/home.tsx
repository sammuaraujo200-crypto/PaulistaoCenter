import { Phone, MapPin, Clock, Shield, Users, CheckCircle, ArrowRight, MessageCircle, CreditCard, Banknote, Menu, X, Smartphone, ChevronDown, Package, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import logoImage from "@assets/Logo Paulistao2 (2)[1]_1760385086893.png";
import lojaImage from "@assets/Imagem do WhatsApp de 2025-10-13 à(s) 17.58.13_44c408a9_1760389464947.jpg";
import materiaisBasicosImg from "@assets/stock_images/materiais.jpg";
import hidraulicaImg from "@assets/stock_images/tubos.jpg";
import ferramentasImg from "@assets/stock_images/ferramentas.jpg";
import eletricaImg from "@assets/stock_images/eletrica.jpg";
import pisosImg from "@assets/stock_images/pisos.jpg";
import { FaWhatsapp } from "react-icons/fa";


interface Product {
  name: string;
}

interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: "materiais-basicos",
    title: "Materiais Básicos",
    description: "Areia, cimento, pedra, tijolos e muito mais",
    image: materiaisBasicosImg,
    products: [
      { name: "Areia Média" },
      { name: "Areia Fina" },
      { name: "Pedra" },
      { name: "Cimento 50kg" },
      { name: "Cal 20kg" },
      { name: "Ferro 10mm 12m" },
      { name: "Tijolo Baiano 6 furos" },
      { name: "Tijolo Baiano 9 furos" },
      { name: "Bloco de Cimento" },
      { name: "Vedalit 1L" }
    ]
  },
  {
    id: "hidraulica",
    title: "Hidráulica",
    description: "Tubos, conexões, registros e acessórios",
    image: hidraulicaImg,
    products: [
      { name: "Tubo PVC 25mm Plastubos" },
      { name: "Tubo PVC 50mm Plastubos" },
      { name: "Tubo PVC 100mm Plastubos" },
      { name: "Conexão Joelho 90° 25mm" },
      { name: "Registro de Pressão" },
      { name: "Válvula de Descarga" },
      { name: "Sifão Sanfonado" },
      { name: "Caixa D'água 500L" },
      { name: "Torneira Jardim" },
      { name: "Torneira Lavatório" }
    ]
  },
  {
    id: "ferramentas",
    title: "Ferramentas",
    description: "Martelos, enxadas, machados e diversas ferramentas",
    image: ferramentasImg,
    products: [
      { name: "Martelo Unha 25mm" },
      { name: "Enxada Larga" },
      { name: "Pá Reta" },
      { name: "Colher de Pedreiro" },
      { name: "Trena 5m" },
      { name: "Nível de Bolha" },
      { name: "Serrote" },
      { name: "Alicate Universal" },
      { name: "Machado" },
      { name: "Martelo de Borracha" }
    ]
  },
  {
    id: "eletrica",
    title: "Elétrica",
    description: "Cabos elétricos, lâmpadas, tomadas e interruptores",
    image: eletricaImg,
    products: [
      { name: "Cabo Flexível 2,5mm" },
      { name: "Cabo Flexível 4mm" },
      { name: "Tomada 10A" },
      { name: "Interruptor Simples" },
      { name: "Lâmpada LED 9W" },
      { name: "Lâmpada LED 12W" },
      { name: "Disjuntor 20A" },
      { name: "Fita Isolante" }
    ]
  },
  {
    id: "pisos",
    title: "Pisos e Revestimentos",
    description: "Pisos, cerâmicas, argamassas e niveladores",
    image: pisosImg,
    products: [
      { name: "Cerâmica 43x43" },
      { name: "Argamassa AC-I" },
      { name: "Argamassa AC-II" },
      { name: "Rejunte Branco" },
      { name: "Rejunte Cinza" },
      { name: "Pisos Antiderrapante" },
      { name: "Espaçador Nivelador" },
      { name: "Cunha" },
      { name: "Máquina de Cortar Piso" },
      { name: "Espátula para Rejunte" }
    ]
  }
];

function CategoryCard({ category }: { category: Category }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [isExpanded]);

  return (
    <Card ref={cardRef} className="overflow-hidden" data-testid={`card-categoria-${category.id}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
          <p className="text-xs md:text-sm mb-3 md:mb-4 opacity-90">{category.description}</p>
        </div>
      </div>
      
      <CardContent className="p-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover-elevate transition-colors"
          data-testid={`button-ver-produtos-${category.id}`}
        >
          <span className="text-sm md:text-base font-medium text-secondary">Ver produtos</span>
          <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        {isExpanded && (
          <div className="border-t">
            <div className="p-4 md:p-6 space-y-2">
              {category.products.map((product, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 py-2 text-sm md:text-base"
                  data-testid={`product-${category.id}-${index}`}
                >
                  <Package className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{product.name}</span>
                </div>
              ))}
            </div>
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <Button 
                onClick={() => {
                  const phone = "5511912186989";
                  window.open(`https://wa.me/${phone}?text=Olá! Gostaria de consultar preços de ${category.title}`, "_blank");
                }}
                className="w-full bg-primary text-primary-foreground" 
                data-testid={`button-consultar-precos-${category.id}`}
              >
                Consultar Preços
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = "tel:1144882983";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511912186989", "_blank");
  };

  const handleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Avenida+São+Paulo+1606+Parque+Paulista+Francisco+Morato+SP+07904-030", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white dark:bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src={logoImage} 
                alt="Paulistão Center" 
                className="h-14 md:h-16 w-auto object-contain"
                data-testid="img-logo"
              />
              <div className="hidden sm:block">
                <h1 className="text-base md:text-lg font-bold text-secondary">Paulistão Center</h1>
                <p className="text-xs md:text-sm text-muted-foreground">Materiais para Construção</p>
              </div>
            </div>

            <div className="flex items-center gap-4 xl:gap-6">
              <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                <button onClick={() => scrollToSection('inicio')} className="text-sm text-foreground hover:text-primary transition-colors font-medium" data-testid="link-inicio">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-sm text-foreground hover:text-primary transition-colors font-medium" data-testid="link-sobre">
                  Sobre Nós
                </button>
                <button onClick={() => scrollToSection('catalogo')} className="text-sm text-foreground hover:text-primary transition-colors font-medium" data-testid="link-catalogo">
                  Catálogo
                </button>
  <button onClick={() => scrollToSection('parcerias')} className="text-sm text-foreground hover:text-primary transition-colors font-medium" data-testid="link-parcerias">
                  Parcerias
                </button>

                <button onClick={() => scrollToSection('contato')} className="text-sm text-foreground hover:text-primary transition-colors font-medium" data-testid="link-contato">
                  Contato
                </button>
              </nav>

              <div className="flex items-center gap-2">
                <Button 
                  onClick={handleCall}
                  className="bg-primary text-primary-foreground hidden md:flex" 
                  size="default"
                  data-testid="button-ligue-agora"
                >
                  Ligue Agora
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  data-testid="button-mobile-menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4 space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-sobre"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('catalogo')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-catalogo"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-contato"
              >
                Contato
              </button>
              <Button 
                onClick={handleCall}
                className="bg-primary text-primary-foreground w-full md:hidden" 
                data-testid="button-ligue-agora-mobile"
              >
                <Phone className="w-4 h-4 mr-2" />
                Ligue Agora
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-4 md:mb-6 leading-tight">
                Paulistão Center<br />
                Materiais para Construção
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Materiais de construção de alta qualidade com preço justo. Atendendo profissionais e particulares com excelência há mais de duas décadas.
              </p>

              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                <Card className="bg-white dark:bg-card">
                  <CardContent className="p-3 md:p-4 text-center">
                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-secondary text-sm md:text-base">+20 anos</p>
                    <p className="text-xs md:text-sm text-muted-foreground">no mercado</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-card">
                  <CardContent className="p-3 md:p-4 text-center">
                    <Users className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold text-secondary text-sm md:text-base">+10.000</p>
                    <p className="text-xs md:text-sm text-muted-foreground">clientes</p>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-card">
                  <CardContent className="p-3 md:p-4 text-center">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-secondary text-sm md:text-base">Qualidade</p>
                    <p className="text-xs md:text-sm text-muted-foreground">garantida</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                <Button 
                  onClick={() => scrollToSection('catalogo')}
                  className="bg-secondary text-secondary-foreground w-full sm:w-auto" 
                  size="lg" 
                  data-testid="button-ver-catalogo"
                >
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-primary text-primary-foreground w-full sm:w-auto" 
                  size="lg" 
                  data-testid="button-fale-conosco"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={lojaImage} 
                  alt="Loja Paulistão Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Card className="absolute -bottom-4 md:-bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white dark:bg-card shadow-lg">
                <CardContent className="p-3 md:p-4 flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm md:text-base">Localização Estratégica</p>
                    <p className="text-xs md:text-sm text-muted-foreground">Parque Paulista</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">Sobre Nós</h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Tradição, qualidade e compromisso com nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed">
                Com mais de 20 anos de tradição no mercado de materiais de construção, o Paulistão Center se destaca pela qualidade de seus produtos, pelo atendimento eficiente, pela localização estratégica e pelo compromisso com entregas dentro do prazo. Trabalhamos com marcas reconhecidas e materiais de alta durabilidade, sempre buscando unir preço justo e confiança em cada projeto.
              </p>

              <Card className="bg-secondary/5 border-secondary/20 mb-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-secondary text-base md:text-lg mb-3">Nossa Missão</h3>
                  <p className="text-sm md:text-base text-foreground">
                    Oferecer materiais de construção com qualidade garantida, preços competitivos e atendimento personalizado, contribuindo para que cada cliente realize suas obras com segurança e tranquilidade.
                  </p>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-bold text-secondary text-base md:text-lg mb-4">Nossos Valores</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">Qualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">Tradição</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">Preço Justo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm md:text-base text-foreground">Confiança</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-4 md:p-6 text-center">
                  <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                  <p className="text-2xl md:text-3xl font-bold mb-2">+20</p>
                  <p className="text-xs md:text-sm opacity-90">Anos de Tradição</p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-4 md:p-6 text-center">
                  <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4" />
                  <p className="text-2xl md:text-3xl font-bold mb-2">+10.000</p>
                  <p className="text-xs md:text-sm opacity-90">Clientes Atendidos</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-card border-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                  <p className="text-base md:text-lg font-bold text-secondary mb-2">Localização</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Estratégica</p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-card border-2">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg font-bold text-secondary mb-2">Preços</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Competitivos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo Section */}
      <section id="catalogo" className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">Nosso Catálogo</h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Confira nossas categorias de produtos mais procuradas, feitas com materiais de alta qualidade
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {/* CTA Banner */}
          <Card className="bg-white dark:bg-card border-2">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4">Não encontrou o que procura?</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                Entre em contato conosco! Temos muito mais produtos disponíveis em nossa loja.
              </p>
              <Button 
                onClick={handleWhatsApp}
                className="bg-green-600 text-white hover:bg-green-700" 
                size="lg" 
                data-testid="button-whatsapp-catalogo"
              >
                <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato e Localização Section */}
      <section id="contato" className="py-12 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3">Contato e Localização</h2>
            <div className="w-20 md:w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Visite nossa loja ou entre em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="space-y-4 md:space-y-6">
              {/* Telefones */}
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-secondary mb-3 text-sm md:text-base">Telefones</h3>
                      <a href="tel:1144882983" className="text-foreground mb-3 block hover:text-primary transition-colors text-sm md:text-base" data-testid="link-phone">
                        (11) 4488-2983
                      </a>
                      <p className="text-foreground text-sm md:text-base" data-testid="text-whatsapp">
                        (11) 91218-6989
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endereço */}
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-secondary mb-3 text-sm md:text-base">Endereço</h3>
                      <p className="text-foreground text-sm md:text-base">Avenida São Paulo, 1606 - Parque Paulista</p>
                      <p className="text-foreground text-sm md:text-base">Francisco Morato – SP</p>
                      <p className="text-muted-foreground text-xs md:text-sm mt-1">CEP: 07904-030</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horário de Funcionamento */}
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-secondary mb-3 text-sm md:text-base">Horário de Funcionamento</h3>
                      <p className="text-foreground text-sm md:text-base">Segunda a Sexta: 8h às 17:30h</p>
                      <p className="text-foreground text-sm md:text-base">Sábado: 8h às 12h</p>
                      <p className="text-foreground text-sm md:text-base">Domingo: Fechado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Formas de Pagamento */}
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Formas de Pagamento</h3>
                      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="flex items-center gap-2">
                          <Banknote className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">Dinheiro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">PIX</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">Débito</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                          <span className="text-xs md:text-sm">Crédito</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <p className="text-xs md:text-sm font-semibold">Parcelamento em até 18x sem juros*</p>
                        <p className="text-xs opacity-80 mt-1">*Confirme condições na loja</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-full bg-muted rounded-xl flex items-center justify-center min-h-[300px] md:min-h-[400px] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Avenida+S%C3%A3o+Paulo+1606+Parque+Paulista+Francisco+Morato+SP+07904-030&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Paulistão Center"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto" 
              size="lg" 
              data-testid="button-whatsapp-bottom"
            >
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              onClick={handleCall}
              className="bg-secondary text-secondary-foreground w-full sm:w-auto" 
              size="lg" 
              data-testid="button-ligar-agora"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button 
              onClick={handleMaps}
              className="bg-primary text-primary-foreground w-full sm:w-auto" 
              size="lg" 
              data-testid="button-como-chegar"
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Como Chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={logoImage} 
                  alt="Paulistão Center" 
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="text-xs md:text-sm opacity-90 mb-3 md:mb-4">
                Mais de 20 anos construindo sonhos
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Materiais de construção de qualidade com preço justo há mais de 20 anos.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
              <div className="space-y-2 text-xs md:text-sm opacity-90">
                <a href="tel:1144882983" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(11) 4488-2983</span>
                </a>
                <button onClick={handleWhatsApp} className="flex items-center gap-2 hover:opacity-100 transition-opacity text-left">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>(11) 91218-6989</span>
                </button>
                <button onClick={handleMaps} className="flex items-start gap-2 hover:opacity-100 transition-opacity text-left">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Avenida São Paulo, 1606 - Parque Paulista<br />Francisco Morato – SP</span>
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Horário de Funcionamento</h4>
              <div className="space-y-2 text-xs md:text-sm opacity-90">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  Segunda a Sexta: 8h às 17:30h
                </p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 md:pt-8">
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/paulistaocenter/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-100 transition-opacity opacity-90"
                  data-testid="link-instagram-loja"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-xs md:text-sm">@paulistaocenter</span>
                </a>
                <span className="text-white/20">|</span>
                <a 
                  href="https://www.instagram.com/sz_samz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-100 transition-opacity opacity-90"
                  data-testid="link-instagram-dev"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-xs md:text-sm">@sz_samz - Desenvolvedor do Site</span>
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4">
              <p className="text-xs md:text-sm opacity-80 text-center">
                © 2025 Paulistão Center Materiais para Construção. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
