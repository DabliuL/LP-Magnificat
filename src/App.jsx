import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Camera, 
  TrendingUp, 
  Phone, 
  Instagram, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Menu, 
  X, 
  MessageSquare
} from 'lucide-react';

// Custom inline Gold Butterfly SVG matching the visual identity
const ButterflyIcon = ({ className = "w-12 h-12" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '40px', height: '40px', display: 'block' }}
  >
    {/* Left Solid/Detailed Wing */}
    <path 
      d="M50 80C50 80 43 72 32 72C22 72 15 63 15 52C15 37 32 30 45 42C48 45 50 48 50 48" 
      fill="#C5A059" 
      opacity="0.85"
    />
    <path 
      d="M50 48C50 48 44 32 35 25C26 18 18 20 18 32C18 42 32 46 45 48C48 48.5 50 49 50 49" 
      fill="#A5803E" 
      opacity="0.95"
    />
    {/* Right Outline Wing */}
    <path 
      d="M50 80C50 80 57 72 68 72C78 72 85 63 85 52C85 37 68 30 55 42C52 45 50 48 50 48" 
      stroke="#C5A059" 
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M50 48C50 48 56 32 65 25C74 18 82 20 82 32C82 42 68 46 55 48C52 48.5 50 49 50 49" 
      stroke="#A5803E" 
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Antennae */}
    <path 
      d="M49 22C47 16 43 14 43 14" 
      stroke="#C5A059" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M51 22C53 16 57 14 57 14" 
      stroke="#C5A059" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    {/* Body Line */}
    <line 
      x1="50" 
      y1="25" 
      x2="50" 
      y2="83" 
      stroke="#1E1E1E" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    negocio: '',
    whatsapp: '',
    mensagem: ''
  });

  // Handle Form Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // WhatsApp redirection
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const phone = '5521997658468'; // (21) 99765-8468
    const text = `Olá Rafaela! Vi sua Landing Page Magnificat e gostaria de elevar o posicionamento da minha marca.\n\n*Nome:* ${formData.nome}\n*Empresa/Negócio:* ${formData.negocio}\n*WhatsApp:* ${formData.whatsapp}\n*Mensagem:* ${formData.mensagem}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedText}`;
    
    // Simulate submission state
    setFormSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSubmitted(false);
    }, 1200);
  };

  const feedsData = {
    maua: {
      title: "Mauá — Viagens & Turismo",
      logo: "MAUÁ TUR",
      posts: [
        { id: 1, type: "Foto", bg: "/maua_img_1.jpg", title: "Passaporte Sem Dor de Cabeça", text: "Saiba como tirar passaporte com tranquilidade", strategy: "Atração: Informação relevante sobre passaportes." },
        { id: 2, type: "Foto", bg: "/maua_img_2.jpg", title: "Belo Horizonte", text: "Pacote completo Belo Horizonte R$ 200,39", strategy: "Conversão: Promoção direta com preço e facilidade de pagamento." },
        { id: 3, type: "Foto", bg: "/maua_img_3.jpg", title: "Passagem Aérea", text: "Compre passagem e ganhe assessoria de passaporte", strategy: "Conversão: Incentivo e venda casada de alto valor." },
        { id: 4, type: "Foto", bg: "/maua_img_4.jpg", title: "Atenção Viajantes", text: "Uso de PowerBank em voos", strategy: "Autoridade/Educação: Conteúdo de utilidade sobre regras de avião." },
        { id: 5, type: "Foto", bg: "/maua_img_5.jpg", title: "Dia do Turismo", text: "08 de Maio - Dia do Turismo", strategy: "Conexão: Homenagem e engajamento sobre viagens." },
        { id: 6, type: "Foto", bg: "/maua_img_6.jpg", title: "Dia das Mães", text: "Mães preferem viagem a utensílios de casa", strategy: "Engajamento/Humor: Meme viral sobre presentes de Dia das Mães." },
        { id: 7, type: "Foto", bg: "/maua_img_7.jpg", title: "Sinal do Universo", text: "Entrada da nossa agência física", strategy: "Bastidores/Humanização: Fotos da equipe rindo de forma espontânea." },
        { id: 8, type: "Foto", bg: "/maua_img_8.jpg", title: "Fam Tour", text: "Especialista vivenciando os destinos", strategy: "Autoridade: Mostrar presença em campo." },
        { id: 9, type: "Foto", bg: "/maua_img_9.jpg", title: "Ilha de Paquetá", text: "R$ 180,00 por pessoa", strategy: "Conversão: Oferta de passeio regional." }
      ]
    },
    lunaris: {
      title: "Lunaris — Pilates & Saúde",
      logo: "STUDIO LUNARIS",
      posts: [
        { id: 1, type: "Foto", bg: "/lunaris_img_1.jpg", title: "Alongamento no Barrel", text: "Exercício de flexibilidade e força no Reformer Barrel", strategy: "Atração: Exibir movimentos bonitos e fluidos de pilates." },
        { id: 2, type: "Foto", bg: "/lunaris_img_2.jpg", title: "Movimento à sua rotina", text: "Dê movimento à sua rotina - Força, controle e respiração", strategy: "Consciência: Apresentar os benefícios e pilares essenciais da prática." },
        { id: 3, type: "Foto", bg: "/lunaris_img_3.jpg", title: "Cuide do seu corpo", text: "Cuide do seu corpo, ele é sua morada", strategy: "Inspiração: Conteúdo motivacional com design premium para compartilhamento." },
        { id: 4, type: "Foto", bg: "/lunaris_img_4.jpg", title: "Constância do movimento", text: "A força que você busca está na constância", strategy: "Engajamento: Promover a mentalidade de regularidade e esforço." },
        { id: 5, type: "Foto", bg: "/lunaris_img_5.jpg", title: "Melhore a sua postura", text: "Melhore a sua postura com pilates!", strategy: "Autoridade: Foco em soluções de saúde e benefícios posturais corporais." },
        { id: 6, type: "Foto", bg: "/lunaris_img_6.jpg", title: "Exercício com Bola", text: "Controle e fortalecimento muscular no reformer", strategy: "Desejo: Apresentar a diversidade de treinos e aparelhos do estúdio." },
        { id: 7, type: "Foto", bg: "/lunaris_img_7.jpg", title: "Pilates é Autocuidado", text: "Pilates é autocuidado diário", strategy: "Conexão: Humanização mostrando a importância da saúde mental e física." },
        { id: 8, type: "Foto", bg: "/lunaris_img_8.jpg", title: "Estilo de Vida", text: "Mais que um exercício, um estilo de vida", strategy: "Conexão: Apelo emocional mostrando o impacto de bem-estar na vida real." },
        { id: 9, type: "Foto", bg: "/lunaris_img_9.jpg", title: "Desafio da Semana", text: "Exercício avançado - Desafio da Semana", strategy: "Conversão/Engajamento: Post interativo incentivando novas alunas a agendar." }
      ]
    },
    lacos: {
      title: "Clínica Laços — Psicologia",
      logo: "CLÍNICA DE PSICOLOGIA LAÇOS",
      posts: [
        { id: 1, type: "Identidade", bg: "#8B5A2B", title: "Identidade", text: "Clínica de Psicologia Laços", isTextOnly: true, textBg: "bg-amber-800 text-white font-bold tracking-widest", strategy: "Marca: Logo elegante para posicionamento corporativo." },
        { id: 2, type: "Foto", bg: "/lacos_img_1.jpg", title: "Chaves do Consultório", text: "Preparativos e reformas para o novo consultório", strategy: "Expectativa: Gerar curiosidade sobre o espaço físico da clínica." },
        { id: 3, type: "Foto", bg: "/lacos_img_2.jpg", title: "Obras em Andamento", text: "Rayana acompanhando as reformas", strategy: "Bastidores: Humanização mostrando a idealização do projeto real." },
        { id: 4, type: "Foto", bg: "/lacos_img_3.jpg", title: "Hora da Terapia", text: "5 sinais de que está na hora de começar na terapia", strategy: "Educação: Conscientização sobre saúde mental e autocuidado." },
        { id: 5, type: "Foto", bg: "/lacos_img_4.jpg", title: "Dra. Maria Eduarda", text: "Psicóloga Maria Eduarda - CRP 05/71460", strategy: "Autoridade: Foto profissional (headshot) gerando conexão e segurança." },
        { id: 6, type: "Foto", bg: "/lacos_img_5.jpg", title: "Dra. Rayana Moreira", text: "Rayana Moreira - Terapeuta TCC", strategy: "Autoridade: Foco na competência técnica e abordagem do psicólogo." },
        { id: 7, type: "Foto", bg: "/lacos_img_6.png", title: "Parceria e Conexão", text: "Trabalho em equipe e humanização no consultório", strategy: "Humanização: Bastidores descontraídos mostrando a conexão real da equipe." },
        { id: 8, type: "Foto", bg: "/lacos_img_7.png", title: "Autocuidado", text: "Você não precisa esperar desmoronar para pedir ajuda", strategy: "Conexão: Acolhimento e conscientização sobre a importância da terapia." },
        { id: 9, type: "Conversão", bg: "#8B5A2B", title: "Contato", text: "Clique no link para agendar sua consulta.", isTextOnly: true, textBg: "bg-amber-900 text-white", strategy: "Conversão: Captura de leads qualificados para terapia online." }
      ]
    }
  };

  return (
    <div className="app-container">
      
      {/* HEADER / NAVIGATION */}
      <header className="site-header">
        <div className="header-container">
          {/* Logo container */}
          <a href="#" className="logo-link">
            <img src="/magnificat_logo_v3.png" alt="Logo Magnificat" style={{ width: '40px', height: '40px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
            <div className="logo-text-wrapper">
              <span className="logo-title">
                Magnificat
              </span>
              <span className="logo-subtitle">
                Marketing Digital
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="#" className="nav-link">Início</a>
            <a href="#metodologia" className="nav-link">Metodologia</a>
            <a href="#quem-sou" className="nav-link">Quem Sou</a>
            <a href="#portfolio" className="nav-link">Portfólio</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>

          {/* CTA Header */}
          <div className="header-actions">
            <a href="#contato" className="btn-primary">
              Falar com Rafaela
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-nav"
            >
              <div className="mobile-nav-links">
                <a 
                  href="#" 
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  Início
                </a>
                <a 
                  href="#metodologia" 
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  Metodologia
                </a>
                <a 
                  href="#quem-sou" 
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  Quem Sou
                </a>
                <a 
                  href="#portfolio" 
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  Portfólio
                </a>
                <a 
                  href="#contato" 
                  onClick={() => setIsMenuOpen(false)}
                  className="nav-link"
                >
                  Contato
                </a>
                <a 
                  href="#contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-primary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Decorative background gradients */}
        <div className="hero-gradient-top" />
        <div className="hero-gradient-bottom" />
        
        <div className="hero-container">
          {/* Hero Text Info */}
          <div className="hero-text-side">
            
            {/* Badge */}
            <div className="hero-badge">
              <Sparkles size={14} className="text-[#C5A059]" />
              <span className="hero-badge-text">
                Posicionamento Digital &amp; Estratégico
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Destaque seu negócio com <br />
              <span className="hero-title-accent">
                estratégia e autenticidade
              </span>
            </h1>

            {/* Subheadline */}
            <p className="hero-description">
              Mais do que posts bonitos: criamos um ecossistema digital refinado que atrai clientes qualificados. Unimos fotografia autoral, estética editorial e funis estratégicos de mídias sociais para elevar o valor percebido da sua marca.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#contato" className="btn-primary">
                Quero Elevar Minha Marca
                <ChevronRight size={14} style={{ marginLeft: '6px' }} />
              </a>
              <a href="#portfolio" className="btn-secondary">
                Ver Cases de Sucesso
              </a>
            </div>

            {/* Side metadata matching Image 1 styling */}
            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="hero-meta-dot"></span>
                <span>@magnificatmarketing</span>
              </div>
              <div className="hero-meta-item">
                <span className="hero-meta-dot"></span>
                <span>@rafadasmidiasfotografia</span>
              </div>
              <div className="hero-meta-item-gold">
                <Phone size={12} />
                <span>(21) 99765-8468</span>
              </div>
            </div>
          </div>

          {/* Hero Visual representation - first photo sent by user */}
          <div className="hero-visual-side">
            <div className="about-image-wrapper" style={{ maxWidth: '380px', width: '100%' }}>
              <div className="about-image-frame" style={{ borderRadius: '0px 120px 0px 120px', border: '2px solid var(--color-gold)' }}>
                <img 
                  src="/rafaela_sitting.jpg" 
                  alt="Rafaela Beatriz - Estrategista de Mídias Sociais" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-image-offset" style={{ borderRadius: '0px 120px 0px 120px' }} />
            </div>
          </div>

        </div>
      </section>

      {/* METODOLOGIA SECTION */}
      <section id="metodologia" className="benefits-section">
        <div className="benefits-container">
          
          {/* Section Heading */}
          <div className="section-header">
            <span className="section-tag">
              Nossa Metodologia
            </span>
            <h2 className="section-title">
              Como transformamos o seu perfil em um{" "}
              <span className="font-serif font-italic text-[#C5A059]">canal de vendas</span>
            </h2>
            <div className="section-line" />
          </div>

          {/* Cards Grid */}
          <div className="benefits-grid">
            
            {/* Benefit Card 1 */}
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3 className="benefit-title">
                Posicionamento de Alto Padrão
              </h3>
              <p className="benefit-desc">
                Desenvolvemos uma comunicação visual sofisticada e alinhada ao público. Atraia clientes dispostos a pagar pelo valor da sua marca, e não pelo preço.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <Camera size={24} />
              </div>
              <h3 className="benefit-title">
                Fotografia e Conteúdo Autoral
              </h3>
              <p className="benefit-desc">
                Imagens de estúdio profissionais que geram desejo imediato. Criamos conteúdo visual exclusivo (sem fotos genéricas de banco de dados) focado no seu produto ou clínica.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="benefit-card">
              <div className="benefit-icon-wrapper">
                <TrendingUp size={24} />
              </div>
              <h3 className="benefit-title">
                Constância e Estratégia Ativa
              </h3>
              <p className="benefit-desc">
                Calendário estratégico mensal, análise constante de métricas e posts de funil (atração, conexão e vendas). Deixe o gerenciamento completo com quem entende e foque no seu operacional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* QUEM SOU SECTION */}
      <section id="quem-sou" className="about-section">
        <div className="about-container">
          <div className="about-grid">
            
            {/* Left Column: Asymmetric Leaf Border Photo matching image */}
            <div className="about-image-side">
              <div className="about-image-wrapper">
                {/* Main Asymmetric Leaf Shape Container */}
                <div className="about-image-frame">
                  <img 
                    src="/rafaela_portrait.jpg" 
                    alt="Rafaela Beatriz - Social Media &amp; Fotógrafa" 
                  />
                </div>
                {/* Decorative gold background offset border */}
                <div className="about-image-offset" />
              </div>
            </div>

            {/* Right Column: Copy text exactly from user image */}
            <div className="about-text-side">
              <span className="section-tag">
                Diretora Criativa &amp; Estrategista
              </span>
              
              {/* Quem Sou Title exactly matching Serif/Italic Style */}
              <h2 className="about-title">
                Quem sou?
              </h2>
              
              <div className="section-line" style={{ margin: '0 0 1.5rem 0' }} />

              <div className="about-description">
                <p className="about-intro-text">
                  Rafaela Beatriz, tenho 24 anos, atuo como Social Media há mais de 4 anos e fotógrafa desde 2025.
                </p>
                <p className="about-body-text">
                  Tenho conhecimento em vários nichos de atuação de marketing, como comércios, áreas da saúde, agências de viagem e mais. O meu plano é elevar o nível do seu negócio através da gestão de mídias sociais, te entregando um conteúdo estratégico e personalizado para as necessidades da sua empresa.
                </p>
              </div>

              {/* Stats badges */}
              <div className="about-stats-grid">
                <div className="stat-item">
                  <div className="stat-number">+4 anos</div>
                  <div className="stat-label">Experiência Digital</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+3 nichos</div>
                  <div className="stat-label">Atuação Especialista</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Conteúdo Autoral</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFÓLIO SECTION */}
      <section id="portfolio" className="portfolio-section">
        <div className="portfolio-container">
          
          {/* Heading */}
          <div className="section-header">
            <span className="section-tag">
              Trabalhos Recentes
            </span>
            <h2 className="section-title font-italic">
              Portfólio
            </h2>
            <p className="about-body-text" style={{ textAlign: 'center', marginTop: '1rem' }}>
              Nossa atuação estratégica demonstrada através dos feeds de três clientes em diferentes nichos. Clique para filtrar ou passe o mouse para ver a estratégia por trás do conteúdo.
            </p>
            <div className="section-line" />
          </div>

          {/* Filtering Tabs */}
          <div className="portfolio-tabs">
            <button 
              onClick={() => setSelectedFeed('all')}
              className={`tab-btn ${selectedFeed === 'all' ? 'active' : ''}`}
            >
              Clientes
            </button>
            <button 
              onClick={() => setSelectedFeed('maua')}
              className={`tab-btn ${selectedFeed === 'maua' ? 'active-maua active' : ''}`}
            >
              Mauá (Turismo)
            </button>
            <button 
              onClick={() => setSelectedFeed('lunaris')}
              className={`tab-btn ${selectedFeed === 'lunaris' ? 'active-lunaris active' : ''}`}
            >
              Lunaris (Pilates)
            </button>
            <button 
              onClick={() => setSelectedFeed('lacos')}
              className={`tab-btn ${selectedFeed === 'lacos' ? 'active-lacos active' : ''}`}
            >
              Clínica Laços (Psicologia)
            </button>
          </div>

          {/* Feed grids container */}
          <div className="feeds-grid">
            
            {/* Mauá Feed Column */}
            {(selectedFeed === 'all' || selectedFeed === 'maua') && (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="feed-column"
              >
                <div className="feed-header">
                  <div className="feed-profile">
                    <img src="/maua_logo.jpg" alt="Logo Mauá Tur" className="feed-avatar" style={{ objectFit: 'cover' }} />
                    <div className="feed-info">
                      <div className="feed-username">{feedsData.maua.logo}</div>
                      <div className="feed-category">Turismo &amp; Lazer</div>
                    </div>
                  </div>
                  <span className="feed-badge feed-badge-maua">Viagens</span>
                </div>

                <div className="portfolio-grid">
                  {feedsData.maua.posts.map((post) => (
                    <div key={post.id} className="portfolio-post">
                      {post.isTextOnly ? (
                        <div 
                          className="portfolio-text-only"
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px',
                            textAlign: 'center',
                            backgroundColor: post.bg,
                            color: '#1E3A8A',
                            fontWeight: 'bold',
                            fontSize: '0.7rem'
                          }}
                        >
                          <span style={{ fontSize: '0.55rem', opacity: 0.6, display: 'block', marginBottom: '2px' }}>{post.title}</span>
                          <span>{post.text}</span>
                        </div>
                      ) : (
                        <img src={post.bg} alt={post.title} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Lunaris Feed Column */}
            {(selectedFeed === 'all' || selectedFeed === 'lunaris') && (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="feed-column"
              >
                <div className="feed-header">
                  <div className="feed-profile">
                    <img src="/lunaris_logo.jpg" alt="Logo Studio Lunaris" className="feed-avatar" style={{ objectFit: 'cover' }} />
                    <div className="feed-info">
                      <div className="feed-username">{feedsData.lunaris.logo}</div>
                      <div className="feed-category">Estúdio de Pilates</div>
                    </div>
                  </div>
                  <span className="feed-badge feed-badge-lunaris">ESTILO DE VIDA</span>
                </div>

                <div className="portfolio-grid">
                  {feedsData.lunaris.posts.map((post) => (
                    <div key={post.id} className="portfolio-post">
                      {post.isTextOnly ? (
                        <div 
                          className="portfolio-text-only"
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px',
                            textAlign: 'center',
                            backgroundColor: '#7C3AED',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.7rem'
                          }}
                        >
                          <span style={{ fontSize: '0.55rem', opacity: 0.6, display: 'block', marginBottom: '2px' }}>{post.title}</span>
                          <span>{post.text}</span>
                        </div>
                      ) : (
                        <img src={post.bg} alt={post.title} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Clínica Laços Feed Column */}
            {(selectedFeed === 'all' || selectedFeed === 'lacos') && (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="feed-column"
              >
                <div className="feed-header">
                  <div className="feed-profile">
                    <img src="/lacos_logo.png" alt="Logo Clínica Laços" className="feed-avatar" style={{ objectFit: 'cover' }} />
                    <div className="feed-info">
                      <div className="feed-username">{feedsData.lacos.logo}</div>
                      <div className="feed-category">Psicologia Clínica</div>
                    </div>
                  </div>
                  <span className="feed-badge feed-badge-lacos">Saúde</span>
                </div>

                <div className="portfolio-grid">
                  {feedsData.lacos.posts.map((post) => (
                    <div key={post.id} className="portfolio-post">
                      {post.isTextOnly ? (
                        <div 
                          className="portfolio-text-only"
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px',
                            textAlign: 'center',
                            backgroundColor: '#8B5A2B',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.7rem'
                          }}
                        >
                          <span style={{ fontSize: '0.55rem', opacity: 0.6, display: 'block', marginBottom: '2px' }}>{post.title}</span>
                          <span>{post.text}</span>
                        </div>
                      ) : (
                        <img src={post.bg} alt={post.title} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* CONTATO SECTION */}
      <section id="contato" className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            
            {/* Background design elements */}
            <div className="contact-card-deco-1" />
            <div className="contact-card-deco-2" />

            <div className="section-header" style={{ marginBottom: '2.5rem' }}>
              <span className="section-tag">
                Agende um Diagnóstico
              </span>
              
              {/* Contato section title in Serif style */}
              <h2 className="contact-title">
                Vamos elevar a sua marca?
              </h2>
              
              <p className="about-body-text" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                Preencha os dados abaixo. Você será redirecionado para o WhatsApp da Rafaela e iniciaremos seu planejamento personalizado.
              </p>
              <div className="section-line" />
            </div>

            {/* Submission success screen */}
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="contact-success-screen"
              >
                <div className="success-icon-circle">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="success-title">
                  Redirecionando para o WhatsApp...
                </h3>
                <p className="success-desc">
                  Aguarde um instante, estamos conectando você com a Rafaela.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nome" className="form-label">Nome Completo</label>
                    <input 
                      type="text" 
                      id="nome" 
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: Dra. Juliana Costa" 
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="negocio" className="form-label">Seu Negócio / Área</label>
                    <input 
                      type="text" 
                      id="negocio" 
                      name="negocio"
                      required
                      value={formData.negocio}
                      onChange={handleInputChange}
                      placeholder="Ex: Clínica Odontológica / Turismo" 
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp" className="form-label">WhatsApp de Contato</label>
                  <input 
                    type="tel" 
                    id="whatsapp" 
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Ex: (21) 99999-9999" 
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem" className="form-label">Qual é a sua maior dificuldade no Instagram?</label>
                  <textarea 
                    id="mensagem" 
                    name="mensagem"
                    required
                    rows="3"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Ex: Não consigo ter constância e as imagens não passam o profissionalismo que eu gostaria."
                    className="form-control resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Enviar Mensagem e Falar no WhatsApp
                  <Send size={14} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}

            {/* Social channels bottom display */}
            <div className="contact-footer">
              <div className="contact-footer-item">
                <span className="contact-footer-label">Contato Direto</span>
                <a href="https://wa.me/5521997658468" target="_blank" rel="noopener noreferrer" className="contact-footer-link contact-footer-link-gold">
                  <Phone size={12} />
                  <span>(21) 99765-8468</span>
                </a>
              </div>
              <div className="contact-footer-item">
                <span className="contact-footer-label">Mídias Sociais</span>
                <a href="https://instagram.com/magnificatmarketing" target="_blank" rel="noopener noreferrer" className="contact-footer-link">
                  <Instagram size={12} />
                  <span>@magnificatmarketing</span>
                </a>
              </div>
              <div className="contact-footer-item">
                <span className="contact-footer-label">Fotografia Autoral</span>
                <a href="https://instagram.com/rafadasmidiasfotografia" target="_blank" rel="noopener noreferrer" className="contact-footer-link">
                  <Instagram size={12} />
                  <span>@rafadasmidiasfotografia</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            {/* Logo footer */}
            <a href="#" className="footer-logo">
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '2px' }}>
                <img src="/magnificat_logo_v3.png" alt="Logo Magnificat" style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
              </div>
              <div className="logo-text-wrapper" style={{ marginLeft: '0.25rem' }}>
                <span className="footer-logo-title">
                  Magnificat
                </span>
                <span className="footer-logo-subtitle">
                  Marketing Digital
                </span>
              </div>
            </a>

            {/* Quick Links */}
            <div className="footer-links">
              <a href="#" className="footer-link">Início</a>
              <a href="#metodologia" className="footer-link">Metodologia</a>
              <a href="#quem-sou" className="footer-link">Quem Sou</a>
              <a href="#portfolio" className="footer-link">Portfólio</a>
              <a href="#contato" className="footer-link">Contato</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Magnificat Marketing Digital. Todos os direitos reservados.</p>
            <p className="footer-designer">
              Desenvolvido com sofisticação por <span>Zenith</span>
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/5521997658468?text=Olá%20Rafaela!%20Gostaria%20de%20um%20diagnóstico%20da%20minha%20marca%20nas%20mídias%20sociais." 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <span className="whatsapp-icon">
          <MessageSquare size={22} />
        </span>
        <span className="whatsapp-text">
          Falar com Rafaela
        </span>
      </a>

    </div>
  );
}

export default App;
