import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../../components/Section';
import CTAButton from '../../components/CTAButton';
import styles from './Conocenos.module.css';

const Conocenos = () => {
  useEffect(() => {
    // ScrollTrigger animations will be added here
  }, []);

  const values = ['Profesionalismo', 'Transparencia', 'Responsabilidad'];

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

      {/* Mission & Vision Section */}
      <section className={styles.missionVisionSection}>
        <div className="container">
          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard} data-animate="fade-up">
              <h2>Misión</h2>
              <p>
                Proporcionar servicios de cambio de divisas y transferencias internacionales seguros,
                transparentes y convenientes, superando las expectativas de nuestros clientes y
                contribuyendo al desarrollo económico del país.
              </p>
            </div>

            <div className={styles.visionCard} data-animate="fade-up" data-delay="0.1">
              <h2>Visión</h2>
              <p>
                Ser la casa de cambio digital líder en Venezuela y la región, reconocida por nuestra
                innovación tecnológica, compromiso con el cliente y contribución al crecimiento
                económico sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <section className={styles.valuesSection}>
        <div className={styles.valuesBackground}>
          <img src="/images/temp/intuitivo.webp" alt="" />
        </div>
        <div className="container">
          <div className={styles.valuesContent}>
            <h2 data-animate="fade-up">Nuestros valores</h2>
            <div className={styles.valuesPills}>
              {values.map((value, index) => (
                <span
                  key={index}
                  className={styles.valuePill}
                  data-animate="fade-up"
                  data-delay={`${0.1 * (index + 1)}`}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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