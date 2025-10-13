import { Phone, MapPin, Clock, Shield, Users, Building2, CheckCircle, ArrowRight, MessageCircle, CreditCard, Banknote, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

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

  return (
    <div className="min-h-screen bg-background">
      {/* Top Info Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(11) 4488-2983</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Avenida São Paulo, 1606 - Parque Paulista</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>Segunda a Sexta: 8h às 17:30h</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">Paulistão Center</h1>
                <p className="text-sm text-muted-foreground">Materiais para Construção</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-inicio">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-sobre">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('catalogo')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-catalogo">
                Catálogo
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-contato">
                Contato
              </button>
            </nav>

            <div className="flex items-center gap-2">
              <Button className="bg-primary text-primary-foreground hidden md:flex" data-testid="button-ligue-agora">
                <Phone className="w-4 h-4 mr-2" />
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
              <Button className="bg-primary text-primary-foreground w-full md:hidden" data-testid="button-ligue-agora-mobile">
                <Phone className="w-4 h-4 mr-2" />
                Ligue Agora
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 leading-tight">
                Paulistão Center<br />
                Materiais para Construção
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Materiais de construção de alta qualidade com preço justo. Atendendo profissionais e particulares com excelência há mais de duas décadas.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-secondary">+20 anos</p>
                    <p className="text-sm text-muted-foreground">no mercado</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-bold text-secondary">+1000</p>
                    <p className="text-sm text-muted-foreground">clientes</p>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-secondary">Qualidade</p>
                    <p className="text-sm text-muted-foreground">garantida</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('catalogo')}
                  className="bg-secondary text-secondary-foreground" 
                  size="lg" 
                  data-testid="button-ver-catalogo"
                >
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  variant="outline" 
                  className="border-primary text-primary" 
                  size="lg" 
                  data-testid="button-fale-conosco"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
                <Building2 className="w-32 h-32 text-muted-foreground/30" />
              </div>
              <Card className="absolute -bottom-6 left-6 right-6 bg-white shadow-lg">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Localização Estratégica</p>
                    <p className="text-sm text-muted-foreground">Francisco Morato - SP</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Sobre Nós</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tradição, qualidade e compromisso com nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-foreground mb-6 leading-relaxed">
                Com mais de 20 anos de tradição no mercado de materiais de construção, o Paulistão Center se destaca pela qualidade de seus produtos, pelo atendimento eficiente, pela localização estratégica e pelo compromisso com entregas dentro do prazo. Trabalhamos com marcas reconhecidas e materiais de alta durabilidade, sempre buscando unir preço justo e confiança em cada projeto.
              </p>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-secondary text-lg mb-3">Nossa Missão</h3>
                  <p className="text-foreground">
                    Oferecer materiais de construção com qualidade garantida, preços competitivos e atendimento personalizado, contribuindo para que cada cliente realize suas obras com segurança e tranquilidade.
                  </p>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-bold text-secondary text-lg mb-4">Nossos Valores</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Qualidade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Tradição</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Atendimento Personalizado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Preço Justo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Confiança</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">+20</p>
                  <p className="text-sm opacity-90">Anos de Tradição</p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <p className="text-3xl font-bold mb-2">+1000</p>
                  <p className="text-sm opacity-90">Clientes Atendidos</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-bold text-secondary mb-2">Localização</p>
                  <p className="text-sm text-muted-foreground">Estratégica</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-bold text-secondary mb-2">Preços</p>
                  <p className="text-sm text-muted-foreground">Competitivos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo Section */}
      <section id="catalogo" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Nosso Catálogo</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
              Confira nossas categorias de produtos com materiais de alta qualidade
            </p>
            <p className="text-sm text-muted-foreground italic">*Imagens ilustrativas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Materiais Básicos */}
            <Card className="group overflow-hidden cursor-pointer hover-elevate" data-testid="card-categoria-materiais-basicos">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-400 to-gray-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Materiais Básicos</h3>
                  <p className="text-sm mb-4 opacity-90">Areia, cimento, pedra, tijolos e muito mais</p>
                  <Button variant="outline" className="w-fit bg-white/10 border-white text-white backdrop-blur-sm" data-testid="button-ver-produtos-materiais-basicos">
                    Ver produtos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Hidráulica */}
            <Card className="group overflow-hidden cursor-pointer hover-elevate" data-testid="card-categoria-hidraulica">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Hidráulica</h3>
                  <p className="text-sm mb-4 opacity-90">Tubos, conexões, registros e acessórios</p>
                  <Button variant="outline" className="w-fit bg-white/10 border-white text-white backdrop-blur-sm" data-testid="button-ver-produtos-hidraulica">
                    Ver produtos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Ferramentas */}
            <Card className="group overflow-hidden cursor-pointer hover-elevate" data-testid="card-categoria-ferramentas">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-yellow-500 to-orange-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ferramentas</h3>
                  <p className="text-sm mb-4 opacity-90">Martelos, enxadas, machados e diversas ferramentas</p>
                  <Button variant="outline" className="w-fit bg-white/10 border-white text-white backdrop-blur-sm" data-testid="button-ver-produtos-ferramentas">
                    Ver produtos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Elétrica */}
            <Card className="group overflow-hidden cursor-pointer hover-elevate" data-testid="card-categoria-eletrica">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-400 to-amber-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-700 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Elétrica</h3>
                  <p className="text-sm mb-4 opacity-90">Cabos elétricos, lâmpadas, tomadas e interruptores</p>
                  <Button variant="outline" className="w-fit bg-white/10 border-white text-white backdrop-blur-sm" data-testid="button-ver-produtos-eletrica">
                    Ver produtos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Pisos e Revestimentos */}
            <Card className="group overflow-hidden cursor-pointer hover-elevate md:col-span-2 lg:col-span-1" data-testid="card-categoria-pisos">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-stone-400 to-stone-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-400 to-stone-600 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Pisos e Revestimentos</h3>
                  <p className="text-sm mb-4 opacity-90">Pisos, cerâmicas, argamassas e niveladores</p>
                  <Button variant="outline" className="w-fit bg-white/10 border-white text-white backdrop-blur-sm" data-testid="button-ver-produtos-pisos">
                    Ver produtos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Banner */}
          <Card className="bg-white border-2">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Não encontrou o que procura?</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco! Temos muito mais produtos disponíveis em nossa loja.
              </p>
              <Button className="bg-primary text-primary-foreground" size="lg" data-testid="button-whatsapp-catalogo">
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato e Localização Section */}
      <section id="contato" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">Contato e Localização</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visite nossa loja ou entre em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              {/* Telefones */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-secondary mb-3">Telefones</h3>
                      <p className="text-foreground mb-2">(11) 4488-2983</p>
                      <Button className="bg-green-600 text-white" size="sm" data-testid="button-whatsapp-contato">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp: (11) 91218-6989
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endereço */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-3">Endereço</h3>
                      <p className="text-foreground">Avenida São Paulo, 1606 - Parque Paulista</p>
                      <p className="text-foreground">Francisco Morato – SP</p>
                      <p className="text-muted-foreground text-sm mt-1">CEP: 07960-200</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horário de Funcionamento */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-3">Horário de Funcionamento</h3>
                      <p className="text-foreground">Segunda a Sexta: 8h às 17:30h</p>
                      <p className="text-foreground">Sábado: 8h às 12h</p>
                      <p className="text-foreground">Domingo: Fechado</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Formas de Pagamento */}
              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-4">Formas de Pagamento</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Banknote className="w-5 h-5" />
                          <span>Dinheiro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.87-.96-7-5.27-7-9.5V8.47l7-3.89 7 3.89V11c0 4.23-3.13 8.54-7 9.5z"/>
                          </svg>
                          <span>PIX</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5" />
                          <span>Débito</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-5 h-5" />
                          <span>Crédito</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <p className="text-sm font-semibold">Parcelamento em até 18x sem juros*</p>
                        <p className="text-xs opacity-80 mt-1">*Confirme condições na loja</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Mapa */}
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-full bg-muted rounded-xl flex items-center justify-center min-h-[400px]">
                <MapPin className="w-32 h-32 text-muted-foreground/30" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-green-600 text-white" size="lg" data-testid="button-whatsapp-bottom">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button className="bg-secondary text-secondary-foreground" size="lg" data-testid="button-ligar-agora">
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
            <Button className="bg-primary text-primary-foreground" size="lg" data-testid="button-como-chegar">
              <MapPin className="w-5 h-5 mr-2" />
              Como Chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Paulistão Center</h3>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Mais de 20 anos construindo sonhos
              </p>
              <p className="text-sm opacity-80">
                Materiais de construção de qualidade com preço justo há mais de 20 anos.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (11) 4488-2983
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  (11) 91218-6989 (WhatsApp)
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Avenida São Paulo, 1606 - Parque Paulista<br />
                  <span className="ml-6">Francisco Morato – SP</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Horário de Funcionamento</h4>
              <div className="space-y-2 text-sm opacity-80">
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Segunda a Sexta: 8h às 17:30h
                </p>
                <p className="ml-6">Sábado: 8h às 12h</p>
                <p className="ml-6">Domingo: Fechado</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2025 Paulistão Center Materiais para Construção. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm opacity-80">
              <span>Made with Emergent</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
