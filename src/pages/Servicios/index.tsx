import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CTAButton from '../../components/CTAButton';
import styles from './Servicios.module.css';

const Servicios = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const receiveOptions = [
    {
      title: 'Pago móvil',
      description: 'La manera más rápida de recibir los fondos directamente en una cuenta bancaria.',
      icon: '/icons/arrow_right_naked.svg',
      bgImage: '/images/temp/remesa-recibida.webp'
    },
    {
      title: 'Crédito inmediato',
      description: 'La manera más rápida de recibir los fondos directamente en una cuenta bancaria.',
      icon: '/icons/arrow_right_naked.svg',
      bgImage: '/images/temp/compra.webp'
    },
    {
      title: 'Retiro físico',
      description: 'Retiro en nuestra agencia física en Caracas: Avenida Francisco de Miranda, Torre Seguros Sudamerica, local PB-7 Urbanización El Rosal, municipio Chacao.',
      icon: '/icons/arrow_right_naked.svg',
      bgImage: '/images/temp/team.webp'
    }
  ];

  const benefits = [
    {
      title: 'Rapidez y Eficiencia',
      description: 'Nuestras operaciones son rápidas y directas',
      icon: '/icons/hand_coins_boxed.svg'
    },
    {
      title: 'Legalidad y Respaldo',
      description: 'Operamos 100% dentro del marco legal venezolano, garantizando su tranquilidad.',
      icon: '/icons/database_dollar_boxed.svg'
    },
    {
      title: 'Conexión Global',
      description: 'Gracias a nuestros aliados internacionales, conectamos a Venezuela con el mundo.',
      icon: '/icons/globe_boxed.svg'
    },
    {
      title: 'Comodidad Total',
      description: 'Elija entre opciones digitales (Pago Móvil) o presenciales para sus transacciones.',
      icon: '/icons/cards_boxed.svg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Insular Casa de Cambio</title>
        <meta name="description" content="Descubre todos nuestros servicios de cambio de divisas, transferencias internacionales y soluciones financieras." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src="/images/temp/intuitivo.webp" alt="" />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText} data-animate="fade-up">
              <h1>Envía dinero a tus familiares o amigos desde 200 países hacia Venezuela</h1>
              <p>a través de nuestra red de aliados internacionales.</p>
              <div className={styles.heroActions}>
                <CTAButton text="¡Empieza ahora!" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section - Partners */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
            <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
            <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
            <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
            <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
            <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
            <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
            <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
          </div>
          <div className={styles.marqueeContent} aria-hidden="true">
            <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
            <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
            <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
            <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
            <img src="/logos/partners/moneygram-collab-logo.svg" alt="MoneyGram" className={styles.partnerLogo} />
            <img src="/logos/partners/ria-collab-logo.svg" alt="Ria" className={styles.partnerLogo} />
            <img src="/logos/partners/remitly-collab-logo.svg" alt="Remitly" className={styles.partnerLogo} />
            <img src="/logos/partners/papaya-collab-logo.svg" alt="Papaya" className={styles.partnerLogo} />
          </div>
        </div>
      </div>

      {/* Receive Options Section */}
      <section className={styles.receiveSection}>
        <div className="container">
          <div className={styles.receiveGrid}>
            <div className={styles.receiveHeader} data-animate="fade-right">
              <h2>Elige cómo deseas recibir tu dinero</h2>
              <CTAButton text="¡Haz click aquí!" variant="primary" />
            </div>
            <div className={styles.receiveCards}>
              {receiveOptions.map((option, index) => {
                return (
                  <div
                    key={index}
                    className={styles.receiveCard}
                    data-animate="fade-up"
                    data-delay={`${0.1 * (index + 1)}`}
                    style={{ '--bg-image': `url(${option.bgImage})` } as React.CSSProperties}
                  >
                    <div className={styles.receiveCardContent}>
                      <div className={styles.receiveCardIcon}>
                        <img src={option.icon} alt={`${option.title} icon`} />
                      </div>
                      <h3>{option.title}</h3>
                    </div>
                    <p>{option.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className="container">
          <div className={styles.benefitsHeader}>
            <h2>Beneficios</h2>
            <p>En Insular Casa de Cambio, combinamos seguridad y conveniencia para ofrecerle un servicio de cambio de divisas excepcional.</p>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => {
              return (
                <div key={index} className={styles.benefitCard} data-animate="fade-up" data-delay={`${0.1 * (index + 1)}`}>
                  <div className={styles.benefitIcon}>
                    <img
                      src={benefit.icon}
                      alt={`${benefit.title} icon`}
                    />
                  </div>
                  <h2>{benefit.title}</h2>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicios;
