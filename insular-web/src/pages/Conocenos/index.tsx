import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Shield, Zap, Handshake } from 'lucide-react';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Conocenos.module.css';

const Conocenos = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const values = [
    {
      icon: Search,
      title: 'Transparencia',
      description: 'Operamos con total transparencia, sin comisiones ocultas ni sorpresas desagradables.'
    },
    {
      icon: Shield,
      title: 'Seguridad',
      description: 'Implementamos los más altos estándares de seguridad para proteger tus operaciones.'
    },
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Procesamos tus transacciones de manera eficiente para que recibas tu dinero rápidamente.'
    },
    {
      icon: Handshake,
      title: 'Confianza',
      description: 'Más de 20 años de experiencia nos respaldan como líderes en el mercado cambiario.'
    }
  ];

  const milestones = [
    { year: '2003', title: 'Fundación', description: 'Nacimos con la visión de revolucionar el mercado cambiario venezolano' },
    { year: '2010', title: 'Expansión', description: 'Ampliamos nuestros servicios a transferencias internacionales' },
    { year: '2018', title: 'Digitalización', description: 'Implementamos plataformas digitales para mayor conveniencia' },
    { year: '2023', title: 'Liderazgo', description: 'Consolidamos nuestra posición como líderes en el sector' }
  ];

  return (
    <>
      <Helmet>
        <title>Conócenos - Insular Casa de Cambio</title>
        <meta name="description" content="Conoce a Insular Casa de Cambio, líder en servicios de cambio de divisas con más de 20 años de experiencia y compromiso con la excelencia." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src="/images/temp/accesibilidad.webp" alt="" />
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText} data-animate="fade-up">
              <h1>Conócenos</h1>
              <p>Más de dos décadas construyendo confianza en el mercado cambiario venezolano, ofreciendo servicios seguros, transparentes y con las mejores tasas del mercado.</p>
              <div className={styles.heroActions}>
                <CTAButton text="¡Conoce más!" variant="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyHeader}>
            <h2 data-animate="fade-up">Nuestra Historia</h2>
            <p data-animate="fade-up" data-delay="0.1">
              Desde 2003, hemos sido pioneros en ofrecer servicios de cambio de divisas con transparencia, 
              seguridad y las mejores tasas del mercado venezolano.
            </p>
          </div>
          
          <div className={styles.storyGrid}>
            <div className={styles.storyContent} data-animate="fade-right">
              <h3>Construyendo el futuro del cambio de divisas</h3>
              <p>
                Insular Casa de Cambio nació con la visión de revolucionar el mercado cambiario venezolano. 
                Desde nuestros inicios, hemos mantenido un compromiso inquebrantable con la transparencia, 
                la seguridad y la excelencia en el servicio.
              </p>
              <p>
                A lo largo de más de dos décadas, hemos evolucionado constantemente, adaptándonos a las 
                necesidades cambiantes del mercado y nuestros clientes. Hoy, somos reconocidos como líderes 
                en el sector, gracias a nuestra innovación tecnológica y nuestro enfoque centrado en el cliente.
              </p>
            </div>
            
            <div className={styles.missionVision} data-animate="fade-left">
              <div className={styles.missionCard}>
                <h4>Nuestra Misión</h4>
                <p>
                  Proporcionar servicios de cambio de divisas y transferencias internacionales seguros, 
                  transparentes y convenientes, superando las expectativas de nuestros clientes y 
                  contribuyendo al desarrollo económico del país.
                </p>
              </div>
              
              <div className={styles.visionCard}>
                <h4>Nuestra Visión</h4>
                <p>
                  Ser la casa de cambio digital líder en Venezuela y la región, reconocida por nuestra 
                  innovación tecnológica, compromiso con el cliente y contribución al crecimiento 
                  económico sostenible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className={styles.timelineSection}>
        <div className="container">
          <div className={styles.timelineHeader}>
            <h2 data-animate="fade-up">Nuestro Recorrido</h2>
            <p data-animate="fade-up" data-delay="0.1">
              Dos décadas de crecimiento, innovación y compromiso con nuestros clientes
            </p>
          </div>
          
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem} data-animate="fade-up" data-delay={`${0.1 * (index + 1)}`}>
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <h2 data-animate="fade-up">Nuestros Valores</h2>
            <p data-animate="fade-up" data-delay="0.1">
              Los principios que guían cada una de nuestras operaciones y decisiones
            </p>
          </div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className={styles.valueCard}
                  data-animate="fade-up"
                  data-delay={`${0.1 * (index + 1)}`}
                >
                  <div className={styles.valueIcon}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
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
            <h2>¿Listo para ser parte de nuestra historia?</h2>
            <p>
              Únete a miles de clientes que ya confían en nosotros para sus operaciones de cambio de divisas y transferencias internacionales.
            </p>
            <CTAButton text="¡Empieza ahora!" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Conocenos;