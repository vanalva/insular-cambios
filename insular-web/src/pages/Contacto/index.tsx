import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Contacto.module.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Insular Casa de Cambio</title>
        <meta name="description" content="Contáctanos para resolver todas tus dudas sobre cambio de divisas. Estamos aquí para ayudarte." />
      </Helmet>

      <Section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle}>
                ¡Estamos<br />
                aquí para<br />
                ayudarte!
              </h1>
            </div>

            <div className={styles.heroRight}>
              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>Número de contacto</span>
                <a href="tel:+582129531996" className={styles.cardValue}>(+58) 0212 953 1996</a>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>Correo Electrónico</span>
                <a href="mailto:operaciones@cambiosinsular.com" className={styles.cardValue}>operaciones@cambiosinsular.com</a>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>Horarios</span>
                <div className={styles.cardValue}>
                  <p>Lunes a viernes<br />9:00 am a 4:00 pm</p>
                  <p style={{ marginTop: 'var(--space-xs)' }}>Sábados y Domingos<br />Cerrados</p>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.cardLabel}>Dirección</span>
                <p className={styles.cardValue}>
                  Avenida Francisco de Miranda,<br />
                  Torre Seguros Sudamerica,<br />
                  local PB-7 Urbanización El<br />
                  Rosal, municipio Chacao.
                </p>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.ctaButtons}>
                <CTAButton text="Contáctanos" />
                <CTAButton text="Chat con Insa" variant="inherit" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div data-animate="fade-right" className={styles.contactFormContainer}>
              <div className="display">Contáctanos</div>
              <h2 className="h2">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <CTAButton text="Enviar mensaje" type="submit" />
              </form>
            </div>

            <div data-animate="fade-left" className={styles.ctaContainer}>
              <div className={styles.ctaCard}>
                <div className={styles.ctaImage}></div>
                <div className={styles.ctaContent}>
                  <h2 className="h2 text-white">¿Necesitas ayuda inmediata?</h2>
                  <p className="body-sm text-white">
                    Nuestro equipo de soporte está disponible 24/7 para atender tus consultas urgentes.
                  </p>
                  <div className={styles.ctaSpacer}></div>
                  <CTAButton text="Chat en vivo" variant="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contacto;