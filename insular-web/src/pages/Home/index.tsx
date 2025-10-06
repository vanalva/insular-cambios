import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Insular Casa de Cambio - Recibe dinero de otros países</title>
        <meta name="description" content="Casa de cambios autorizada por SUDEBAN, con más de 30 años de trayectoria. Conectamos familias con soluciones rápidas, seguras y sin complicaciones." />
      </Helmet>

      <Section className={styles.hero} id="hero">
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className="h1" data-animate="fade-up">
                Casa de<br />
                Cambio
              </h1>
              <p className={styles.heroDescription} data-animate="fade-up" data-delay="0.2">
                Ahora puedes realizar tus operaciones de manera sencilla
              </p>
              <div data-animate="fade-up" data-delay="0.4" data-cta-pulse>
                <CTAButton text="Empieza ahora" />
              </div>
            </div>
            <div className={styles.heroImage} data-animate="fade-left">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" alt="Cliente feliz usando Insular" />
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.ratesSection} id="rates">
        <div className="container">
          <div className={styles.ratesGrid}>
            <div className={styles.rateCard} data-tone="usd" data-animate="fade-up">
              <div className={styles.rateHeader}>
                <span className={styles.rateLabel}>Cambio US$</span>
                <span className={styles.rateIcon} aria-hidden="true">&#8599;</span>
              </div>
              <h2 className={styles.rateValue}>Bs. 160,4479</h2>
            </div>
            <div className={styles.rateCard} data-tone="eur" data-animate="fade-up" data-delay="0.1">
              <div className={styles.rateHeader}>
                <span className={styles.rateLabel}>Cambio EUR&euro;</span>
                <span className={styles.rateIcon} aria-hidden="true">&#8599;</span>
              </div>
              <h2 className={styles.rateValue}>Bs. 188,0289</h2>
            </div>
            <div className={styles.rateCard} data-tone="date" data-animate="fade-up" data-delay="0.2">
              <div className={styles.rateHeader}>
                <span className={styles.rateLabel}>Fecha</span>
                <span className={styles.rateIcon} aria-hidden="true">&#8599;</span>
              </div>
              <h2 className={styles.rateValue}>19 / 09 / 2025</h2>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.remittanceSection} id="remittance">
        <div className="container">
          <div className={styles.remittanceContent}>
            <div className={styles.remittanceText}>
              <h2 className="h2" data-animate="fade-up">
                Recibe dinero de otros países a través de nuestros aliados
              </h2>
              <p className="body" data-animate="fade-up" data-delay="0.2">
                En Casa de Cambios Insular somos una remesadora autorizada por SUDEBAN, con más de 30 años de trayectoria
                en el sector cambiario. Conectamos familias con soluciones rápidas, seguras y sin complicaciones.
              </p>
              <div data-animate="fade-up" data-delay="0.4">
                <CTAButton text="¡Ingresa aquí!" />
              </div>
            </div>
            <div className={styles.remittanceLogos}>
              <img src="/images/b9-logo.png" alt="B9" className={styles.partnerLogo} />
              <img src="/images/papaya-logo.png" alt="Papaya" className={styles.partnerLogo} />
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.globalSection} id="global">
        <div className="container">
          <div className={styles.globalContent}>
            <div className={styles.globeGraphic}>
              {/* Globe graphic will go here */}
              <div className={styles.globePlaceholder}>
                🌍
              </div>
            </div>
            <div className={styles.globalCard}>
              <h3 className={styles.globalTitle}>Presentes en más de</h3>
              <h2 className={styles.globalNumber}>200 países</h2>
              <p className={styles.globalText}>
                Somos especialistas en recepción y dispersión de remesas.
              </p>
              <p className={styles.globalSubtext}>
                Atendemos tanto a personas naturales como jurídicas.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.locationSection} id="location">
        <div className="container">
          <div className={styles.locationCard}>
            <h2 className="h2">Retira tu dinero en nuestra sede en el Rosal</h2>
            <p className="body">
              Avenida Francisco de Miranda, Torre Seguros Sudamerica, local PB-7 Urbanización El Rosal,
              municipio Chacao
            </p>
            <CTAButton text="Ver más" />
          </div>
        </div>
      </Section>

      <Section className={styles.paymentMethods} id="payment">
        <div className="container">
          <div className={styles.paymentGrid}>
            <div className={styles.paymentCard}>
              <h3>Recibe dinero a través de</h3>
              <div className={styles.paymentOptions}>
                <button className={styles.paymentOption}>
                  Pago móvil
                </button>
                <button className={styles.paymentOption}>
                  Crédito inmediato
                </button>
              </div>
            </div>
            <div className={styles.paymentImage}>
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600" alt="Pagos digitales" />
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.faq} id="faq">
        <div className="container">
          <h2 className="h2 text-center">Preguntas Frecuentes</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem} data-animate="fade-up">
              <h4>¿Qué necesito para recibir mi remesa?</h4>
            </div>
            <div className={styles.faqItem} data-animate="fade-up" data-delay="0.1">
              <h4>¿En cuánto tiempo la recibo?</h4>
            </div>
            <div className={styles.faqItem} data-animate="fade-up" data-delay="0.2">
              <h4>¿Dónde puedo retirar en dólares o en bolívares?</h4>
            </div>
            <div className={styles.faqItem} data-animate="fade-up" data-delay="0.3">
              <h4>¿Cuáles son los aliados disponibles en mi zona?</h4>
            </div>
            <div className={styles.faqItem} data-animate="fade-up" data-delay="0.4">
              <h4>¿Cuáles son las tarifas y comisiones por Remesa?</h4>
            </div>
          </div>
        </div>
      </Section>

      <Section className={styles.ctaSection} id="cta">
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className="h2">¿Aún tienes alguna pregunta?</h2>
            <p className="body">
              ¿No encuentras la respuesta a tu pregunta? Habla con nuestro Chat para resolver cualquier inquietud.
            </p>
            <CTAButton text="Hablar con Chat" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

