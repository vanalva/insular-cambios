import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Aliados.module.css';

const Aliados = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Canadá');

  const countries = [
    { id: 'canada', name: 'Canadá', logo: '/logos/partners/moneygram-collab-logo.svg', bgColor: '#b8b4ff' },
    { id: 'chile', name: 'Chile', logo: '/logos/partners/ria-collab-logo.svg', bgColor: '#ffb4d4' },
    { id: 'colombia', name: 'Colombia', logo: '/logos/partners/remitly-collab-logo.svg', bgColor: '#b4f0e4' },
    { id: 'costa-rica', name: 'Costa Rica', logo: '/logos/partners/papaya-collab-logo.svg', bgColor: '#d4c4ff' },
    { id: 'ecuador', name: 'Ecuador', logo: '/logos/partners/moneygram-collab-logo.svg', bgColor: '#ffd4b4' },
    { id: 'mexico', name: 'México', logo: '/logos/partners/ria-collab-logo.svg', bgColor: '#ffb4c4' },
    { id: 'peru', name: 'Perú', logo: '/logos/partners/remitly-collab-logo.svg', bgColor: '#c4d4ff' },
    { id: 'estados-unidos', name: 'Estados Unidos', logo: '/logos/partners/papaya-collab-logo.svg', bgColor: '#b4d4ff' }
  ];

  const selectedCountryData = countries.find(c => c.name === selectedCountry) || countries[0];

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

      {/* Guarantee Section */}
      <section className={styles.guaranteeSection}>
        <div className="container">
          <div className={styles.guaranteeContent}>
            <div className={styles.guaranteeLeft}>
              <h2>Garantizamos que tus familiares reciben sus remesas</h2>
              <p className={styles.guaranteeSubtext}>¡Sin intermediarios ni retrasos!</p>
              <div className={styles.guaranteeActions}>
                <CTAButton text="Quiero ser aliado" variant="primary" />
                <CTAButton text="Conocer sedes" variant="secondary" />
              </div>
            </div>
            <div className={styles.guaranteeRight}>
              <div className={styles.countryList}>
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className={`${styles.countryItem} ${selectedCountry === country.name ? styles.countryItemActive : ''}`}
                    onMouseEnter={() => setSelectedCountry(country.name)}
                  >
                    <span className={styles.countryDot}></span>
                    <span className={styles.countryName}>{country.name}</span>
                  </div>
                ))}
              </div>
              <div
                className={styles.partnerLogoCard}
                style={{ background: selectedCountryData.bgColor }}
              >
                <img
                  src={selectedCountryData.logo}
                  alt={selectedCountryData.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aliados;