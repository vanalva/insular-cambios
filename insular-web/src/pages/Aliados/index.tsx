import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import Carousel from '../../components/Carousel';
import styles from './Aliados.module.css';

const Aliados = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const partners = [
    { name: 'B9', logo: '/images/partners/b9.png', description: 'Plataforma de pagos digitales' },
    { name: 'Papaya', logo: '/images/partners/papaya.png', description: 'Soluciones financieras' },
    { name: 'Western Union', logo: '/images/partners/wu.png', description: 'Transferencias globales' },
    { name: 'MoneyGram', logo: '/images/partners/mg.png', description: 'Remesas internacionales' },
    { name: 'Visa', logo: '/images/partners/visa.png', description: 'Procesamiento de pagos' },
    { name: 'Mastercard', logo: '/images/partners/mc.png', description: 'Soluciones de pago' }
  ];

  return (
    <>
      <Helmet>
        <title>Aliados - Insular Casa de Cambio</title>
        <meta name="description" content="Conoce a nuestros aliados estratégicos que nos ayudan a brindarte el mejor servicio de cambio de divisas." />
      </Helmet>

      <Section className={styles.hero}>
        <div className="container">
          <h1 className="h1" data-animate="fade-up">Nuestros aliados</h1>
          <p className="body" data-animate="fade-up" data-delay="0.2">
            Trabajamos con los mejores para ofrecerte el mejor servicio
          </p>
        </div>
      </Section>

      <Section className={styles.partnersGrid}>
        <div className="container">
          <h2 className="h2 text-center" data-animate="fade-up">Aliados estratégicos</h2>
          <div className="grid grid-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="card card-light module"
                data-animate="fade-up"
                data-delay={`${0.1 * (index + 1)}`}
              >
                <div className={styles.partnerCard}>
                  <div className={styles.partnerLogo}>
                    {/* Placeholder for logo */}
                    <div className={styles.logoPlaceholder}>{partner.name}</div>
                  </div>
                  <h3 className="h4">{partner.name}</h3>
                  <p className="body-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className={styles.carousel}>
        <div className="container">
          <h2 className="h2 text-center" data-animate="fade-up">Red de colaboradores</h2>
          <Carousel />
        </div>
      </Section>

      <Section className={styles.benefits}>
        <div className="container">
          <h2 className="h2 text-center" data-animate="fade-up">Beneficios de nuestra red</h2>
          <div className="grid grid-3">
            <div className="text-center" data-animate="fade-up" data-delay="0.1">
              <h3 className="h3">Cobertura global</h3>
              <p className="body-sm">
                Acceso a más de 200 países a través de nuestra red de aliados
              </p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="0.2">
              <h3 className="h3">Mejores tarifas</h3>
              <p className="body-sm">
                Negociamos las mejores tasas gracias a nuestro volumen de operaciones
              </p>
            </div>
            <div className="text-center" data-animate="fade-up" data-delay="0.3">
              <h3 className="h3">Tecnología avanzada</h3>
              <p className="body-sm">
                Integraciones con las plataformas más modernas del mercado
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Aliados;