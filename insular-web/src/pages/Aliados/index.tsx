import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, DollarSign, Zap, Lock } from 'lucide-react';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Aliados.module.css';

const Aliados = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const partners = [
    { 
      name: 'MoneyGram', 
      logo: '/logos/partners/moneygram-collab-logo.svg', 
      description: 'Remesas internacionales con cobertura global',
      category: 'Remesas'
    },
    { 
      name: 'Ria', 
      logo: '/logos/partners/ria-collab-logo.svg', 
      description: 'Transferencias rápidas y seguras',
      category: 'Remesas'
    },
    { 
      name: 'Remitly', 
      logo: '/logos/partners/remitly-collab-logo.svg', 
      description: 'Plataforma digital de envíos',
      category: 'Remesas'
    },
    { 
      name: 'Papaya', 
      logo: '/logos/partners/papaya-collab-logo.svg', 
      description: 'Soluciones financieras innovadoras',
      category: 'Fintech'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Cobertura Global',
      description: 'Conectamos con más de 200 países a través de nuestra red de aliados internacionales de confianza.'
    },
    {
      icon: DollarSign,
      title: 'Mejores Tarifas',
      description: 'Negociamos las mejores tasas de cambio gracias a nuestro volumen de operaciones y relaciones estratégicas.'
    },
    {
      icon: Zap,
      title: 'Velocidad',
      description: 'Transferencias instantáneas y procesamiento rápido para que recibas tu dinero cuando lo necesites.'
    },
    {
      icon: Lock,
      title: 'Seguridad',
      description: 'Todas nuestras operaciones están respaldadas por los más altos estándares de seguridad y cumplimiento.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Aliados - Insular Casa de Cambio</title>
        <meta name="description" content="Conoce a nuestros aliados estratégicos que nos ayudan a brindarte el mejor servicio de cambio de divisas y transferencias internacionales." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src="/images/sections/mundo.webp" alt="" />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText} data-animate="fade-up">
              <h1>Conoce a nuestros aliados estratégicos</h1>
              <p>Trabajamos de la mano con reconocidos aliados internacionales para asegurar que cada remesa llegue de forma rápida, legal y segura a su destino.</p>
              <div className={styles.heroActions}>
                <CTAButton text="¡Conoce más!" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase Section */}
      <Section className={styles.partnersSection}>
        <div className="container">
          <div className={styles.partnersHeader}>
            <h2 data-animate="fade-up">Aliados Estratégicos</h2>
            <p data-animate="fade-up" data-delay="0.1">
              Colaboramos con las mejores empresas del sector para ofrecerte servicios de clase mundial
            </p>
          </div>
          
          <div className={styles.partnersGrid}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className={styles.partnerCard}
                data-animate="fade-up"
                data-delay={`${0.1 * (index + 1)}`}
              >
                <div className={styles.partnerLogo}>
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className={styles.partnerInfo}>
                  <span className={styles.partnerCategory}>{partner.category}</span>
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.benefitsHeader}>
            <h2 data-animate="fade-up">Beneficios de Nuestra Red</h2>
            <p data-animate="fade-up" data-delay="0.1">
              Al trabajar con aliados de primer nivel, podemos ofrecerte ventajas únicas
            </p>
          </div>
          
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className={styles.benefitCard}
                  data-animate="fade-up"
                  data-delay={`${0.1 * (index + 1)}`}
                >
                  <div className={styles.benefitIcon}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard} data-animate="fade-up">
            <h2>¿Listo para empezar?</h2>
            <p>
              Únete a miles de personas que ya confían en nosotros para sus transferencias internacionales.
            </p>
            <CTAButton text="¡Empieza ahora!" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Aliados;